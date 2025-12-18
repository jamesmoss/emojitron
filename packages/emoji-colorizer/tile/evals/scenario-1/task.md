# Emoji Text Processor

Build a text processing utility that normalizes and transforms emoji content based on user preferences for skin tones and color themes.

## Requirements

Create a module that exports a single function `processEmojiText` which processes input text according to specified transformation rules.

The function should accept three parameters:
1. `text` (string): The input text containing emojis
2. `skinTone` (string or null): Target skin tone to apply ("light", "medium-light", "medium", "medium-dark", "dark", or null for no change)
3. `colorTheme` (string or null): Target color theme for emoji replacement ("green", "blue", "red", "yellow", "purple", "pink", or null for no change)

## Behavior

### Skin Tone Processing
- If `skinTone` is provided, apply the specified skin tone to ALL compatible emojis in the text
- If `skinTone` is null, leave skin tones unchanged

### Color Theme Processing
- If `colorTheme` is provided, replace heart and color emojis with themed alternatives
- If `colorTheme` is null, leave colors unchanged

### Processing Order
- Apply skin tone transformations first
- Then apply color theme transformations

## Test Cases

- Given text "Hello 👋 World", skinTone "dark", colorTheme null, returns "Hello 👋🏿 World" [@test](../test/processor.test.ts)
- Given text "Wave 👋🏻 bye", skinTone "medium", colorTheme null, changes existing skin tone to medium [@test](../test/processor.test.ts)
- Given text "I ❤️ coding", skinTone null, colorTheme "green", replaces heart with a green-themed emoji [@test](../test/processor.test.ts)
- Given text "👋 ❤️ fun", skinTone "dark", colorTheme "blue", applies both transformations [@test](../test/processor.test.ts)

## Dependencies { .dependencies }

### @emoji-toolkit/colorizer { .dependency }

Provides emoji transformation utilities including skin tone application and color theme replacements.

[@satisfied-by](@emoji-toolkit/colorizer)

## Implementation

[@generates](./src/processor.ts)

## API

```typescript { #api }
/**
 * Process emoji text with skin tone and color theme transformations
 * @param text - Input text containing emojis
 * @param skinTone - Target skin tone or null to skip
 * @param colorTheme - Target color theme or null to skip
 * @returns Processed text with transformations applied
 */
export function processEmojiText(
  text: string,
  skinTone: "light" | "medium-light" | "medium" | "medium-dark" | "dark" | null,
  colorTheme: "green" | "blue" | "red" | "yellow" | "purple" | "pink" | null
): string;
```
