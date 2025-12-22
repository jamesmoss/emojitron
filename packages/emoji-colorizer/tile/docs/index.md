# Emoji Colorizer

Emoji Colorizer provides utilities for applying skin tone modifiers and color theme transformations to emoji characters. It offers type-safe operations for managing skin tones on compatible emojis and replacing emojis with color-themed alternatives.

## Package Information

- **Package Name**: @emoji-toolkit/colorizer
- **Package Type**: npm
- **Language**: TypeScript
- **Installation**: `npm install @emoji-toolkit/colorizer`

## Core Imports

```typescript
import {
  applySkinTone,
  removeSkinTone,
  getSkinTone,
  applyAllSkinTones,
  getColoredEmoji,
  colorizeHearts,
  makeGreen,
  makeBlue,
  getEmojisForTheme,
  getAvailableThemes,
  getAvailableSkinTones,
  type SkinTone,
  type ColorTheme
} from '@emoji-toolkit/colorizer';
```

For CommonJS:

```javascript
const {
  applySkinTone,
  removeSkinTone,
  getSkinTone,
  colorizeHearts,
  makeGreen,
  makeBlue
} = require('@emoji-toolkit/colorizer');
```

## Basic Usage

```typescript
import { applySkinTone, makeGreen, colorizeHearts } from '@emoji-toolkit/colorizer';

// Apply skin tone to a single emoji
const waving = applySkinTone("👋", "dark"); // "👋🏿"

// Replace heart emojis with green-themed emojis
const greenText = makeGreen("I ❤️ coding"); // "I 💚 coding" (or other green emoji)

// Replace hearts with specific color theme
const themed = colorizeHearts("Love 💙 nature", "green"); // Random green emoji replaces 💙
```

## Capabilities

### Skin Tone Application

Apply skin tone modifiers to emojis that support them.

```typescript { .api }
/**
 * Apply a skin tone modifier to an emoji
 * @param emoji - The base emoji character
 * @param tone - The skin tone to apply
 * @returns The emoji with skin tone modifier, or original if not supported
 */
function applySkinTone(emoji: string, tone: SkinTone): string;
```

**Usage Example:**

```typescript
import { applySkinTone } from '@emoji-toolkit/colorizer';

// Apply skin tones to compatible emojis
applySkinTone("👋", "light");        // "👋🏻"
applySkinTone("👋", "medium");       // "👋🏽"
applySkinTone("👋", "dark");         // "👋🏿"

// Incompatible emojis return unchanged
applySkinTone("🍕", "dark");         // "🍕"

// Replaces existing skin tone
applySkinTone("👋🏻", "dark");       // "👋🏿"
```

### Skin Tone Removal

Remove skin tone modifiers from emojis.

```typescript { .api }
/**
 * Remove skin tone modifier from an emoji
 * @param emoji - The emoji with potential skin tone
 * @returns The base emoji without skin tone modifier
 */
function removeSkinTone(emoji: string): string;
```

**Usage Example:**

```typescript
import { removeSkinTone } from '@emoji-toolkit/colorizer';

removeSkinTone("👋🏿");  // "👋"
removeSkinTone("👋🏻");  // "👋"
removeSkinTone("👋");    // "👋" (no change if no skin tone)
```

### Skin Tone Detection

Detect which skin tone is applied to an emoji.

```typescript { .api }
/**
 * Get the skin tone of an emoji
 * @param emoji - The emoji to analyze
 * @returns The skin tone or null if none applied
 */
function getSkinTone(emoji: string): SkinTone | null;
```

**Usage Example:**

```typescript
import { getSkinTone } from '@emoji-toolkit/colorizer';

getSkinTone("👋🏿");  // "dark"
getSkinTone("👋🏻");  // "light"
getSkinTone("👋🏽");  // "medium"
getSkinTone("👋");    // null (no skin tone)
getSkinTone("🍕");    // null (doesn't support skin tones)
```

### Bulk Skin Tone Application

Apply a skin tone to all compatible emojis in a text string.

```typescript { .api }
/**
 * Apply skin tone to all compatible emojis in text
 * @param text - Input text containing emojis
 * @param tone - The skin tone to apply
 * @returns Text with skin tones applied to all compatible emojis
 */
function applyAllSkinTones(text: string, tone: SkinTone): string;
```

**Usage Example:**

```typescript
import { applyAllSkinTones } from '@emoji-toolkit/colorizer';

const text = "Hello 👋 nice to meet you 🤝 let's high five ✋";
const result = applyAllSkinTones(text, "dark");
// "Hello 👋🏿 nice to meet you 🤝🏿 let's high five ✋🏿"

// Mixed emojis - only compatible ones get skin tones
const mixed = "Pizza 🍕 wave 👋 smile 😊";
const result2 = applyAllSkinTones(mixed, "light");
// "Pizza 🍕 wave 👋🏻 smile 😊"
```

### Get Available Skin Tones

List all available skin tone options.

```typescript { .api }
/**
 * Get all available skin tones
 * @returns Array of available skin tone names
 */
function getAvailableSkinTones(): SkinTone[];
```

**Usage Example:**

```typescript
import { getAvailableSkinTones } from '@emoji-toolkit/colorizer';

const tones = getAvailableSkinTones();
// ["light", "medium-light", "medium", "medium-dark", "dark"]
```

### Random Themed Emoji

Get a random emoji from a specific color theme.

```typescript { .api }
/**
 * Get a random emoji from a color theme
 * @param theme - The color theme
 * @returns A random emoji from the specified theme
 */
function getColoredEmoji(theme: ColorTheme): string;
```

**Usage Example:**

```typescript
import { getColoredEmoji } from '@emoji-toolkit/colorizer';

// Get random emojis from different themes
getColoredEmoji("green");   // "💚" or "🥒" or "🌲" etc. (random)
getColoredEmoji("blue");    // "💙" or "🌊" or "🐳" etc. (random)
getColoredEmoji("red");     // "❤️" or "🍎" or "🌹" etc. (random)
```

### Heart Colorization

Replace heart emojis in text with random emojis from a color theme.

```typescript { .api }
/**
 * Replace heart emojis with a specific color theme
 * @param text - Input text
 * @param theme - Target color theme
 * @returns Text with hearts replaced by random themed emojis
 */
function colorizeHearts(text: string, theme: ColorTheme): string;
```

**Usage Example:**

```typescript
import { colorizeHearts } from '@emoji-toolkit/colorizer';

// Replace hearts with green-themed emojis
colorizeHearts("I ❤️ nature", "green");      // "I 💚 nature" (or other green emoji)
colorizeHearts("Love 💙 the ocean", "blue"); // "Love 🌊 the ocean" (or other blue emoji)

// Multiple hearts get replaced with random selections
colorizeHearts("❤️ 💙 💚 ❤️", "yellow");     // Each gets replaced with random yellow emoji
```

### Green Theme Conversion

Convenience function to replace heart emojis with green-themed alternatives.

```typescript { .api }
/**
 * Make all heart emojis "green" themed
 * @param text - Input text
 * @returns Text with green-themed emoji replacements
 */
function makeGreen(text: string): string;
```

**Usage Example:**

```typescript
import { makeGreen } from '@emoji-toolkit/colorizer';

makeGreen("I ❤️ coding");           // "I 💚 coding" (or other green emoji)
makeGreen("Love 💙 nature");        // "Love 🌲 nature" (or other green emoji)
makeGreen("Happy 💛 Earth Day!");   // "Happy 🌿 Earth Day!" (or other green emoji)
```

### Blue Theme Conversion

Convenience function to replace heart emojis with blue-themed alternatives.

```typescript { .api }
/**
 * Make all heart emojis "blue" themed
 * @param text - Input text
 * @returns Text with blue-themed emoji replacements
 */
function makeBlue(text: string): string;
```

**Usage Example:**

```typescript
import { makeBlue } from '@emoji-toolkit/colorizer';

makeBlue("I ❤️ the ocean");    // "I 💙 the ocean" (or other blue emoji)
makeBlue("Love 💚 water");     // "Love 🌊 water" (or other blue emoji)
```

### Get Theme Emojis

Get all emojis available for a specific color theme.

```typescript { .api }
/**
 * Get all emojis for a color theme
 * @param theme - The color theme
 * @returns Array of themed emojis
 */
function getEmojisForTheme(theme: ColorTheme): string[];
```

**Usage Example:**

```typescript
import { getEmojisForTheme } from '@emoji-toolkit/colorizer';

const greenEmojis = getEmojisForTheme("green");
// ["💚", "🥒", "🥦", "🥬", "🌲", "🌳", "🌴", "🌱", "🌿", "☘️", "🍀", "🐸", "🦎", "🐢", "🐊", "🟢", "🟩", "♻️"]

const blueEmojis = getEmojisForTheme("blue");
// ["💙", "🧊", "🌊", "💎", "🐳", "🐋", "🐬", "🦋", "🫐", "🔵", "🟦", "🌀", "💠", "🧿", "🥶", "🌌"]

const redEmojis = getEmojisForTheme("red");
// ["❤️", "🔴", "🟥", "🍎", "🍒", "🌹", "🐞", "🦞", "🦀", "🍅", "🌶️", "🎈", "♥️", "❣️", "💔", "🩸"]
```

### Get Available Themes

List all available color themes.

```typescript { .api }
/**
 * Get all available color themes
 * @returns Array of available theme names
 */
function getAvailableThemes(): ColorTheme[];
```

**Usage Example:**

```typescript
import { getAvailableThemes } from '@emoji-toolkit/colorizer';

const themes = getAvailableThemes();
// ["green", "blue", "red", "yellow", "purple", "pink"]
```

## Types

```typescript { .api }
/**
 * Available skin tone modifiers
 */
type SkinTone =
  | "light"
  | "medium-light"
  | "medium"
  | "medium-dark"
  | "dark";

/**
 * Color categories for themed emoji replacement
 */
type ColorTheme =
  | "green"
  | "blue"
  | "red"
  | "yellow"
  | "purple"
  | "pink";
```

## Complete Usage Example

```typescript
import {
  applySkinTone,
  applyAllSkinTones,
  getSkinTone,
  colorizeHearts,
  getEmojisForTheme,
  getAvailableThemes,
  getAvailableSkinTones,
  type SkinTone,
  type ColorTheme
} from '@emoji-toolkit/colorizer';

// Work with skin tones
const greeting = "Hello 👋 nice to meet you 🤝";
const darkToneGreeting = applyAllSkinTones(greeting, "dark");
console.log(darkToneGreeting); // "Hello 👋🏿 nice to meet you 🤝🏿"

// Check what skin tone is applied
const tone = getSkinTone("👋🏿");
console.log(tone); // "dark"

// Apply color themes
const message = "I ❤️ coding and 💙 learning!";
const greenMessage = colorizeHearts(message, "green");
console.log(greenMessage); // Hearts replaced with random green emojis

// Discover available options
const allThemes = getAvailableThemes();
console.log(allThemes); // ["green", "blue", "red", "yellow", "purple", "pink"]

const allTones = getAvailableSkinTones();
console.log(allTones); // ["light", "medium-light", "medium", "medium-dark", "dark"]

// Get theme emojis for custom logic
const purpleEmojis = getEmojisForTheme("purple");
console.log(purpleEmojis); // ["💜", "🍇", "🍆", "🔮", "☂️", "🟣", "🟪", "👾", "🦄", "🌸", "🎵", "🪻"]

// Use types for type safety
function applyUserPreference(text: string, tone: SkinTone, theme: ColorTheme) {
  const withTones = applyAllSkinTones(text, tone);
  return colorizeHearts(withTones, theme);
}

const customized = applyUserPreference("Hey 👋 ❤️", "medium", "blue");
console.log(customized);
```

## Supported Emojis

### Skin Tone Compatible Emojis

The package supports 114 emojis that accept skin tone modifiers, including:

- **Hand gestures**: 👋, 🤚, 🖐️, ✋, 🖖, 👌, 🤌, 🤏, ✌️, 🤞, 🤟, 🤘, 🤙, 👈, 👉, 👆, 🖕, 👇, ☝️, 👍, 👎, ✊, 👊, 🤛, 🤜, 👏, 🙌, 👐, 🤲, 🤝, 🙏, ✍️, 💅, 🤳
- **Body parts**: 💪, 🦵, 🦶, 👂, 🦻, 👃
- **People**: 👶, 🧒, 👦, 👧, 🧑, 👱, 👨, 🧔, 👩, 🧓, 👴, 👵
- **Gestures & emotions**: 🙍, 🙎, 🙅, 🙆, 💁, 🙋, 🧏, 🙇, 🤦, 🤷
- **Professions**: 👮, 🕵️, 💂, 🥷, 👷, 🤴, 👸, 👳, 👲, 🧕, 🤵, 👰
- **Family & fantasy**: 🤰, 🤱, 👼, 🎅, 🤶, 🦸, 🦹, 🧙, 🧚, 🧛, 🧜, 🧝, 🧞, 🧟
- **Activities**: 💆, 💇, 🚶, 🧍, 🧎, 🏃, 💃, 🕺, 🕴️, 👯, 🧖, 🧗, 🤸, 🏌️, 🏇, ⛷️, 🏂, 🏋️, 🤼, 🤽, 🤾, 🤺, ⛹️, 🏄, 🚣, 🏊, 🚴, 🚵, 🤹

### Color Theme Emojis

Each color theme includes 12-18 carefully selected emojis:

- **Green** (18 emojis): 💚, 🥒, 🥦, 🥬, 🌲, 🌳, 🌴, 🌱, 🌿, ☘️, 🍀, 🐸, 🦎, 🐢, 🐊, 🟢, 🟩, ♻️
- **Blue** (16 emojis): 💙, 🧊, 🌊, 💎, 🐳, 🐋, 🐬, 🦋, 🫐, 🔵, 🟦, 🌀, 💠, 🧿, 🥶, 🌌
- **Red** (16 emojis): ❤️, 🔴, 🟥, 🍎, 🍒, 🌹, 🐞, 🦞, 🦀, 🍅, 🌶️, 🎈, ♥️, ❣️, 💔, 🩸
- **Yellow** (16 emojis): 💛, 🌟, ⭐, 🌻, 🌼, 🍋, 🍌, 🧀, 🟡, 🟨, 🐥, 🐤, 🌕, 🔆, ⚡, 🏆
- **Purple** (12 emojis): 💜, 🍇, 🍆, 🔮, ☂️, 🟣, 🟪, 👾, 🦄, 🌸, 🎵, 🪻
- **Pink** (15 emojis): 💗, 💖, 💕, 💓, 💞, 🌸, 🌷, 🎀, 🦩, 🐷, 🐖, 🧁, 🍧, 🩰, 🩷

### Standard Heart Emojis for Replacement

The following 10 heart emojis are replaced by `colorizeHearts`, `makeGreen`, and `makeBlue` functions:

❤️, 💙, 💚, 💛, 💜, 🖤, 🤍, 🤎, 💗, 💖
