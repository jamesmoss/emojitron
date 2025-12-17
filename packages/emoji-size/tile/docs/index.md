# Emoji Size

Emoji Size is a TypeScript library that provides utilities for manipulating emoji display sizes and creating visual patterns with emojis. It offers functions to scale emojis to different predefined sizes, create geometric shapes like grids and pyramids, generate progress bars, and manipulate emoji text representations with configurable repetition and formatting.

## Package Information

- **Package Name**: @emoji-toolkit/size
- **Package Type**: npm
- **Language**: TypeScript
- **Installation**: `npm install @emoji-toolkit/size`

## Core Imports

```typescript
import { scaleEmoji, makeTiny, createGrid, type EmojiSize, type SizeConfig } from '@emoji-toolkit/size';
```

For CommonJS:

```javascript
const { scaleEmoji, makeTiny, createGrid } = require('@emoji-toolkit/size');
```

## Basic Usage

```typescript
import { makeLarge, createGrid, createProgressBar } from '@emoji-toolkit/size';

// Scale an emoji to large size
const largeHeart = makeLarge('❤️');
console.log(largeHeart); // ❤️❤️❤️

// Create a grid of emojis
const starGrid = createGrid('⭐', 3, 4);
console.log(starGrid);
// ⭐ ⭐ ⭐ ⭐
// ⭐ ⭐ ⭐ ⭐
// ⭐ ⭐ ⭐ ⭐

// Create a progress bar
const progress = createProgressBar('🟩', '⬜', 0.7, 10);
console.log(progress); // 🟩🟩🟩🟩🟩🟩🟩⬜⬜⬜
```

## Architecture

Emoji Size is built around several key functional areas:

- **Size Scaling Functions**: Predefined size transformations (tiny, small, medium, large, huge, giant) with configurable repetition and wrapping
- **Geometric Pattern Functions**: Shape generation (grids, pyramids, diamonds) using emoji repetition
- **Text Processing Functions**: Utilities for scaling all emojis in text and creating progress bars
- **Low-level Utilities**: Core functions for emoji repetition and size enumeration

## Capabilities

### Size Scaling

Scale individual emojis to predefined sizes with different repetition counts and formatting. Includes both a generic scaling function and dedicated size-specific functions.

```typescript { .api }
function scaleEmoji(emoji: string, size: EmojiSize): string;

function makeTiny(emoji: string): string;
function makeSmall(emoji: string): string;
function makeLarge(emoji: string): string;
function makeHuge(emoji: string): string;
function makeGiant(emoji: string): string;

type EmojiSize = "tiny" | "small" | "medium" | "large" | "huge" | "giant";
```

[Size Scaling](./size-scaling.md)

### Geometric Patterns

Create visual patterns and shapes using emojis arranged in grids, pyramids, and diamonds.

```typescript { .api }
function createGrid(emoji: string, rows: number, cols: number): string;
function createPyramid(emoji: string, height: number): string;
function createDiamond(emoji: string, size: number): string;
```

[Geometric Patterns](./geometric-patterns.md)

### Text Processing

Process text containing emojis and create visual representations like progress bars.

```typescript { .api }
function scaleAllEmojis(text: string, size: EmojiSize): string;
function createProgressBar(
  fillEmoji: string,
  emptyEmoji: string,
  progress: number,
  length?: number
): string;
```

[Text Processing](./text-processing.md)

### Utilities

Low-level utility functions for emoji repetition and querying available sizes.

```typescript { .api }
function repeatEmoji(emoji: string, count: number, separator?: string): string;
function getAvailableSizes(): EmojiSize[];
```

[Utilities](./utilities.md)

## Types

```typescript { .api }
type EmojiSize = "tiny" | "small" | "medium" | "large" | "huge" | "giant";

interface SizeConfig {
  repeat: number;
  wrapper?: {
    start: string;
    end: string;
  };
  separator: string;
}
```

**EmojiSize**: String union type representing all available predefined size options.

**SizeConfig**: Configuration interface for size formatting, including repetition count, optional wrapper characters, and separator between repeated emojis.
