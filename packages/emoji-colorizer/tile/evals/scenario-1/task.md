# Emoji Text Normalizer

A utility that normalizes emoji usage in text strings by applying consistent skin tones and detecting/reporting emoji modifications.

## Capabilities

### Apply consistent skin tones to text

- Given text "Hello 👋 friend 👍", applying medium skin tone returns "Hello 👋🏽 friend 👍🏽" [@test](../test/normalizer.test.ts)
- Given text with mixed existing tones "Hi 👋🏻 bye 👋🏿", applying dark skin tone returns "Hi 👋🏿 bye 👋🏿" [@test](../test/normalizer.test.ts)

### Detect if text contains skin tone modifiers

- Given text "Hello 👋🏽 friend 👍🏿", returns true [@test](../test/normalizer.test.ts)
- Given text "Hello 👋 friend 👍" with no tones, returns false [@test](../test/normalizer.test.ts)
- Given text "Pizza 🍕 and coffee ☕", returns false [@test](../test/normalizer.test.ts)

### Remove all skin tone modifiers from text

- Given text "Hello 👋🏽 friend 👍🏿", returns "Hello 👋 friend 👍" [@test](../test/normalizer.test.ts)
- Given text "No tones here 🍕", returns "No tones here 🍕" unchanged [@test](../test/normalizer.test.ts)

## Implementation

[@generates](./src/normalizer.ts)

## API

```typescript { #api }
export type SkinTone = "light" | "medium-light" | "medium" | "medium-dark" | "dark";

/**
 * Applies a consistent skin tone to all compatible emojis in the text
 * @param text - Input text containing emojis
 * @param tone - The skin tone to apply
 * @returns Text with consistent skin tone applied to all compatible emojis
 */
export function normalizeSkinTones(text: string, tone: SkinTone): string;

/**
 * Detects whether text contains any emojis with skin tone modifiers
 * @param text - Input text containing emojis
 * @returns True if any emoji has a skin tone modifier, false otherwise
 */
export function hasSkinToneModifiers(text: string): boolean;

/**
 * Removes all skin tone modifiers from text
 * @param text - Input text containing emojis with potential skin tones
 * @returns Text with all skin tone modifiers removed
 */
export function stripSkinTones(text: string): string;
```

## Dependencies { .dependencies }

### @emoji-toolkit/colorizer { .dependency }

Provides emoji colorization and skin tone modification capabilities.
