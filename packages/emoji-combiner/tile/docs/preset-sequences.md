# Preset Emoji Sequences

Pre-configured emoji sequences for common concepts including moon phases, weather patterns, celebrations, and more.

## Capabilities

### Get Preset Sequence

Retrieve a pre-configured emoji sequence by name. Returns an empty string if the preset doesn't exist.

```typescript { .api }
/**
 * Create an emoji sequence from preset
 * @param preset - Name of the preset (one of: "love", "weather", "moon", "time", "growth", "fire", "ocean", "space", "food", "celebration")
 * @returns The emoji sequence or empty string if not found
 */
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
```

**Available Presets:**

- **love**: "💕💖💗💓💞" - Various heart emojis expressing love and affection
- **weather**: "☀️🌤️⛅🌥️☁️🌧️⛈️🌩️" - Weather progression from sunny to stormy
- **moon**: "🌑🌒🌓🌔🌕🌖🌗🌘" - Complete moon phase cycle
- **time**: "🕐🕑🕒🕓🕔🕕🕖🕗🕘🕙🕚🕛" - Clock faces showing hours
- **growth**: "🌱🌿🌳" - Plant growth progression
- **fire**: "🔥💥✨⚡" - Fire and energy symbols
- **ocean**: "🌊🐚🐠🐟🦈🐙" - Ocean and marine life
- **space**: "🌍🌎🌏🌙⭐🌟💫🚀🛸👽" - Space, planets, and astronomy
- **food**: "🍕🍔🌮🌯🥗🍜🍣🍱" - Various food items
- **celebration**: "🎉🎊🎈🎁🥳🎂🍰" - Party and celebration symbols

**Usage Examples:**

```typescript
import { getPresetSequence } from "@emoji-toolkit/combiner";

// Get moon phases
const moonPhases = getPresetSequence("moon");
// Result: "🌑🌒🌓🌔🌕🌖🌗🌘"

// Get weather sequence
const weather = getPresetSequence("weather");
// Result: "☀️🌤️⛅🌥️☁️🌧️⛈️🌩️"

// Get celebration emojis
const party = getPresetSequence("celebration");
// Result: "🎉🎊🎈🎁🥳🎂🍰"

// Get love sequence
const hearts = getPresetSequence("love");
// Result: "💕💖💗💓💞"

// Get space sequence
const cosmos = getPresetSequence("space");
// Result: "🌍🌎🌏🌙⭐🌟💫🚀🛸👽"

// Handle non-existent preset
const unknown = getPresetSequence("nonexistent");
// Result: ""
```

### Get Available Presets

Get a list of all available preset names.

```typescript { .api }
/**
 * Get all available preset names
 * @returns Array of preset names
 */
function getAvailablePresets(): string[];
```

**Usage Examples:**

```typescript
import { getAvailablePresets } from "@emoji-toolkit/combiner";

const presets = getAvailablePresets();
// Result: ["love", "weather", "moon", "time", "growth", "fire", "ocean", "space", "food", "celebration"]

// Use to dynamically access all presets
presets.forEach((preset) => {
  const sequence = getPresetSequence(preset);
  console.log(`${preset}: ${sequence}`);
});
```

## Common Use Cases

**Progress Indicators:**

```typescript
// Show moon phase progress
const phase = getPresetSequence("moon");
console.log(`Loading ${phase}`);
```

**Weather Displays:**

```typescript
// Show weather forecast
const forecast = getPresetSequence("weather");
console.log(`This week: ${forecast}`);
```

**Celebration Messages:**

```typescript
// Birthday message
const party = getPresetSequence("celebration");
console.log(`Happy Birthday! ${party}`);
```

**Thematic Decoration:**

```typescript
// Add thematic elements to content
const ocean = getPresetSequence("ocean");
const space = getPresetSequence("space");

console.log(`${ocean} Ocean Theme ${ocean}`);
console.log(`${space} Space Theme ${space}`);
```
