# Size Scaling

Scale individual emojis to predefined sizes with different repetition counts, separators, and optional wrapper characters.

## Capabilities

### Generic Size Scaling

Scale an emoji to any predefined size using the `scaleEmoji` function.

```typescript { .api }
/**
 * Scale an emoji to a specific size
 * @param emoji - The emoji to scale
 * @param size - Target size from the EmojiSize union
 * @returns Scaled emoji string with repeats, separators, and optional wrappers
 */
function scaleEmoji(emoji: string, size: EmojiSize): string;

type EmojiSize = "tiny" | "small" | "medium" | "large" | "huge" | "giant";
```

**Usage Examples:**

```typescript
import { scaleEmoji } from '@emoji-toolkit/size';

const tinyHeart = scaleEmoji('❤️', 'tiny');
console.log(tinyHeart); // ·❤️·

const largeHeart = scaleEmoji('❤️', 'large');
console.log(largeHeart); // ❤️❤️❤️

const giantStar = scaleEmoji('⭐', 'giant');
console.log(giantStar); // ⭐ ⭐ ⭐ ⭐ ⭐
```

### Make Tiny

Make an emoji tiny size by wrapping it with middle dot characters.

```typescript { .api }
/**
 * Make an emoji tiny size
 * @param emoji - The emoji to make tiny
 * @returns Tiny emoji wrapped with middle dots (·emoji·)
 */
function makeTiny(emoji: string): string;
```

**Usage Examples:**

```typescript
import { makeTiny } from '@emoji-toolkit/size';

console.log(makeTiny('🌟')); // ·🌟·
console.log(makeTiny('💎')); // ·💎·
```

### Make Small

Make an emoji small size (returns the emoji as-is, single instance).

```typescript { .api }
/**
 * Make an emoji small size
 * @param emoji - The emoji to make small
 * @returns Small emoji (single emoji, no wrapper, no separator)
 */
function makeSmall(emoji: string): string;
```

**Usage Examples:**

```typescript
import { makeSmall } from '@emoji-toolkit/size';

console.log(makeSmall('🎯')); // 🎯
console.log(makeSmall('🔥')); // 🔥
```

### Make Large

Make an emoji large size by repeating it 3 times with no separator.

```typescript { .api }
/**
 * Make an emoji large size
 * @param emoji - The emoji to make large
 * @returns Large emoji (repeated 3 times with no separator)
 */
function makeLarge(emoji: string): string;
```

**Usage Examples:**

```typescript
import { makeLarge } from '@emoji-toolkit/size';

console.log(makeLarge('✨')); // ✨✨✨
console.log(makeLarge('🌈')); // 🌈🌈🌈
```

### Make Huge

Make an emoji huge size by repeating it 4 times with space separators.

```typescript { .api }
/**
 * Make an emoji huge size
 * @param emoji - The emoji to make huge
 * @returns Huge emoji (repeated 4 times with space separator)
 */
function makeHuge(emoji: string): string;
```

**Usage Examples:**

```typescript
import { makeHuge } from '@emoji-toolkit/size';

console.log(makeHuge('🎨')); // 🎨 🎨 🎨 🎨
console.log(makeHuge('🌺')); // 🌺 🌺 🌺 🌺
```

### Make Giant

Make an emoji giant size by repeating it 5 times with space separators.

```typescript { .api }
/**
 * Make an emoji giant size
 * @param emoji - The emoji to make giant
 * @returns Giant emoji (repeated 5 times with space separator)
 */
function makeGiant(emoji: string): string;
```

**Usage Examples:**

```typescript
import { makeGiant } from '@emoji-toolkit/size';

console.log(makeGiant('🎪')); // 🎪 🎪 🎪 🎪 🎪
console.log(makeGiant('🎭')); // 🎭 🎭 🎭 🎭 🎭
```

## Size Configuration Reference

Each size has a specific configuration:

- **tiny**: 1 repetition, wrapped with middle dots (·emoji·)
- **small**: 1 repetition, no wrapper, no separator
- **medium**: 2 repetitions, no separator
- **large**: 3 repetitions, no separator
- **huge**: 4 repetitions, space separator
- **giant**: 5 repetitions, space separator

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
