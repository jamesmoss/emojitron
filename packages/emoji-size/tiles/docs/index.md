# Emoji Size

Emoji Size provides utilities for scaling and manipulating the visual representation of emojis. It offers predefined size scaling functions, multi-line shape generation capabilities (grids, pyramids, diamonds), progress bar builders, and utilities for batch processing emojis in text.

## Package Information

- **Package Name**: @emoji-toolkit/size
- **Package Type**: npm
- **Language**: TypeScript
- **Installation**: `npm install @emoji-toolkit/size`

## Core Imports

```typescript
import {
  scaleEmoji,
  makeLarge,
  createGrid,
  createProgressBar,
  type EmojiSize,
  type SizeConfig
} from '@emoji-toolkit/size';
```

For CommonJS:

```javascript
const {
  scaleEmoji,
  makeLarge,
  createGrid,
  createProgressBar
} = require('@emoji-toolkit/size');
```

## Basic Usage

```typescript
import { makeLarge, createGrid, createProgressBar } from '@emoji-toolkit/size';

// Scale an emoji to a predefined size
const scaled = makeLarge('⭐'); // "⭐⭐⭐"

// Create a grid of emojis
const grid = createGrid('🟦', 3, 3);
// 🟦🟦🟦
// 🟦🟦🟦
// 🟦🟦🟦

// Create a progress bar
const progress = createProgressBar('🟢', '⚪', 0.7, 10);
// "🟢🟢🟢🟢🟢🟢🟢⚪⚪⚪"
```

## Capabilities

### Size Scaling

Scale individual emojis using predefined size configurations with different repetition patterns and separators.

#### Scale Emoji

Scale an emoji to a specific size using the core scaling function.

```typescript { .api }
/**
 * Scale an emoji to a specific size
 * @param emoji - The emoji to scale
 * @param size - Target size
 * @returns Scaled emoji representation
 */
function scaleEmoji(emoji: string, size: EmojiSize): string;
```

**Usage Example:**

```typescript
import { scaleEmoji } from '@emoji-toolkit/size';

scaleEmoji('🌟', 'tiny');   // "·🌟·"
scaleEmoji('🌟', 'medium'); // "🌟🌟"
scaleEmoji('🌟', 'large');  // "🌟🌟🌟"
scaleEmoji('🌟', 'giant');  // "🌟 🌟 🌟 🌟 🌟"
```

#### Make Tiny

Create a tiny representation of an emoji (single emoji wrapped with dots).

```typescript { .api }
/**
 * Make an emoji tiny
 * @param emoji - The emoji
 * @returns Tiny representation with wrapper "·emoji·"
 */
function makeTiny(emoji: string): string;
```

**Usage Example:**

```typescript
import { makeTiny } from '@emoji-toolkit/size';

makeTiny('😀'); // "·😀·"
```

#### Make Small

Create a small representation of an emoji (single emoji, no wrapper).

```typescript { .api }
/**
 * Make an emoji small
 * @param emoji - The emoji
 * @returns Small representation (unchanged)
 */
function makeSmall(emoji: string): string;
```

#### Make Large

Create a large representation of an emoji (3 repetitions).

```typescript { .api }
/**
 * Make an emoji large
 * @param emoji - The emoji
 * @returns Large representation (3 repetitions)
 */
function makeLarge(emoji: string): string;
```

**Usage Example:**

```typescript
import { makeLarge } from '@emoji-toolkit/size';

makeLarge('😀'); // "😀😀😀"
```

#### Make Huge

Create a huge representation of an emoji (4 repetitions with spaces).

```typescript { .api }
/**
 * Make an emoji huge
 * @param emoji - The emoji
 * @returns Huge representation (4 repetitions with space separator)
 */
function makeHuge(emoji: string): string;
```

#### Make Giant

Create a giant representation of an emoji (5 repetitions with spaces).

```typescript { .api }
/**
 * Make an emoji giant
 * @param emoji - The emoji
 * @returns Giant representation (5 repetitions with space separator)
 */
function makeGiant(emoji: string): string;
```

**Usage Example:**

```typescript
import { makeGiant } from '@emoji-toolkit/size';

makeGiant('😀'); // "😀 😀 😀 😀 😀"
```

### Shape Generation

Create multi-line shapes and patterns using emojis.

#### Create Grid

Create a rectangular grid of emojis with specified dimensions.

```typescript { .api }
/**
 * Create a grid of emojis
 * @param emoji - The emoji to use
 * @param rows - Number of rows
 * @param cols - Number of columns
 * @returns Multi-line emoji grid string
 */
function createGrid(emoji: string, rows: number, cols: number): string;
```

**Usage Example:**

```typescript
import { createGrid } from '@emoji-toolkit/size';

const grid = createGrid('⭐', 2, 3);
// Output:
// ⭐⭐⭐
// ⭐⭐⭐
```

#### Create Pyramid

Create a pyramid shape with emojis, centered and expanding towards the base.

```typescript { .api }
/**
 * Create a pyramid of emojis
 * @param emoji - The emoji to use
 * @param height - Height of the pyramid
 * @returns Multi-line pyramid string with spacing
 */
function createPyramid(emoji: string, height: number): string;
```

**Usage Example:**

```typescript
import { createPyramid } from '@emoji-toolkit/size';

const pyramid = createPyramid('🔺', 3);
// Output:
//   🔺
//  🔺🔺🔺
// 🔺🔺🔺🔺🔺
```

#### Create Diamond

Create a diamond shape with emojis, expanding to the middle then contracting.

```typescript { .api }
/**
 * Create a diamond shape of emojis
 * @param emoji - The emoji to use
 * @param size - Size of the diamond (width at middle)
 * @returns Multi-line diamond string with spacing
 */
function createDiamond(emoji: string, size: number): string;
```

**Usage Example:**

```typescript
import { createDiamond } from '@emoji-toolkit/size';

const diamond = createDiamond('💎', 3);
// Output:
//  💎
// 💎💎💎
//  💎
```

#### Create Progress Bar

Create a horizontal progress bar using two different emojis for filled and empty portions.

```typescript { .api }
/**
 * Create a progress bar using emojis
 * @param fillEmoji - Emoji for filled portion
 * @param emptyEmoji - Emoji for empty portion
 * @param progress - Progress value (0-1, clamped if outside range)
 * @param length - Total length of the bar (default: 10)
 * @returns Progress bar string
 */
function createProgressBar(
  fillEmoji: string,
  emptyEmoji: string,
  progress: number,
  length?: number
): string;
```

**Usage Example:**

```typescript
import { createProgressBar } from '@emoji-toolkit/size';

// 50% progress with 10 segments
createProgressBar('🟢', '⚪', 0.5, 10);
// "🟢🟢🟢🟢🟢⚪⚪⚪⚪⚪"

// 100% progress with 5 segments
createProgressBar('✅', '⬜', 1.0, 5);
// "✅✅✅✅✅"

// Progress is clamped to [0, 1]
createProgressBar('🟢', '⚪', 1.5, 5);
// "🟢🟢🟢🟢🟢"
```

### Utility Functions

General-purpose utilities for emoji manipulation.

#### Scale All Emojis

Scale all emojis found in a text string to a specified size.

```typescript { .api }
/**
 * Scale all emojis in text to a specific size
 * @param text - Input text containing emojis
 * @param size - Target size for all emojis
 * @returns Text with all emojis scaled
 */
function scaleAllEmojis(text: string, size: EmojiSize): string;
```

**Usage Example:**

```typescript
import { scaleAllEmojis } from '@emoji-toolkit/size';

scaleAllEmojis('Hello 👋 World 🌍', 'large');
// "Hello 👋👋👋 World 🌍🌍🌍"
```

#### Repeat Emoji

Repeat an emoji a specified number of times with an optional separator.

```typescript { .api }
/**
 * Repeat an emoji n times
 * @param emoji - The emoji to repeat
 * @param count - Number of repetitions (non-negative)
 * @param separator - Optional separator between emojis (default: "")
 * @returns Repeated emoji string
 */
function repeatEmoji(emoji: string, count: number, separator?: string): string;
```

**Usage Example:**

```typescript
import { repeatEmoji } from '@emoji-toolkit/size';

repeatEmoji('🎉', 3);        // "🎉🎉🎉"
repeatEmoji('🎈', 3, ' ');   // "🎈 🎈 🎈"
repeatEmoji('🎊', 0);        // ""
```

#### Get Available Sizes

Get an array of all available size options.

```typescript { .api }
/**
 * Get available size options
 * @returns Array of available sizes
 */
function getAvailableSizes(): EmojiSize[];
```

**Usage Example:**

```typescript
import { getAvailableSizes } from '@emoji-toolkit/size';

const sizes = getAvailableSizes();
// ["tiny", "small", "medium", "large", "huge", "giant"]
```

## Types

### EmojiSize

String literal union type representing available size options.

```typescript { .api }
type EmojiSize = "tiny" | "small" | "medium" | "large" | "huge" | "giant";
```

### SizeConfig

Configuration object for customizing size output behavior.

```typescript { .api }
interface SizeConfig {
  /** Number of repetitions for the emoji */
  repeat: number;
  /** Optional wrapper characters around the emoji */
  wrapper?: {
    start: string;
    end: string;
  };
  /** Space/separator between repeated emojis */
  separator: string;
}
```

The predefined size configurations are:
- `tiny`: 1 repetition with wrapper `·emoji·`
- `small`: 1 repetition, no wrapper
- `medium`: 2 repetitions, no separator
- `large`: 3 repetitions, no separator
- `huge`: 4 repetitions with space separator
- `giant`: 5 repetitions with space separator
