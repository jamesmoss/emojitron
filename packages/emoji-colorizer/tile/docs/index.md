# Emoji Colorizer

Emoji Colorizer provides utilities for applying color modifications and skin tone variations to emojis. It enables dynamic modification of emoji appearance through skin tone modifiers (light, medium-light, medium, medium-dark, dark) for compatible emojis, and color-themed transformations by replacing standard emojis with themed alternatives from predefined color categories (green, blue, red, yellow, purple, pink).

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
  type ColorTheme,
} from '@emoji-toolkit/colorizer';
```

For CommonJS:

```javascript
const {
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
} = require('@emoji-toolkit/colorizer');
```

## Basic Usage

```typescript
import { applySkinTone, colorizeHearts } from '@emoji-toolkit/colorizer';

// Apply skin tone to an emoji
const waveWithTone = applySkinTone('👋', 'dark');
console.log(waveWithTone); // 👋🏿

// Replace heart emojis with themed emojis
const greenText = colorizeHearts('I ❤️ nature', 'green');
console.log(greenText); // I 💚 nature (or another green emoji)
```

## Capabilities

### Skin Tone Modification

Functions for applying, removing, and detecting skin tone modifiers on emojis. The package supports five skin tones (light, medium-light, medium, medium-dark, dark) that can be applied to compatible emojis such as hand gestures, people, and various human-related emojis.

```typescript { .api }
function applySkinTone(emoji: string, tone: SkinTone): string;

function removeSkinTone(emoji: string): string;

function getSkinTone(emoji: string): SkinTone | null;

function applyAllSkinTones(text: string, tone: SkinTone): string;

function getAvailableSkinTones(): SkinTone[];
```

[Skin Tone Modification](./skin-tone-modification.md)

### Color Theme Transformation

Functions for applying color-themed transformations to emojis. The package provides six color themes (green, blue, red, yellow, purple, pink), each containing a collection of thematically-related emojis. These functions replace standard emojis (particularly hearts) with randomly selected emojis from the specified theme.

```typescript { .api }
function getColoredEmoji(theme: ColorTheme): string;

function colorizeHearts(text: string, theme: ColorTheme): string;

function makeGreen(text: string): string;

function makeBlue(text: string): string;

function getEmojisForTheme(theme: ColorTheme): string[];

function getAvailableThemes(): ColorTheme[];
```

[Color Theme Transformation](./color-theme-transformation.md)

## Types

```typescript { .api }
type SkinTone =
  | "light"
  | "medium-light"
  | "medium"
  | "medium-dark"
  | "dark";

type ColorTheme = "green" | "blue" | "red" | "yellow" | "purple" | "pink";
```
