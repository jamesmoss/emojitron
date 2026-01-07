# Size Scaling

Core emoji size scaling functionality with predefined size options. Transform emojis to six different sizes with automatic repetition and spacing patterns.

## Capabilities

### Scale Emoji

Scale an emoji to a specific size using predefined size configurations. The function applies different repetition counts, separators, and optional wrapper characters based on the selected size.

```typescript { .api }
/**
 * Scale an emoji to a specific size
 * @param emoji - The emoji to scale
 * @param size - Target size (tiny, small, medium, large, huge, or giant)
 * @returns Scaled emoji representation
 */
function scaleEmoji(emoji: string, size: EmojiSize): string;
```

**Size Configurations:**

- **tiny**: 1 repetition with · wrapper characters → `·🌟·`
- **small**: 1 repetition, no wrapper → `🌟`
- **medium**: 2 repetitions, no separator → `🌟🌟`
- **large**: 3 repetitions, no separator → `🌟🌟🌟`
- **huge**: 4 repetitions, space separator → `🌟 🌟 🌟 🌟`
- **giant**: 5 repetitions, space separator → `🌟 🌟 🌟 🌟 🌟`

**Usage Examples:**

```typescript
import { scaleEmoji } from "@emoji-toolkit/size";

const tinyEmoji = scaleEmoji("🌟", "tiny"); // "·🌟·"
const mediumEmoji = scaleEmoji("🌟", "medium"); // "🌟🌟"
const giantEmoji = scaleEmoji("🌟", "giant"); // "🌟 🌟 🌟 🌟 🌟"

// Apply different sizes to different emojis
const tiny = scaleEmoji("😀", "tiny"); // "·😀·"
const huge = scaleEmoji("🎉", "huge"); // "🎉 🎉 🎉 🎉"
```

### Make Tiny

Make an emoji tiny by adding wrapper characters around it.

```typescript { .api }
/**
 * Make an emoji tiny (adds wrapper characters ·emoji·)
 * @param emoji - The emoji
 * @returns Tiny representation with wrapper characters
 */
function makeTiny(emoji: string): string;
```

**Usage Example:**

```typescript
import { makeTiny } from "@emoji-toolkit/size";

const tiny = makeTiny("😀"); // "·😀·"
```

### Make Small

Make an emoji small (single repetition, no modifications).

```typescript { .api }
/**
 * Make an emoji small (1 repetition)
 * @param emoji - The emoji
 * @returns Small representation (unchanged)
 */
function makeSmall(emoji: string): string;
```

**Usage Example:**

```typescript
import { makeSmall } from "@emoji-toolkit/size";

const small = makeSmall("😀"); // "😀"
```

### Make Large

Make an emoji large by repeating it three times.

```typescript { .api }
/**
 * Make an emoji large (3 repetitions)
 * @param emoji - The emoji
 * @returns Large representation
 */
function makeLarge(emoji: string): string;
```

**Usage Example:**

```typescript
import { makeLarge } from "@emoji-toolkit/size";

const large = makeLarge("😀"); // "😀😀😀"
```

### Make Huge

Make an emoji huge by repeating it four times with spaces.

```typescript { .api }
/**
 * Make an emoji huge (4 repetitions with spaces)
 * @param emoji - The emoji
 * @returns Huge representation with space separators
 */
function makeHuge(emoji: string): string;
```

**Usage Example:**

```typescript
import { makeHuge } from "@emoji-toolkit/size";

const huge = makeHuge("😀"); // "😀 😀 😀 😀"
```

### Make Giant

Make an emoji giant by repeating it five times with spaces.

```typescript { .api }
/**
 * Make an emoji giant (5 repetitions with spaces)
 * @param emoji - The emoji
 * @returns Giant representation with space separators
 */
function makeGiant(emoji: string): string;
```

**Usage Example:**

```typescript
import { makeGiant } from "@emoji-toolkit/size";

const giant = makeGiant("😀"); // "😀 😀 😀 😀 😀"
```

## Types

```typescript { .api }
/** Available emoji size options */
type EmojiSize = "tiny" | "small" | "medium" | "large" | "huge" | "giant";

/** Configuration for size output */
interface SizeConfig {
  /** Number of repetitions for the emoji */
  repeat: number;
  /** Wrapper characters */
  wrapper?: { start: string; end: string };
  /** Space between repeated emojis */
  separator: string;
}
```
