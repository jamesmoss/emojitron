# Text Processing

Process text containing emojis to scale all emoji characters to a specific size while preserving non-emoji content. Useful for applying consistent emoji sizing across mixed content.

## Capabilities

### Scale All Emojis

Scale all emojis in text to a specific size while preserving non-emoji characters. This function uses Unicode emoji detection to identify and transform only emoji characters.

```typescript { .api }
/**
 * Scale all emojis in text to a specific size while preserving non-emoji content
 * @param text - Input text containing emojis and other characters
 * @param size - Target size for all emojis
 * @returns Text with scaled emojis, non-emoji content unchanged
 */
function scaleAllEmojis(text: string, size: EmojiSize): string;
```

**Implementation Details:**
- Uses regex pattern `/\p{Emoji_Presentation}|\p{Emoji}\uFE0F/gu` to match emoji characters
- Detects emojis with emoji presentation or variation selector
- Each detected emoji is replaced with its scaled version using the specified size
- All non-emoji characters remain unchanged
- Supports all Unicode emoji characters

**Usage Examples:**

```typescript
import { scaleAllEmojis } from "@emoji-toolkit/size";

// Scale emojis in mixed content
const text = "Hello 👋 World 🌍";
const scaled = scaleAllEmojis(text, "large");
console.log(scaled); // "Hello 👋👋👋 World 🌍🌍🌍"

// Apply tiny size
const message = "Great job! 🎉 Keep it up! 💪";
const tiny = scaleAllEmojis(message, "tiny");
console.log(tiny); // "Great job! ·🎉· Keep it up! ·💪·"

// Giant size
const greeting = "Welcome 🎊";
const giant = scaleAllEmojis(greeting, "giant");
console.log(giant); // "Welcome 🎊 🎊 🎊 🎊 🎊"

// Text without emojis remains unchanged
const plain = "Just text";
const unchanged = scaleAllEmojis(plain, "huge");
console.log(unchanged); // "Just text"

// Multiple emojis
const complex = "Status: ✅ Progress: 📈 Time: ⏰";
const scaled = scaleAllEmojis(complex, "medium");
console.log(scaled); // "Status: ✅✅ Progress: 📈📈 Time: ⏰⏰"
```

## Types

```typescript { .api }
/** Available emoji size options */
type EmojiSize = "tiny" | "small" | "medium" | "large" | "huge" | "giant";
```
