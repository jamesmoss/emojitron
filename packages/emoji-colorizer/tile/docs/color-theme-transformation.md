# Color Theme Transformation

Functions for applying color-themed transformations to emojis. The package provides six color themes (green, blue, red, yellow, purple, pink), each containing a collection of thematically-related emojis. These functions replace standard emojis (particularly hearts) with randomly selected emojis from the specified theme.

## Capabilities

### Get Colored Emoji

Get a random emoji from a specified color theme. Each theme contains a curated collection of emojis that match the theme's color.

```typescript { .api }
/**
 * Get a random emoji from a color theme
 * @param theme - The color theme
 * @returns A random themed emoji
 */
function getColoredEmoji(theme: ColorTheme): string;
```

**Usage Examples:**

```typescript
import { getColoredEmoji } from '@emoji-toolkit/colorizer';

// Get a random green emoji
const greenEmoji = getColoredEmoji('green');
console.log(greenEmoji); // Could be 💚, 🥒, 🥦, 🌲, etc.

// Get a random blue emoji
const blueEmoji = getColoredEmoji('blue');
console.log(blueEmoji); // Could be 💙, 🧊, 🌊, 💎, etc.

// Get a random red emoji
const redEmoji = getColoredEmoji('red');
console.log(redEmoji); // Could be ❤️, 🔴, 🍎, 🌹, etc.
```

### Colorize Hearts

Replace heart emojis and other standard emojis with randomly selected emojis from a specific color theme. This function scans the text for standard emoji patterns (including various heart emojis) and replaces each occurrence with a random emoji from the specified theme.

```typescript { .api }
/**
 * Replace heart emojis with a specific color
 * @param text - Input text
 * @param theme - Target color theme
 * @returns Text with hearts replaced
 */
function colorizeHearts(text: string, theme: ColorTheme): string;
```

**Usage Examples:**

```typescript
import { colorizeHearts } from '@emoji-toolkit/colorizer';

// Replace hearts with green-themed emojis
const greenText = colorizeHearts('I ❤️ nature 💙 and 💚 plants', 'green');
console.log(greenText); // I 💚 nature 🥒 and 🌲 plants (or other green emojis)

// Replace with red-themed emojis
const redText = colorizeHearts('Love 💙 you 💛', 'red');
console.log(redText); // Love ❤️ you 🌹 (or other red emojis)

// Replace with purple-themed emojis
const purpleText = colorizeHearts('💙💚💛', 'purple');
console.log(purpleText); // 💜🍇🔮 (or other purple emojis)
```

### Make Green

Convenience function to replace heart emojis with green-themed emojis. Equivalent to calling `colorizeHearts(text, 'green')`.

```typescript { .api }
/**
 * Make all emojis "green" themed
 * @param text - Input text
 * @returns Text with green-themed emoji replacements
 */
function makeGreen(text: string): string;
```

**Usage Examples:**

```typescript
import { makeGreen } from '@emoji-toolkit/colorizer';

const text = 'I ❤️ the environment 💙';
const greenText = makeGreen(text);
console.log(greenText); // I 💚 the environment 🌲 (or other green emojis)
```

### Make Blue

Convenience function to replace heart emojis with blue-themed emojis. Equivalent to calling `colorizeHearts(text, 'blue')`.

```typescript { .api }
/**
 * Make all emojis "blue" themed
 * @param text - Input text
 * @returns Text with blue-themed emoji replacements
 */
function makeBlue(text: string): string;
```

**Usage Examples:**

```typescript
import { makeBlue } from '@emoji-toolkit/colorizer';

const text = 'I ❤️ the ocean 💚';
const blueText = makeBlue(text);
console.log(blueText); // I 💙 the ocean 🌊 (or other blue emojis)
```

### Get Emojis For Theme

Get an array of all emojis available for a specific color theme.

```typescript { .api }
/**
 * Get all emojis for a color theme
 * @param theme - The color theme
 * @returns Array of themed emojis
 */
function getEmojisForTheme(theme: ColorTheme): string[];
```

**Usage Examples:**

```typescript
import { getEmojisForTheme } from '@emoji-toolkit/colorizer';

// Get all green emojis
const greenEmojis = getEmojisForTheme('green');
console.log(greenEmojis);
// ["💚", "🥒", "🥦", "🥬", "🌲", "🌳", "🌴", "🌱", "🌿", "☘️", "🍀", "🐸", "🦎", "🐢", "🐊", "🟢", "🟩", "♻️"]

// Get all blue emojis
const blueEmojis = getEmojisForTheme('blue');
console.log(blueEmojis);
// ["💙", "🧊", "🌊", "💎", "🐳", "🐋", "🐬", "🦋", "🫐", "🔵", "🟦", "🌀", "💠", "🧿", "🥶", "🌌"]

// Get all red emojis
const redEmojis = getEmojisForTheme('red');
console.log(redEmojis);
// ["❤️", "🔴", "🟥", "🍎", "🍒", "🌹", "🐞", "🦞", "🦀", "🍅", "🌶️", "🎈", "♥️", "❣️", "💔", "🩸"]
```

### Get Available Themes

Get an array of all available color theme options.

```typescript { .api }
/**
 * Get all available color themes
 * @returns Array of available themes
 */
function getAvailableThemes(): ColorTheme[];
```

**Usage Examples:**

```typescript
import { getAvailableThemes } from '@emoji-toolkit/colorizer';

const themes = getAvailableThemes();
console.log(themes);
// ["green", "blue", "red", "yellow", "purple", "pink"]
```

## Theme Collections

Each color theme contains a curated collection of emojis:

- **Green**: 💚, 🥒, 🥦, 🥬, 🌲, 🌳, 🌴, 🌱, 🌿, ☘️, 🍀, 🐸, 🦎, 🐢, 🐊, 🟢, 🟩, ♻️
- **Blue**: 💙, 🧊, 🌊, 💎, 🐳, 🐋, 🐬, 🦋, 🫐, 🔵, 🟦, 🌀, 💠, 🧿, 🥶, 🌌
- **Red**: ❤️, 🔴, 🟥, 🍎, 🍒, 🌹, 🐞, 🦞, 🦀, 🍅, 🌶️, 🎈, ♥️, ❣️, 💔, 🩸
- **Yellow**: 💛, 🌟, ⭐, 🌻, 🌼, 🍋, 🍌, 🧀, 🟡, 🟨, 🐥, 🐤, 🌕, 🔆, ⚡, 🏆
- **Purple**: 💜, 🍇, 🍆, 🔮, ☂️, 🟣, 🟪, 👾, 🦄, 🌸, 🎵, 🪻
- **Pink**: 💗, 💖, 💕, 💓, 💞, 🌸, 🌷, 🎀, 🦩, 🐷, 🐖, 🧁, 🍧, 🩰, 🩷

## Replaceable Emojis

The following standard emojis are targeted for replacement by the colorization functions:
❤️, 💙, 💚, 💛, 💜, 🖤, 🤍, 🤎, 💗, 💖

## Types

```typescript { .api }
type ColorTheme = "green" | "blue" | "red" | "yellow" | "purple" | "pink";
```
