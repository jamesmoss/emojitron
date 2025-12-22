# Emoji Mood

Emoji Mood is a TypeScript library for transforming and detecting emoji moods in text. It enables developers to manipulate the emotional states of emojis, offering functionality to detect emoji moods, transform individual emojis between emotional states, and batch-process text to change all emojis to a target mood.

## Package Information

- **Package Name**: @emoji-toolkit/mood
- **Package Type**: npm (scoped package)
- **Language**: TypeScript
- **Installation**: `npm install @emoji-toolkit/mood`

## Core Imports

```typescript
import {
  detectMood,
  getEmojiForMood,
  transformMood,
  transformAllMoods,
  makeHappySad,
  makeSadHappy,
  makeAngryCool,
  getAvailableMoods,
  getEmojisForMood,
  type Mood,
} from "@emoji-toolkit/mood";
```

For CommonJS:

```javascript
const {
  detectMood,
  getEmojiForMood,
  transformMood,
  transformAllMoods,
  makeHappySad,
  makeSadHappy,
  makeAngryCool,
  getAvailableMoods,
  getEmojisForMood,
} = require("@emoji-toolkit/mood");
```

## Basic Usage

```typescript
import { detectMood, transformMood, makeHappySad } from "@emoji-toolkit/mood";

// Detect the mood of an emoji
const mood = detectMood("😀");
console.log(mood); // "happy"

// Transform a single emoji to a different mood
const sadEmoji = transformMood("😀", "sad");
console.log(sadEmoji); // Returns a random sad emoji like "😢"

// Transform all happy emojis in text to sad
const text = "I love coding 😀 it's amazing 😊";
const sadText = makeHappySad(text);
console.log(sadText); // "I love coding 😢 it's amazing 😭" (random sad emojis)
```

## Capabilities

### Mood Detection

Detects the mood category of a given emoji.

```typescript { .api }
/**
 * Detect the mood of a given emoji
 * @param emoji - The emoji to analyze
 * @returns The detected mood or null if not recognized
 */
function detectMood(emoji: string): Mood | null;
```

Returns one of six mood categories (`"happy"`, `"sad"`, `"angry"`, `"calm"`, `"surprised"`, `"neutral"`) if the emoji is recognized, or `null` for unrecognized emojis.

**Usage Example:**

```typescript
import { detectMood } from "@emoji-toolkit/mood";

detectMood("😀"); // "happy"
detectMood("😢"); // "sad"
detectMood("😠"); // "angry"
detectMood("😌"); // "calm"
detectMood("😮"); // "surprised"
detectMood("😐"); // "neutral"
detectMood("🍕"); // null (not recognized)
```

### Get Random Emoji for Mood

Gets a random emoji for a specified mood category.

```typescript { .api }
/**
 * Get a random emoji for a given mood
 * @param mood - The target mood
 * @returns A random emoji matching that mood
 */
function getEmojiForMood(mood: Mood): string;
```

Returns a randomly selected emoji from the specified mood category. Each call may return a different emoji from the same category.

**Usage Example:**

```typescript
import { getEmojiForMood } from "@emoji-toolkit/mood";

getEmojiForMood("happy"); // Might return "😀", "😃", "😊", etc.
getEmojiForMood("sad"); // Might return "😢", "😭", "😞", etc.
```

### Transform Single Emoji Mood

Transforms an emoji from one mood to another.

```typescript { .api }
/**
 * Transform an emoji from one mood to another
 * @param emoji - The original emoji
 * @param targetMood - The desired mood
 * @returns A new emoji with the target mood, or the original if not transformable
 */
function transformMood(emoji: string, targetMood: Mood): string;
```

Behavior:

- If the emoji is not recognized, returns the original emoji unchanged
- If the emoji is already in the target mood, returns it unchanged
- Otherwise, returns a random emoji from the target mood category

**Usage Example:**

```typescript
import { transformMood } from "@emoji-toolkit/mood";

transformMood("😀", "sad"); // Returns a random sad emoji like "😢"
transformMood("😢", "happy"); // Returns a random happy emoji like "😃"
transformMood("🍕", "happy"); // "🍕" (unchanged, not recognized)
transformMood("😀", "happy"); // "😀" (unchanged, already happy)
```

### Transform All Emojis in Text

Transforms all recognized emojis in a text string to a target mood.

```typescript { .api }
/**
 * Transform all emojis in a string to a target mood
 * @param text - The input text containing emojis
 * @param targetMood - The desired mood for all emojis
 * @returns The text with transformed emojis
 */
function transformAllMoods(text: string, targetMood: Mood): string;
```

Replaces all recognized emojis in the text with random emojis from the target mood category. Unrecognized emojis and non-emoji text remain unchanged.

**Usage Example:**

```typescript
import { transformAllMoods } from "@emoji-toolkit/mood";

const text = "Today is great 😀 but I'm also anxious 😰";
transformAllMoods(text, "happy"); // "Today is great 😊 but I'm also anxious 😃"
transformAllMoods(text, "calm"); // "Today is great 🌸 but I'm also anxious ✨"
```

### Make Happy Emojis Sad

Convenience function to transform all happy emojis in text to sad emojis.

```typescript { .api }
/**
 * Make happy emojis sad
 * @param text - Input text containing emojis
 * @returns Text with happy emojis replaced by sad ones
 */
function makeHappySad(text: string): string;
```

Targets only happy mood emojis (😀, 😃, 😄, 😁, 😆, 😊, 🙂, 😋, 😎, 🤗, 🥰, 😍) and replaces them with random sad emojis.

**Usage Example:**

```typescript
import { makeHappySad } from "@emoji-toolkit/mood";

makeHappySad("Excited! 😀 Wonderful! 😊"); // "Excited! 😢 Wonderful! 😭"
makeHappySad("Feeling sad 😢"); // "Feeling sad 😢" (unchanged, not happy)
```

### Make Sad Emojis Happy

Convenience function to transform all sad emojis in text to happy emojis.

```typescript { .api }
/**
 * Make sad emojis happy
 * @param text - Input text containing emojis
 * @returns Text with sad emojis replaced by happy ones
 */
function makeSadHappy(text: string): string;
```

Targets only sad mood emojis (😢, 😭, 😿, 🥺, 😞, 😔, 😟, 🙁, ☹️, 😥, 😰) and replaces them with random happy emojis.

**Usage Example:**

```typescript
import { makeSadHappy } from "@emoji-toolkit/mood";

makeSadHappy("So sad 😢 and upset 😭"); // "So sad 😀 and upset 😊"
makeSadHappy("Feeling happy 😀"); // "Feeling happy 😀" (unchanged, not sad)
```

### Make Angry Emojis Calm

Convenience function to transform all angry emojis in text to calm emojis.

```typescript { .api }
/**
 * Make angry emojis calm
 * @param text - Input text containing emojis
 * @returns Text with angry emojis replaced by calm ones
 */
function makeAngryCool(text: string): string;
```

Targets only angry mood emojis (😠, 😡, 🤬, 👿, 💢, 😤, 🔥, 💀) and replaces them with random calm emojis.

**Usage Example:**

```typescript
import { makeAngryCool } from "@emoji-toolkit/mood";

makeAngryCool("So angry 😠 and furious 😡"); // "So angry 😌 and furious ☮️"
makeAngryCool("Feeling calm 😌"); // "Feeling calm 😌" (unchanged, not angry)
```

### Get Available Moods

Returns an array of all available mood categories.

```typescript { .api }
/**
 * Get all available moods
 * @returns Array of available mood types
 */
function getAvailableMoods(): Mood[];
```

Returns `["happy", "sad", "angry", "calm", "surprised", "neutral"]`.

**Usage Example:**

```typescript
import { getAvailableMoods } from "@emoji-toolkit/mood";

const moods = getAvailableMoods();
console.log(moods); // ["happy", "sad", "angry", "calm", "surprised", "neutral"]

// Use to iterate through all moods
moods.forEach((mood) => {
  console.log(`${mood}: ${getEmojiForMood(mood)}`);
});
```

### Get Emojis for Specific Mood

Returns all emojis associated with a specific mood category.

```typescript { .api }
/**
 * Get all emojis for a specific mood
 * @param mood - The mood to get emojis for
 * @returns Array of emojis for that mood
 */
function getEmojisForMood(mood: Mood): string[];
```

Returns a copy of the internal array of emojis for the specified mood.

**Usage Example:**

```typescript
import { getEmojisForMood } from "@emoji-toolkit/mood";

const happyEmojis = getEmojisForMood("happy");
console.log(happyEmojis);
// ["😀", "😃", "😄", "😁", "😆", "😊", "🙂", "😋", "😎", "🤗", "🥰", "😍"]

const sadEmojis = getEmojisForMood("sad");
console.log(sadEmojis);
// ["😢", "😭", "😿", "🥺", "😞", "😔", "😟", "🙁", "☹️", "😥", "😰"]
```

## Types

```typescript { .api }
/**
 * Mood categories for emojis
 */
type Mood = "happy" | "sad" | "angry" | "calm" | "surprised" | "neutral";
```

The `Mood` type represents the six available mood categories in the library:

- **happy**: Joyful, positive emojis (😀, 😃, 😄, 😁, 😆, 😊, 🙂, 😋, 😎, 🤗, 🥰, 😍)
- **sad**: Sorrowful, tearful emojis (😢, 😭, 😿, 🥺, 😞, 😔, 😟, 🙁, ☹️, 😥, 😰)
- **angry**: Frustrated, furious emojis (😠, 😡, 🤬, 👿, 💢, 😤, 🔥, 💀)
- **calm**: Peaceful, serene emojis (😌, 😇, 🧘, ☮️, 🕊️, 🌸, 🍃, ✨)
- **surprised**: Shocked, astonished emojis (😮, 😯, 😲, 🤯, 😱, 🙀, ❗, ⁉️)
- **neutral**: Indifferent, expressionless emojis (😐, 😑, 🫤, 😶, 🤔, 🫥)

## Complete Emoji Coverage

The library recognizes 53 total emojis across six mood categories:

| Mood      | Count | Emojis                                                    |
| --------- | ----- | --------------------------------------------------------- |
| happy     | 12    | 😀 😃 😄 😁 😆 😊 🙂 😋 😎 🤗 🥰 😍                             |
| sad       | 11    | 😢 😭 😿 🥺 😞 😔 😟 🙁 ☹️ 😥 😰                               |
| angry     | 8     | 😠 😡 🤬 👿 💢 😤 🔥 💀                                         |
| calm      | 8     | 😌 😇 🧘 ☮️ 🕊️ 🌸 🍃 ✨                                        |
| surprised | 8     | 😮 😯 😲 🤯 😱 🙀 ❗ ⁉️                                         |
| neutral   | 6     | 😐 😑 🫤 😶 🤔 🫥                                              |

## Key Characteristics

- **Randomization**: Functions that return emojis use random selection from mood categories. Each call to transformation functions may produce different results.
- **Immutability**: Text transformation functions return new strings and don't modify the input.
- **Fallback Behavior**: Unrecognized emojis are preserved in their original form.
- **No Side Effects**: All functions are pure with no global state modifications.
- **Type Safety**: Full TypeScript support with exported `Mood` type for strict typing.
