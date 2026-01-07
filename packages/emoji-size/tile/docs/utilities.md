# Utilities

Utility functions for repeating emojis with custom separators and querying available size options.

## Capabilities

### Repeat Emoji

Repeat an emoji a specified number of times with an optional separator between repetitions.

```typescript { .api }
/**
 * Repeat an emoji n times with optional separator
 * @param emoji - The emoji to repeat
 * @param count - Number of repetitions (negative values treated as 0)
 * @param separator - Optional separator between emojis (default: "")
 * @returns Repeated emoji string
 */
function repeatEmoji(emoji: string, count: number, separator?: string): string;
```

**Implementation Details:**
- Negative count values are treated as 0 (returns empty string)
- Default separator is empty string (emojis are concatenated directly)
- Uses `Math.max(0, count)` to ensure non-negative repetition count

**Usage Examples:**

```typescript
import { repeatEmoji } from "@emoji-toolkit/size";

// Basic repetition (no separator)
const repeated = repeatEmoji("🎉", 3);
console.log(repeated); // "🎉🎉🎉"

// With space separator
const spaced = repeatEmoji("🎈", 4, " ");
console.log(spaced); // "🎈 🎈 🎈 🎈"

// Custom separator
const custom = repeatEmoji("⭐", 3, " - ");
console.log(custom); // "⭐ - ⭐ - ⭐"

// Zero count
const empty = repeatEmoji("🎊", 0);
console.log(empty); // ""

// Negative count (treated as 0)
const negative = repeatEmoji("🎁", -5);
console.log(negative); // ""

// Single repetition
const single = repeatEmoji("🌟", 1);
console.log(single); // "🌟"

// Multi-character separator
const pipes = repeatEmoji("🔵", 3, " | ");
console.log(pipes); // "🔵 | 🔵 | 🔵"
```

### Get Available Sizes

Get an array of all available size options. Useful for validation, UI generation, or documentation purposes.

```typescript { .api }
/**
 * Get array of available size options
 * @returns Array containing all available size strings
 */
function getAvailableSizes(): EmojiSize[];
```

**Implementation Details:**
- Returns all six predefined size options
- Order: ["tiny", "small", "medium", "large", "huge", "giant"]

**Usage Examples:**

```typescript
import { getAvailableSizes } from "@emoji-toolkit/size";

// Get all available sizes
const sizes = getAvailableSizes();
console.log(sizes); // ["tiny", "small", "medium", "large", "huge", "giant"]

// Validate a size value
const userSize = "large";
if (getAvailableSizes().includes(userSize)) {
  console.log("Valid size");
}

// Generate UI options
const sizeOptions = getAvailableSizes().map((size) => ({
  label: size.charAt(0).toUpperCase() + size.slice(1),
  value: size,
}));
// Result: [{ label: "Tiny", value: "tiny" }, ...]

// Iterate over all sizes
for (const size of getAvailableSizes()) {
  console.log(`Size: ${size}`);
}
```

## Types

```typescript { .api }
/** Available emoji size options */
type EmojiSize = "tiny" | "small" | "medium" | "large" | "huge" | "giant";
```
