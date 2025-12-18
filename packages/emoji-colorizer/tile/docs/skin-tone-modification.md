# Skin Tone Modification

Functions for applying, removing, and detecting skin tone modifiers on emojis. The package supports five skin tones (light, medium-light, medium, medium-dark, dark) that can be applied to compatible emojis.

## Capabilities

### Apply Skin Tone

Apply a skin tone modifier to a single emoji. If the emoji supports skin tone modifiers, it will return the emoji with the specified tone. If the emoji doesn't support skin tones, it returns the original emoji unchanged.

```typescript { .api }
/**
 * Apply a skin tone modifier to an emoji
 * @param emoji - The base emoji
 * @param tone - The skin tone to apply
 * @returns The emoji with skin tone modifier, or original if not supported
 */
function applySkinTone(emoji: string, tone: SkinTone): string;
```

**Usage Examples:**

```typescript
import { applySkinTone } from '@emoji-toolkit/colorizer';

// Apply dark skin tone to waving hand
const result = applySkinTone('👋', 'dark');
console.log(result); // 👋🏿

// Apply medium-light tone to thumbs up
const thumbs = applySkinTone('👍', 'medium-light');
console.log(thumbs); // 👍🏼

// Try to apply to incompatible emoji (returns original)
const pizza = applySkinTone('🍕', 'dark');
console.log(pizza); // 🍕
```

### Remove Skin Tone

Remove any skin tone modifier from an emoji, returning the base emoji.

```typescript { .api }
/**
 * Remove skin tone modifier from an emoji
 * @param emoji - The emoji with potential skin tone
 * @returns The base emoji without skin tone modifier
 */
function removeSkinTone(emoji: string): string;
```

**Usage Examples:**

```typescript
import { removeSkinTone } from '@emoji-toolkit/colorizer';

// Remove skin tone from emoji
const base = removeSkinTone('👋🏿');
console.log(base); // 👋

// Works with any skin tone
const thumbs = removeSkinTone('👍🏼');
console.log(thumbs); // 👍

// Returns same emoji if no skin tone present
const unchanged = removeSkinTone('👋');
console.log(unchanged); // 👋
```

### Get Skin Tone

Detect the skin tone modifier applied to an emoji. Returns the skin tone if present, or null if no skin tone modifier is applied.

```typescript { .api }
/**
 * Get the skin tone of an emoji
 * @param emoji - The emoji to analyze
 * @returns The skin tone or null if none applied
 */
function getSkinTone(emoji: string): SkinTone | null;
```

**Usage Examples:**

```typescript
import { getSkinTone } from '@emoji-toolkit/colorizer';

// Detect dark skin tone
const tone1 = getSkinTone('👋🏿');
console.log(tone1); // "dark"

// Detect light skin tone
const tone2 = getSkinTone('👋🏻');
console.log(tone2); // "light"

// No skin tone returns null
const tone3 = getSkinTone('👋');
console.log(tone3); // null
```

### Apply All Skin Tones

Apply a skin tone to all compatible emojis found in a text string. This batch processes an entire string, applying the specified tone to every emoji that supports skin tone modifiers.

```typescript { .api }
/**
 * Apply skin tone to all compatible emojis in text
 * @param text - Input text containing emojis
 * @param tone - The skin tone to apply
 * @returns Text with skin tones applied
 */
function applyAllSkinTones(text: string, tone: SkinTone): string;
```

**Usage Examples:**

```typescript
import { applyAllSkinTones } from '@emoji-toolkit/colorizer';

// Apply medium tone to all emojis in text
const text = 'Hello 👋 nice to meet you 👍';
const result = applyAllSkinTones(text, 'medium');
console.log(result); // Hello 👋🏽 nice to meet you 👍🏽

// Mixed content with compatible and incompatible emojis
const mixed = '🍕 Great job 👏 🍔';
const withTone = applyAllSkinTones(mixed, 'dark');
console.log(withTone); // 🍕 Great job 👏🏿 🍔
// Note: food emojis remain unchanged, only compatible emojis get tones
```

### Get Available Skin Tones

Get an array of all available skin tone options.

```typescript { .api }
/**
 * Get all available skin tones
 * @returns Array of available skin tones
 */
function getAvailableSkinTones(): SkinTone[];
```

**Usage Examples:**

```typescript
import { getAvailableSkinTones } from '@emoji-toolkit/colorizer';

const tones = getAvailableSkinTones();
console.log(tones);
// ["light", "medium-light", "medium", "medium-dark", "dark"]
```

## Compatible Emojis

The following categories of emojis support skin tone modifiers:
- Hand gestures (👋, 🤚, 🖐️, ✋, 👌, 👍, 👎, etc.)
- People and faces (👶, 🧒, 👦, 👧, 🧑, 👨, 👩, 🧓, etc.)
- Person roles (👮, 🕵️, 💂, 👷, 🤴, 👸, etc.)
- Person activities (🚶, 🧍, 🧎, 🏃, 💃, 🕺, etc.)
- Fantasy characters (🧙, 🧚, 🧛, 🧜, 🧝, etc.)
- Body parts (💪, 🦵, 🦶, 👂, 👃, etc.)

## Types

```typescript { .api }
type SkinTone =
  | "light"
  | "medium-light"
  | "medium"
  | "medium-dark"
  | "dark";
```
