# Emoji Status Formatter

Create a module that formats status messages with creative emoji patterns and combinations.

## Capabilities

### Professional Status Creation

Create professional status indicators by combining person emojis with their work tools or symbols.

- `formatProfession("developer", "👨")` returns "👨‍💻" [@test](../test/formatter.test.ts)
- `formatProfession("scientist", "👩")` returns "👩‍🔬" [@test](../test/formatter.test.ts)
- `formatProfession("chef", "👨")` returns "👨‍🍳" [@test](../test/formatter.test.ts)

### Status Sequence Display

Display status progressions using themed emoji sequences.

- `getStatusSequence("moon")` returns "🌑🌒🌓🌔🌕🌖🌗🌘" [@test](../test/formatter.test.ts)
- `getStatusSequence("time")` returns "🕐🕑🕒🕓🕔🕕🕖🕗🕘🕙🕚🕛" [@test](../test/formatter.test.ts)
- `getStatusSequence("unknown")` returns "" [@test](../test/formatter.test.ts)

### Visual Pattern Creation

Create decorative patterns for emphasis and visual appeal.

- `createWavePattern("🌊", 3)` returns "🌊 🌊🌊 🌊🌊🌊 🌊🌊 🌊" [@test](../test/formatter.test.ts)
- `createMirrorPattern(["🔴", "🟡"])` returns "🔴🟡🔴" [@test](../test/formatter.test.ts)

### Status Analysis

Analyze emoji combinations to understand their components.

- `isProfessionalEmoji("👨‍💻")` returns true for profession emojis [@test](../test/formatter.test.ts)
- `isProfessionalEmoji("😀")` returns false for regular emojis [@test](../test/formatter.test.ts)
- `breakdownEmoji("👨‍💻")` returns an array of component emojis: ["👨", "💻"] [@test](../test/formatter.test.ts)

## Implementation

[@generates](../src/formatter.ts)

## API

```typescript { #api }
export function formatProfession(profession: string, person: string): string;
export function getStatusSequence(status: string): string;
export function createWavePattern(emoji: string, maxCount: number): string;
export function createMirrorPattern(emojis: string[]): string;
export function isProfessionalEmoji(emoji: string): boolean;
export function breakdownEmoji(emoji: string): string[];
```

## Dependencies { .dependencies }

### @emoji-toolkit/combiner { .dependency }

Provides emoji manipulation utilities for combining emojis into sequences, ZWJ combinations, and creative patterns.

[@satisfied-by](@emoji-toolkit/combiner)
