# Emoji Size

Comprehensive emoji size manipulation utilities that enable developers to scale emojis to various predefined sizes (tiny, small, medium, large, huge, giant) with configurable repetition and spacing patterns. It offers functions for creating structured emoji layouts including grids, pyramids, diamonds, and progress bars, as well as utilities for repeating emojis with custom separators and applying size transformations to all emojis within text strings.

## Package Information

- **Package Name**: @emoji-toolkit/size
- **Package Type**: npm
- **Language**: TypeScript
- **Installation**: `npm install @emoji-toolkit/size`

## Core Imports

```typescript
import { scaleEmoji, makeLarge, createGrid, type EmojiSize } from "@emoji-toolkit/size";
```

For CommonJS:

```javascript
const { scaleEmoji, makeLarge, createGrid } = require("@emoji-toolkit/size");
```

## Basic Usage

```typescript
import { scaleEmoji, makeLarge, createGrid, createProgressBar } from "@emoji-toolkit/size";

// Scale an emoji to a specific size
const tinyEmoji = scaleEmoji("🌟", "tiny"); // ·🌟·
const giantEmoji = scaleEmoji("🌟", "giant"); // 🌟 🌟 🌟 🌟 🌟

// Use convenience functions
const largeHeart = makeLarge("❤️"); // ❤️❤️❤️

// Create patterns
const grid = createGrid("⭐", 3, 3);
/*
⭐⭐⭐
⭐⭐⭐
⭐⭐⭐
*/

// Progress visualization
const progress = createProgressBar("🟢", "⚪", 0.7, 10); // 🟢🟢🟢🟢🟢🟢🟢⚪⚪⚪
```

## Capabilities

### Size Scaling

Core emoji size scaling functionality with predefined size options. Transform emojis to six different sizes with automatic repetition and spacing patterns.

```typescript { .api }
type EmojiSize = "tiny" | "small" | "medium" | "large" | "huge" | "giant";

function scaleEmoji(emoji: string, size: EmojiSize): string;
function makeTiny(emoji: string): string;
function makeSmall(emoji: string): string;
function makeLarge(emoji: string): string;
function makeHuge(emoji: string): string;
function makeGiant(emoji: string): string;
```

[Size Scaling](./size-scaling.md)

### Geometric Patterns

Create structured emoji layouts including rectangular grids, pyramids, diamonds, and progress bars. Perfect for CLI tools with progress indicators, terminal-based UIs, and data visualization with emoji-based charts.

```typescript { .api }
function createGrid(emoji: string, rows: number, cols: number): string;
function createPyramid(emoji: string, height: number): string;
function createDiamond(emoji: string, size: number): string;
function createProgressBar(
  fillEmoji: string,
  emptyEmoji: string,
  progress: number,
  length?: number
): string;
```

[Geometric Patterns](./geometric-patterns.md)

### Text Processing

Process text containing emojis to scale all emoji characters to a specific size while preserving non-emoji content.

```typescript { .api }
function scaleAllEmojis(text: string, size: EmojiSize): string;
```

[Text Processing](./text-processing.md)

### Utilities

Utility functions for repeating emojis with custom separators and querying available size options.

```typescript { .api }
function repeatEmoji(emoji: string, count: number, separator?: string): string;
function getAvailableSizes(): EmojiSize[];
```

[Utilities](./utilities.md)

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
