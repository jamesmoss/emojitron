# Pattern Generation

Create visual patterns and effects with emojis including waves, mirrors, alternating patterns, and decorative borders.

## Capabilities

### Wave Pattern

Create a wave pattern where the emoji count increases to a maximum and then decreases back down, with groups separated by spaces.

```typescript { .api }
/**
 * Create a wave pattern (increasing then decreasing count)
 * @param emoji - The emoji to use
 * @param maxCount - Maximum count at peak
 * @returns Wave pattern string with space-separated groups
 */
function wave(emoji: string, maxCount: number): string;
```

**Usage Examples:**

```typescript
import { wave } from "@emoji-toolkit/combiner";

// Small wave
const wave1 = wave("🌊", 3);
// Result: "🌊 🌊🌊 🌊🌊🌊 🌊🌊 🌊"

// Star wave
const wave2 = wave("⭐", 4);
// Result: "⭐ ⭐⭐ ⭐⭐⭐ ⭐⭐⭐⭐ ⭐⭐⭐ ⭐⭐ ⭐"

// Fire wave
const wave3 = wave("🔥", 5);
// Result: "🔥 🔥🔥 🔥🔥🔥 🔥🔥🔥🔥 🔥🔥🔥🔥🔥 🔥🔥🔥🔥 🔥🔥🔥 🔥🔥 🔥"
```

### Mirror Pattern

Create a mirrored sequence from an array of emojis. The pattern goes forward and then backward, without duplicating the center element.

```typescript { .api }
/**
 * Create a mirror pattern
 * @param emojis - Array of emojis
 * @returns Mirrored sequence (emojis + reverse without center duplication)
 */
function mirror(emojis: string[]): string;
```

**Usage Examples:**

```typescript
import { mirror } from "@emoji-toolkit/combiner";

// Color progression
const colors = mirror(["🔴", "🟡", "🟢"]);
// Result: "🔴🟡🟢🟡🔴"

// Traffic light mirror
const traffic = mirror(["🔴", "🟡", "🟢", "🟡"]);
// Result: "🔴🟡🟢🟡🟡🟢🟡🔴"

// Single emoji
const single = mirror(["⭐"]);
// Result: "⭐"

// Two emojis
const two = mirror(["🌙", "☀️"]);
// Result: "🌙☀️🌙"
```

### Alternating Pattern

Create an alternating pattern of two emojis for a specified number of alternations.

```typescript { .api }
/**
 * Create an alternating pattern of two emojis
 * @param emoji1 - First emoji
 * @param emoji2 - Second emoji
 * @param count - Number of total emojis (alternates between the two)
 * @returns Alternating pattern string
 */
function alternate(emoji1: string, emoji2: string, count: number): string;
```

**Usage Examples:**

```typescript
import { alternate } from "@emoji-toolkit/combiner";

// Black and white pattern
const checkerboard = alternate("⚫", "⚪", 6);
// Result: "⚫⚪⚫⚪⚫⚪"

// Day and night
const dayNight = alternate("☀️", "🌙", 8);
// Result: "☀️🌙☀️🌙☀️🌙☀️🌙"

// Plus and minus
const plusMinus = alternate("➕", "➖", 5);
// Result: "➕➖➕➖➕"
```

### Add Border

Add a border emoji around a center emoji, creating a bordered display.

```typescript { .api }
/**
 * Create a bordered emoji display
 * @param emoji - The center emoji
 * @param border - The border emoji
 * @returns Bordered emoji string (border + emoji + border)
 */
function addBorder(emoji: string, border: string): string;
```

**Usage Examples:**

```typescript
import { addBorder } from "@emoji-toolkit/combiner";

// Star with sparkles
const bordered1 = addBorder("⭐", "✨");
// Result: "✨⭐✨"

// Heart with flowers
const bordered2 = addBorder("❤️", "🌸");
// Result: "🌸❤️🌸"

// Gift with ribbons
const bordered3 = addBorder("🎁", "🎀");
// Result: "🎀🎁🎀"
```

### Sandwich Pattern

Create a sandwich pattern where a center emoji is surrounded by outer emojis (identical to `addBorder` but with different semantic meaning).

```typescript { .api }
/**
 * Create a sandwich pattern (emoji surrounded by others)
 * @param center - Center emoji
 * @param outer - Outer emoji
 * @returns Sandwiched emoji (outer + center + outer)
 */
function sandwich(center: string, outer: string): string;
```

**Usage Examples:**

```typescript
import { sandwich } from "@emoji-toolkit/combiner";

// Classic sandwich
const food = sandwich("🍔", "🍞");
// Result: "🍞🍔🍞"

// Hug emoji
const hug = sandwich("❤️", "🤗");
// Result: "🤗❤️🤗"

// Protected item
const safe = sandwich("💎", "🛡️");
// Result: "🛡️💎🛡️"
```

## Pattern Combinations

You can combine multiple pattern functions to create complex designs:

```typescript
import { wave, mirror, alternate } from "@emoji-toolkit/combiner";

// Mirrored wave
const emojis = ["🔴", "🟡", "🟢"];
const mirroredColors = mirror(emojis);
// "🔴🟡🟢🟡🔴"

// Alternating with longer sequence
const pattern = alternate("🌟", "🌙", 10);
// "🌟🌙🌟🌙🌟🌙🌟🌙🌟🌙"

// Multiple waves
const doubleWave = `${wave("🌊", 3)} | ${wave("🌊", 3)}`;
// "🌊 🌊🌊 🌊🌊🌊 🌊🌊 🌊 | 🌊 🌊🌊 🌊🌊🌊 🌊🌊 🌊"
```
