# 🎨 Emoji Toolkit

A modern TypeScript monorepo containing 5 emoji manipulation utility packages.

## 📦 Packages

| Package | Description |
|---------|-------------|
| [`@emoji-toolkit/mood`](./packages/emoji-mood) | Transform emoji moods - turn happy emojis sad, angry emojis calm |
| [`@emoji-toolkit/colorizer`](./packages/emoji-colorizer) | Apply color themes and skin tone modifiers to emojis |
| [`@emoji-toolkit/size`](./packages/emoji-size) | Size manipulation - scale emojis, create grids, pyramids, progress bars |
| [`@emoji-toolkit/combiner`](./packages/emoji-combiner) | Combine emojis into ZWJ sequences and creative patterns |
| [`@emoji-toolkit/randomizer`](./packages/emoji-randomizer) | Random emoji generation, shuffling, and selection utilities |

## 🚀 Quick Start

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm build

# Run tests
pnpm test

# Type check
pnpm typecheck
```

## 📖 Usage Examples

### @emoji-toolkit/mood

```typescript
import { makeHappySad, transformMood, detectMood } from "@emoji-toolkit/mood";

// Detect emoji mood
detectMood("😀"); // "happy"
detectMood("😢"); // "sad"

// Transform moods
makeHappySad("Hello 😀 World! 😊"); // "Hello 😢 World! 😭"
transformMood("😠", "calm"); // "😌"
```

### @emoji-toolkit/colorizer

```typescript
import { applySkinTone, makeGreen, colorizeHearts } from "@emoji-toolkit/colorizer";

// Apply skin tones
applySkinTone("👋", "dark"); // "👋🏿"

// Color themes
makeGreen("I ❤️ coding"); // Replaces hearts with green emojis
colorizeHearts("Love 💙 nature", "green"); // "Love 💚 nature"
```

### @emoji-toolkit/size

```typescript
import { makeLarge, createGrid, createProgressBar, createPyramid } from "@emoji-toolkit/size";

// Scale emojis
makeLarge("⭐"); // "⭐⭐⭐"

// Create shapes
createGrid("🟦", 3, 3);
// 🟦🟦🟦
// 🟦🟦🟦
// 🟦🟦🟦

createProgressBar("🟢", "⚪", 0.7, 10); // "🟢🟢🟢🟢🟢🟢🟢⚪⚪⚪"

createPyramid("🔺", 3);
//   🔺
//  🔺🔺🔺
// 🔺🔺🔺🔺🔺
```

### @emoji-toolkit/combiner

```typescript
import { createFamily, getPresetSequence, wave, mirror } from "@emoji-toolkit/combiner";

// Create ZWJ combinations
createFamily("👨", "👩", "👧"); // "👨‍👩‍👧"

// Use presets
getPresetSequence("moon"); // "🌑🌒🌓🌔🌕🌖🌗🌘"

// Creative patterns
wave("🌊", 3); // "🌊 🌊🌊 🌊🌊🌊 🌊🌊 🌊"
mirror(["🔴", "🟡", "🟢"]); // "🔴🟡🟢🟡🔴"
```

### @emoji-toolkit/randomizer

```typescript
import { randomEmoji, randomFromCategory, shuffle, emojiPassword } from "@emoji-toolkit/randomizer";

// Random emojis
randomEmoji(); // "🎉" (random)
randomFromCategory("animals"); // "🐶" (random animal)

// Shuffle
shuffle(["🍎", "🍊", "🍋"]); // ["🍊", "🍎", "🍋"] (random order)

// Generate emoji password
emojiPassword(4); // "🌟🐸🎨🚀"
```

## 🛠️ Development

This monorepo uses:
- **pnpm** - Fast, disk-efficient package manager
- **Turborepo** - High-performance build system
- **TypeScript** - Type-safe JavaScript
- **tsup** - Zero-config TypeScript bundler
- **Vitest** - Fast unit testing framework

### Scripts

```bash
pnpm build      # Build all packages
pnpm dev        # Watch mode for development
pnpm test       # Run all tests
pnpm lint       # Type check all packages
pnpm clean      # Clean build outputs
```

## 📄 License

MIT
