# Geometric Patterns

Create structured emoji layouts including rectangular grids, pyramids, diamonds, and progress bars. Perfect for CLI tools with progress indicators, terminal-based UIs, and data visualization with emoji-based charts.

## Capabilities

### Create Grid

Create a rectangular grid of emojis with specified rows and columns. Returns a multi-line string with each row separated by newlines.

```typescript { .api }
/**
 * Create a rectangular grid of emojis
 * @param emoji - The emoji to use
 * @param rows - Number of rows
 * @param cols - Number of columns
 * @returns Multi-line emoji grid with rows separated by newlines
 */
function createGrid(emoji: string, rows: number, cols: number): string;
```

**Usage Examples:**

```typescript
import { createGrid } from "@emoji-toolkit/size";

// 3x3 grid
const grid = createGrid("⭐", 3, 3);
console.log(grid);
/*
⭐⭐⭐
⭐⭐⭐
⭐⭐⭐
*/

// 2x5 grid
const rect = createGrid("🟦", 2, 5);
console.log(rect);
/*
🟦🟦🟦🟦🟦
🟦🟦🟦🟦🟦
*/

// Single emoji
const single = createGrid("🌙", 1, 1); // "🌙"
```

### Create Pyramid

Create a pyramid shape of emojis that expands from top to bottom. The pyramid is centered with appropriate spacing.

```typescript { .api }
/**
 * Create a pyramid shape of emojis (centered, expanding from top)
 * @param emoji - The emoji to use
 * @param height - Height of the pyramid (number of rows)
 * @returns Multi-line pyramid string with proper spacing
 */
function createPyramid(emoji: string, height: number): string;
```

**Implementation Details:**
- Each row has an odd number of emojis: row 1 has 1 emoji, row 2 has 3, row 3 has 5, etc.
- Formula: row i has (i * 2 - 1) emojis
- Rows are centered with leading spaces

**Usage Examples:**

```typescript
import { createPyramid } from "@emoji-toolkit/size";

const pyramid = createPyramid("🔺", 4);
console.log(pyramid);
/*
   🔺
  🔺🔺🔺
 🔺🔺🔺🔺🔺
🔺🔺🔺🔺🔺🔺🔺
*/

const small = createPyramid("🌟", 3);
console.log(small);
/*
  🌟
 🌟🌟🌟
🌟🌟🌟🌟🌟
*/
```

### Create Diamond

Create a diamond shape of emojis that expands to a maximum width then contracts. The diamond is centered with appropriate spacing.

```typescript { .api }
/**
 * Create a diamond shape of emojis (expands then contracts)
 * @param emoji - The emoji to use
 * @param size - Size of the diamond (width at middle)
 * @returns Multi-line diamond string with proper spacing
 */
function createDiamond(emoji: string, size: number): string;
```

**Implementation Details:**
- Top half expands like a pyramid to the middle
- Bottom half contracts symmetrically
- For size n, the middle row width is determined by Math.ceil(n / 2)

**Usage Examples:**

```typescript
import { createDiamond } from "@emoji-toolkit/size";

const diamond = createDiamond("💎", 5);
console.log(diamond);
/*
  💎
 💎💎💎
💎💎💎💎💎
 💎💎💎
  💎
*/

const small = createDiamond("🔷", 3);
console.log(small);
/*
 🔷
🔷🔷🔷
 🔷
*/
```

### Create Progress Bar

Create a progress bar using different emojis for filled and empty portions. Perfect for visualizing task completion, loading states, or any percentage-based metrics.

```typescript { .api }
/**
 * Create a progress bar using different emojis for filled/empty portions
 * @param fillEmoji - Emoji for filled portion
 * @param emptyEmoji - Emoji for empty portion
 * @param progress - Progress value (0-1, automatically clamped to valid range)
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

**Implementation Details:**
- Progress is automatically clamped to the range [0, 1]
- Values < 0 are treated as 0, values > 1 are treated as 1
- The filled count is rounded to the nearest integer
- Default length is 10 segments

**Usage Examples:**

```typescript
import { createProgressBar } from "@emoji-toolkit/size";

// 50% progress, default length (10)
const half = createProgressBar("🟢", "⚪", 0.5);
console.log(half); // "🟢🟢🟢🟢🟢⚪⚪⚪⚪⚪"

// 70% progress, custom length
const progress = createProgressBar("✅", "⬜", 0.7, 10);
console.log(progress); // "✅✅✅✅✅✅✅⬜⬜⬜"

// 100% complete
const complete = createProgressBar("🔵", "⚪", 1, 5);
console.log(complete); // "🔵🔵🔵🔵🔵"

// 0% complete
const empty = createProgressBar("🟢", "⚪", 0, 3);
console.log(empty); // "⚪⚪⚪"

// Progress clamping (values outside 0-1 range)
const clamped = createProgressBar("🟢", "⚪", 1.5, 5);
console.log(clamped); // "🟢🟢🟢🟢🟢" (clamped to 1.0)

const clampedLow = createProgressBar("🟢", "⚪", -0.2, 5);
console.log(clampedLow); // "⚪⚪⚪⚪⚪" (clamped to 0.0)

// Custom emojis
const loading = createProgressBar("⬛", "⬜", 0.4, 5);
console.log(loading); // "⬛⬛⬜⬜⬜"
```
