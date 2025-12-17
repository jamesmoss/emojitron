# Utilities

Low-level utility functions for emoji repetition and querying available sizes. These functions provide the foundational capabilities that power the higher-level size scaling and pattern generation functions.

## Capabilities

### Repeat Emoji

Repeat an emoji a specified number of times with an optional separator between instances.

```typescript { .api }
/**
 * Repeat an emoji n times with an optional separator
 * @param emoji - The emoji to repeat
 * @param count - Number of repetitions (negative counts treated as 0)
 * @param separator - Optional separator between emojis (default: "")
 * @returns Repeated emoji string
 */
function repeatEmoji(emoji: string, count: number, separator?: string): string;
```

**Usage Examples:**

```typescript
import { repeatEmoji } from '@emoji-toolkit/size';

// Basic repetition with no separator
const stars = repeatEmoji('⭐', 5);
console.log(stars); // ⭐⭐⭐⭐⭐

// Repetition with space separator
const hearts = repeatEmoji('❤️', 3, ' ');
console.log(hearts); // ❤️ ❤️ ❤️

// Repetition with custom separator
const dots = repeatEmoji('🔵', 4, ' • ');
console.log(dots); // 🔵 • 🔵 • 🔵 • 🔵

// Zero repetitions
const none = repeatEmoji('🌟', 0);
console.log(none); // (empty string)

// Negative count treated as zero
const negative = repeatEmoji('💎', -3);
console.log(negative); // (empty string)

// Single repetition
const single = repeatEmoji('🎯', 1);
console.log(single); // 🎯

// Using emoji with multi-separator
const custom = repeatEmoji('🎵', 3, ' ~ ');
console.log(custom); // 🎵 ~ 🎵 ~ 🎵
```

**Implementation Notes:**
- Negative counts are treated as 0 and return an empty string
- When count is 0, an empty string is returned
- When count is 1, only the emoji is returned (no separator)
- The separator is only placed between emojis, not at the start or end
- This is the foundational function used by size scaling functions

### Get Available Sizes

Get an array of all available size options.

```typescript { .api }
/**
 * Get array of all available size options
 * @returns Array of all available size strings
 */
function getAvailableSizes(): EmojiSize[];

type EmojiSize = "tiny" | "small" | "medium" | "large" | "huge" | "giant";
```

**Usage Examples:**

```typescript
import { getAvailableSizes, scaleEmoji } from '@emoji-toolkit/size';

// Get all available sizes
const sizes = getAvailableSizes();
console.log(sizes); // ["tiny", "small", "medium", "large", "huge", "giant"]

// Iterate through all sizes
const emoji = '🌸';
sizes.forEach(size => {
  const scaled = scaleEmoji(emoji, size);
  console.log(`${size}: ${scaled}`);
});
// Output:
// tiny: ·🌸·
// small: 🌸
// medium: 🌸🌸
// large: 🌸🌸🌸
// huge: 🌸 🌸 🌸 🌸
// giant: 🌸 🌸 🌸 🌸 🌸

// Build a size selection menu
function showSizeMenu() {
  const sizes = getAvailableSizes();
  console.log('Available sizes:');
  sizes.forEach((size, index) => {
    console.log(`${index + 1}. ${size}`);
  });
}

showSizeMenu();
// Output:
// Available sizes:
// 1. tiny
// 2. small
// 3. medium
// 4. large
// 5. huge
// 6. giant

// Validate size input
function isValidSize(input: string): boolean {
  const validSizes = getAvailableSizes();
  return validSizes.includes(input as any);
}

console.log(isValidSize('large'));    // true
console.log(isValidSize('gigantic')); // false
```

**Implementation Notes:**
- Returns a new array on each call
- The order is always: tiny, small, medium, large, huge, giant
- Useful for building UI elements, validation, and iteration
- Array length is always 6

## Common Use Cases

### Custom Size Scaling

```typescript
import { repeatEmoji } from '@emoji-toolkit/size';

function customScale(emoji: string, multiplier: number) {
  // Create custom scaling logic
  const baseRepeat = 2;
  const count = baseRepeat * multiplier;
  return repeatEmoji(emoji, count, ' ');
}

console.log(customScale('🎨', 1)); // 🎨 🎨
console.log(customScale('🎨', 2)); // 🎨 🎨 🎨 🎨
console.log(customScale('🎨', 3)); // 🎨 🎨 🎨 🎨 🎨 🎨
```

### Building Dynamic Patterns

```typescript
import { repeatEmoji } from '@emoji-toolkit/size';

function createBorder(emoji: string, width: number) {
  return repeatEmoji(emoji, width, '');
}

function createBox(content: string, borderEmoji: string, width: number) {
  const border = createBorder(borderEmoji, width);
  const padding = ' '.repeat(Math.max(0, width - content.length - 2));
  return `${border}\n${borderEmoji}${content}${padding}${borderEmoji}\n${border}`;
}

console.log(createBox('Hello', '🟦', 10));
// 🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦
// 🟦Hello   🟦
// 🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦
```

### Size Validation

```typescript
import { getAvailableSizes, scaleEmoji, type EmojiSize } from '@emoji-toolkit/size';

function safeScaleEmoji(emoji: string, size: string): string {
  const validSizes = getAvailableSizes();
  if (validSizes.includes(size as EmojiSize)) {
    return scaleEmoji(emoji, size as EmojiSize);
  }
  console.warn(`Invalid size: ${size}. Using 'medium' as default.`);
  return scaleEmoji(emoji, 'medium');
}

console.log(safeScaleEmoji('🌟', 'large'));     // 🌟🌟🌟
console.log(safeScaleEmoji('🌟', 'enormous'));  // Warning + 🌟🌟
```

### Separator Patterns

```typescript
import { repeatEmoji } from '@emoji-toolkit/size';

// Create decorated dividers
const divider1 = repeatEmoji('⭐', 5, ' ✨ ');
console.log(divider1); // ⭐ ✨ ⭐ ✨ ⭐ ✨ ⭐ ✨ ⭐

// Create alternating pattern effect
const pattern = repeatEmoji('🔴', 4, '⚪');
console.log(pattern); // 🔴⚪🔴⚪🔴⚪🔴

// Create spaced headers
const header = repeatEmoji('🎯', 3, ' | ');
console.log(header); // 🎯 | 🎯 | 🎯
```
