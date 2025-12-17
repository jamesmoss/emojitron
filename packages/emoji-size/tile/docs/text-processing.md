# Text Processing

Process text containing emojis and create visual representations like progress bars. These functions are useful for enhancing terminal output, CLI tools, and text-based user interfaces.

## Capabilities

### Scale All Emojis

Scale all emojis found in a text string to a specific size while preserving non-emoji text.

```typescript { .api }
/**
 * Scale all emojis in a text string to a specific size
 * @param text - Input text containing emojis
 * @param size - Target size for all emojis
 * @returns Text with all emojis scaled to the specified size
 */
function scaleAllEmojis(text: string, size: EmojiSize): string;

type EmojiSize = "tiny" | "small" | "medium" | "large" | "huge" | "giant";
```

**Usage Examples:**

```typescript
import { scaleAllEmojis } from '@emoji-toolkit/size';

// Scale all emojis to large size
const text = 'Hello 👋 World 🌍';
const scaled = scaleAllEmojis(text, 'large');
console.log(scaled); // Hello 👋👋👋 World 🌍🌍🌍

// Scale to tiny size
const tinyText = scaleAllEmojis('Status: ✅ Complete', 'tiny');
console.log(tinyText); // Status: ·✅· Complete

// Scale to huge size with spaces
const hugeText = scaleAllEmojis('Fire 🔥', 'huge');
console.log(hugeText); // Fire 🔥 🔥 🔥 🔥

// Text without emojis remains unchanged
const noEmoji = scaleAllEmojis('Hello World', 'giant');
console.log(noEmoji); // Hello World

// Multiple different emojis
const mixed = scaleAllEmojis('🎉 Party 🎊 Time 🥳', 'medium');
console.log(mixed); // 🎉🎉 Party 🎊🎊 Time 🥳🥳
```

**Implementation Notes:**
- Uses Unicode emoji detection regex to identify emojis in the text
- Non-emoji characters are preserved exactly as-is
- Each emoji is scaled independently
- Works with single-character and multi-codepoint emojis

### Create Progress Bar

Create a progress bar visualization using two emojis to represent filled and empty portions.

```typescript { .api }
/**
 * Create a progress bar visualization using emojis
 * @param fillEmoji - Emoji to use for the filled portion
 * @param emptyEmoji - Emoji to use for the empty portion
 * @param progress - Progress value between 0 and 1 (clamped to this range)
 * @param length - Total length of the progress bar (default: 10)
 * @returns Progress bar string with filled and empty emojis
 */
function createProgressBar(
  fillEmoji: string,
  emptyEmoji: string,
  progress: number,
  length?: number
): string;
```

**Usage Examples:**

```typescript
import { createProgressBar } from '@emoji-toolkit/size';

// 70% progress with default length (10)
const bar1 = createProgressBar('🟩', '⬜', 0.7);
console.log(bar1); // 🟩🟩🟩🟩🟩🟩🟩⬜⬜⬜

// 50% progress with custom length
const bar2 = createProgressBar('✅', '⬛', 0.5, 8);
console.log(bar2); // ✅✅✅✅⬛⬛⬛⬛

// 100% complete
const bar3 = createProgressBar('🔵', '⚪', 1.0, 5);
console.log(bar3); // 🔵🔵🔵🔵🔵

// 0% progress
const bar4 = createProgressBar('🟢', '🔴', 0.0, 6);
console.log(bar4); // 🔴🔴🔴🔴🔴🔴

// Values over 1.0 are clamped to 1.0
const bar5 = createProgressBar('💚', '🤍', 1.5, 4);
console.log(bar5); // 💚💚💚💚

// Negative values are clamped to 0.0
const bar6 = createProgressBar('💙', '🤍', -0.3, 4);
console.log(bar6); // 🤍🤍🤍🤍

// 33% progress
const bar7 = createProgressBar('🟨', '⬜', 0.33, 6);
console.log(bar7); // 🟨🟨⬜⬜⬜⬜

// Custom emoji combinations
const bar8 = createProgressBar('🍕', '📦', 0.6, 10);
console.log(bar8); // 🍕🍕🍕🍕🍕🍕📦📦📦📦
```

**Implementation Notes:**
- Progress is clamped between 0.0 and 1.0
- Fill count is calculated as `Math.round(progress * length)`
- Default length is 10 if not specified
- No spaces between emojis in the output
- Useful for showing completion status, loading indicators, and data visualization

## Common Use Cases

### Terminal Progress Indicators

```typescript
import { createProgressBar } from '@emoji-toolkit/size';

function showProgress(current: number, total: number) {
  const progress = current / total;
  const bar = createProgressBar('█', '░', progress, 20);
  console.log(`Progress: ${bar} ${Math.round(progress * 100)}%`);
}

showProgress(7, 10); // Progress: ████████████████░░░░ 70%
```

### Enhanced Log Messages

```typescript
import { scaleAllEmojis } from '@emoji-toolkit/size';

function logSuccess(message: string) {
  const enhanced = scaleAllEmojis(`✅ ${message}`, 'medium');
  console.log(enhanced);
}

logSuccess('Build complete'); // ✅✅ Build complete
```

### Status Indicators

```typescript
import { createProgressBar, scaleAllEmojis } from '@emoji-toolkit/size';

function showStatus(label: string, emoji: string, percent: number) {
  const bar = createProgressBar('🟢', '⚪', percent, 15);
  const title = scaleAllEmojis(`${emoji} ${label}`, 'large');
  console.log(`${title}\n${bar}`);
}

showStatus('CPU Usage', '💻', 0.65);
// 💻💻💻 CPU Usage
// 🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢⚪⚪⚪⚪⚪
```
