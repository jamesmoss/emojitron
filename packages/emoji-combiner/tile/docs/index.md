# Emoji Combiner

Emoji Combiner provides comprehensive emoji manipulation utilities for combining and transforming emojis in creative ways. It supports creating Zero-Width Joiner (ZWJ) sequences that combine multiple emojis into single composite glyphs, offers preset emoji sequences for common concepts, and includes pattern generation functions for creating visual effects with emojis.

## Package Information

- **Package Name**: @emoji-toolkit/combiner
- **Package Type**: npm
- **Language**: TypeScript
- **Installation**: `npm install @emoji-toolkit/combiner`

## Core Imports

```typescript
import {
  joinWithZWJ,
  createFamily,
  createProfession,
  getPresetSequence,
  wave,
  mirror,
} from "@emoji-toolkit/combiner";
```

For CommonJS:

```javascript
const {
  joinWithZWJ,
  createFamily,
  createProfession,
  getPresetSequence,
  wave,
  mirror,
} = require("@emoji-toolkit/combiner");
```

## Basic Usage

```typescript
import {
  createFamily,
  createProfession,
  getPresetSequence,
  wave,
  mirror,
} from "@emoji-toolkit/combiner";

// Create ZWJ combinations
const family = createFamily("👨", "👩", "👧", "👦"); // "👨‍👩‍👧‍👦"
const programmer = createProfession("👩", "💻"); // "👩‍💻"

// Use preset sequences
const moonPhases = getPresetSequence("moon"); // "🌑🌒🌓🌔🌕🌖🌗🌘"
const celebration = getPresetSequence("celebration"); // "🎉🎊🎈🎁🥳🎂🍰"

// Create patterns
const wavePattern = wave("🌊", 3); // "🌊 🌊🌊 🌊🌊🌊 🌊🌊 🌊"
const mirrorPattern = mirror(["🔴", "🟡", "🟢"]); // "🔴🟡🟢🟡🔴"
```

## Architecture

Emoji Combiner is organized around several key functional areas:

- **ZWJ Operations**: Functions for creating, splitting, and analyzing Zero-Width Joiner emoji sequences
- **Preset Sequences**: Pre-configured emoji sequences for common concepts (moon phases, weather, celebrations, etc.)
- **Pattern Generation**: Creative pattern creation functions (waves, mirrors, alternating patterns, etc.)
- **Basic Sequencing**: Simple emoji combination utilities with optional separators
- **Utilities**: Helper functions for emoji styling and text formatting

## Capabilities

### ZWJ Sequence Operations

Zero-Width Joiner (ZWJ) functionality for creating composite emojis like families and profession emojis, and for analyzing existing ZWJ combinations.

```typescript { .api }
function joinWithZWJ(...emojis: string[]): string;

function createFamily(...members: string[]): string;

function createProfession(person: string, item: string): string;

function splitZWJ(emoji: string): string[];

function isZWJSequence(emoji: string): boolean;

function getKnownZWJCombinations(): Record<string, string[]>;

function decomposeZWJ(emoji: string): string[] | null;
```

[ZWJ Sequence Operations](./zwj-operations.md)

### Preset Emoji Sequences

Access pre-configured emoji sequences for common concepts including moon phases, weather patterns, celebrations, and more.

```typescript { .api }
function getPresetSequence(
  preset:
    | "love"
    | "weather"
    | "moon"
    | "time"
    | "growth"
    | "fire"
    | "ocean"
    | "space"
    | "food"
    | "celebration"
): string;

function getAvailablePresets(): string[];
```

[Preset Sequences](./preset-sequences.md)

### Pattern Generation

Create visual patterns and effects with emojis including waves, mirrors, alternating patterns, and decorative borders.

```typescript { .api }
function wave(emoji: string, maxCount: number): string;

function mirror(emojis: string[]): string;

function alternate(emoji1: string, emoji2: string, count: number): string;

function addBorder(emoji: string, border: string): string;

function sandwich(center: string, outer: string): string;
```

[Pattern Generation](./pattern-generation.md)

### Basic Sequencing

Simple utilities for combining emojis into sequences with optional separators.

```typescript { .api }
function sequence(emojis: string[], separator?: string): string;
```

### Utility Functions

Helper functions for emoji styling and text formatting.

```typescript { .api }
function addEmojiStyle(char: string): string;

function bulletList(emoji: string, items: string[]): string;
```

[Utility Functions](./utilities.md)
