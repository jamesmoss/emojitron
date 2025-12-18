# ZWJ Sequence Operations

Zero-Width Joiner (ZWJ) operations for creating composite emojis, analyzing emoji sequences, and working with emoji combinations that render as single glyphs.

## Capabilities

### Join with ZWJ

Join emojis with the Zero-Width Joiner character. Only certain emoji combinations render as single composite emojis (e.g., family emojis, profession emojis, flag variants).

```typescript { .api }
/**
 * Join emojis with Zero-Width Joiner
 * Note: Only certain combinations render as single emojis
 * @param emojis - Variable number of emoji strings to join
 * @returns ZWJ-joined emoji string
 */
function joinWithZWJ(...emojis: string[]): string;
```

**Usage Examples:**

```typescript
import { joinWithZWJ } from "@emoji-toolkit/combiner";

// Create profession emoji
const result = joinWithZWJ("👨", "💻");
// Result: "👨‍💻" (man technologist)

// Create family emoji
const family = joinWithZWJ("👨", "👩", "👧");
// Result: "👨‍👩‍👧" (family: man, woman, girl)

// Create rainbow flag
const flag = joinWithZWJ("🏳️", "🌈");
// Result: "🏳️‍🌈" (rainbow flag)
```

### Create Family

Create a family emoji combination using ZWJ. This is a convenience wrapper around `joinWithZWJ` specifically for family emojis.

```typescript { .api }
/**
 * Create a family emoji combination
 * @param members - Family member emojis (e.g., "👨", "👩", "👧", "👦")
 * @returns Combined family emoji
 */
function createFamily(...members: string[]): string;
```

**Usage Examples:**

```typescript
import { createFamily } from "@emoji-toolkit/combiner";

// Nuclear family with one daughter
const family1 = createFamily("👨", "👩", "👧");
// Result: "👨‍👩‍👧"

// Nuclear family with two children
const family2 = createFamily("👨", "👩", "👧", "👦");
// Result: "👨‍👩‍👧‍👦"

// Same-gender family
const family3 = createFamily("👩", "👩", "👦");
// Result: "👩‍👩‍👦"
```

### Create Profession

Create a profession emoji by combining a person emoji with a tool or symbol emoji.

```typescript { .api }
/**
 * Create a profession emoji (person + tool/symbol)
 * @param person - Person emoji (e.g., "👨", "👩", "🧑")
 * @param item - Profession symbol emoji (e.g., "💻", "🔬", "🎨")
 * @returns Combined profession emoji
 */
function createProfession(person: string, item: string): string;
```

**Usage Examples:**

```typescript
import { createProfession } from "@emoji-toolkit/combiner";

// Create various profession emojis
const programmer = createProfession("👩", "💻"); // Woman technologist
const scientist = createProfession("👨", "🔬"); // Man scientist
const artist = createProfession("👩", "🎨"); // Woman artist
const astronaut = createProfession("👨", "🚀"); // Man astronaut
const chef = createProfession("👩", "🍳"); // Woman chef
```

### Split ZWJ

Split a ZWJ emoji sequence into its component emojis.

```typescript { .api }
/**
 * Split a ZWJ sequence into its components
 * @param emoji - The ZWJ emoji sequence
 * @returns Array of component emojis (filters out empty strings)
 */
function splitZWJ(emoji: string): string[];
```

**Usage Examples:**

```typescript
import { splitZWJ } from "@emoji-toolkit/combiner";

// Split profession emoji
const components1 = splitZWJ("👨‍💻");
// Result: ["👨", "💻"]

// Split family emoji
const components2 = splitZWJ("👨‍👩‍👧‍👦");
// Result: ["👨", "👩", "👧", "👦"]

// Split rainbow flag
const components3 = splitZWJ("🏳️‍🌈");
// Result: ["🏳️", "🌈"]
```

### Check if ZWJ Sequence

Check whether an emoji string is a ZWJ sequence.

```typescript { .api }
/**
 * Check if an emoji is a ZWJ sequence
 * @param emoji - The emoji to check
 * @returns True if it's a ZWJ sequence, false otherwise
 */
function isZWJSequence(emoji: string): boolean;
```

**Usage Examples:**

```typescript
import { isZWJSequence } from "@emoji-toolkit/combiner";

// Check various emojis
isZWJSequence("👨‍💻"); // true
isZWJSequence("👨‍👩‍👧"); // true
isZWJSequence("🏳️‍🌈"); // true
isZWJSequence("😀"); // false
isZWJSequence("🌟"); // false
```

### Get Known ZWJ Combinations

Get all known ZWJ combinations that are recognized by the library. Returns a mapping of combined emojis to their component arrays.

```typescript { .api }
/**
 * Get known ZWJ combinations
 * @returns Object mapping combined emojis to their component arrays
 */
function getKnownZWJCombinations(): Record<string, string[]>;
```

**Usage Examples:**

```typescript
import { getKnownZWJCombinations } from "@emoji-toolkit/combiner";

const combinations = getKnownZWJCombinations();

// Example entries:
// {
//   "👨‍👩‍👧": ["👨", "👩", "👧"],
//   "👨‍👩‍👦": ["👨", "👩", "👦"],
//   "👨‍👩‍👧‍👦": ["👨", "👩", "👧", "👦"],
//   "👨‍💻": ["👨", "💻"],
//   "👩‍💻": ["👩", "💻"],
//   "👨‍🔬": ["👨", "🔬"],
//   "👩‍🔬": ["👩", "🔬"],
//   "👨‍🎨": ["👨", "🎨"],
//   "👩‍🎨": ["👩", "🎨"],
//   "👨‍🚀": ["👨", "🚀"],
//   "👩‍🚀": ["👩", "🚀"],
//   "👨‍🍳": ["👨", "🍳"],
//   "👩‍🍳": ["👩", "🍳"],
//   "🏳️‍🌈": ["🏳️", "🌈"],
//   "🏴‍☠️": ["🏴", "☠️"],
//   "❤️‍🔥": ["❤️", "🔥"],
//   "❤️‍🩹": ["❤️", "🩹"],
//   "😶‍🌫️": ["😶", "🌫️"],
//   "🐻‍❄️": ["🐻", "❄️"]
// }
```

### Decompose ZWJ

Find what emojis make up a ZWJ combination. Works for both known combinations and unknown ZWJ sequences.

```typescript { .api }
/**
 * Find what emojis make up a ZWJ combination
 * @param emoji - The combined emoji
 * @returns Array of component emojis or null if not a ZWJ sequence
 */
function decomposeZWJ(emoji: string): string[] | null;
```

**Usage Examples:**

```typescript
import { decomposeZWJ } from "@emoji-toolkit/combiner";

// Decompose known combination
const result1 = decomposeZWJ("👨‍💻");
// Result: ["👨", "💻"]

// Decompose family emoji
const result2 = decomposeZWJ("👨‍👩‍👧");
// Result: ["👨", "👩", "👧"]

// Try with non-ZWJ emoji
const result3 = decomposeZWJ("😀");
// Result: null

// Decompose unknown ZWJ sequence (falls back to splitZWJ)
const result4 = decomposeZWJ("🧑‍🤝‍🧑");
// Result: ["🧑", "🤝", "🧑"] (if it contains ZWJ)
```
