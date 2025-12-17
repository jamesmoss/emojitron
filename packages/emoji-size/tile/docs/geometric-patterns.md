# Geometric Patterns

Create visual patterns and shapes using emojis arranged in grids, pyramids, and diamonds. These functions generate multi-line strings suitable for terminal output and text-based visualizations.

## Capabilities

### Create Grid

Create a rectangular grid of emojis with specified rows and columns.

```typescript { .api }
/**
 * Create a rectangular grid of emojis
 * @param emoji - The emoji to use in the grid
 * @param rows - Number of rows in the grid
 * @param cols - Number of columns in the grid
 * @returns Multi-line string with emojis arranged in a rectangular grid
 */
function createGrid(emoji: string, rows: number, cols: number): string;
```

**Usage Examples:**

```typescript
import { createGrid } from '@emoji-toolkit/size';

// Create a 3x4 grid of stars
const starGrid = createGrid('⭐', 3, 4);
console.log(starGrid);
// Output:
// ⭐ ⭐ ⭐ ⭐
// ⭐ ⭐ ⭐ ⭐
// ⭐ ⭐ ⭐ ⭐

// Create a 2x5 grid of hearts
const heartGrid = createGrid('❤️', 2, 5);
console.log(heartGrid);
// Output:
// ❤️ ❤️ ❤️ ❤️ ❤️
// ❤️ ❤️ ❤️ ❤️ ❤️

// Single row grid
const singleRow = createGrid('🔥', 1, 6);
console.log(singleRow);
// Output:
// 🔥 🔥 🔥 🔥 🔥 🔥
```

### Create Pyramid

Create a pyramid shape of emojis with increasing width from top to bottom.

```typescript { .api }
/**
 * Create a pyramid shape of emojis
 * @param emoji - The emoji to use in the pyramid
 * @param height - Height of the pyramid (number of rows)
 * @returns Multi-line pyramid string with increasing width from top to bottom
 */
function createPyramid(emoji: string, height: number): string;
```

**Usage Examples:**

```typescript
import { createPyramid } from '@emoji-toolkit/size';

// Create a pyramid with 5 rows
const pyramid = createPyramid('🔺', 5);
console.log(pyramid);
// Output:
//     🔺
//    🔺 🔺
//   🔺 🔺 🔺
//  🔺 🔺 🔺 🔺
// 🔺 🔺 🔺 🔺 🔺

// Small pyramid
const smallPyramid = createPyramid('⛰️', 3);
console.log(smallPyramid);
// Output:
//   ⛰️
//  ⛰️ ⛰️
// ⛰️ ⛰️ ⛰️

// Single row pyramid
const singleRow = createPyramid('🎄', 1);
console.log(singleRow);
// Output:
// 🎄
```

### Create Diamond

Create a diamond shape of emojis that expands to the middle then contracts.

```typescript { .api }
/**
 * Create a diamond shape of emojis
 * @param emoji - The emoji to use in the diamond
 * @param size - Size of the diamond (width at the middle)
 * @returns Multi-line diamond string that expands to the middle then contracts
 */
function createDiamond(emoji: string, size: number): string;
```

**Usage Examples:**

```typescript
import { createDiamond } from '@emoji-toolkit/size';

// Create a diamond with size 5
const diamond = createDiamond('💎', 5);
console.log(diamond);
// Output:
//     💎
//    💎 💎
//   💎 💎 💎
//  💎 💎 💎 💎
// 💎 💎 💎 💎 💎
//  💎 💎 💎 💎
//   💎 💎 💎
//    💎 💎
//     💎

// Small diamond
const smallDiamond = createDiamond('🔷', 3);
console.log(smallDiamond);
// Output:
//   🔷
//  🔷 🔷
// 🔷 🔷 🔷
//  🔷 🔷
//   🔷

// Minimal diamond
const minDiamond = createDiamond('✨', 1);
console.log(minDiamond);
// Output:
// ✨
```

## Pattern Characteristics

### Grid Layout
- Emojis are separated by spaces
- Each row is on a new line
- Rectangular arrangement with consistent spacing
- Useful for tables, boards, and structured layouts

### Pyramid Shape
- Single emoji at the top
- Each row adds one more emoji than the previous
- Centered alignment with leading spaces
- Useful for hierarchies and upward-pointing shapes

### Diamond Shape
- Expands from one emoji to the specified size
- Contracts back to one emoji
- Centered alignment throughout
- Useful for decorative patterns and focal points
- Total height is `2 * size - 1` rows
