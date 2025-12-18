# Utility Functions

Helper functions for emoji styling, text formatting, and basic emoji sequencing.

## Capabilities

### Basic Sequence

Combine emojis into a sequence with an optional separator between them.

```typescript { .api }
/**
 * Combine emojis into a sequence with optional separator
 * @param emojis - Array of emojis
 * @param separator - Optional separator between emojis (defaults to empty string)
 * @returns Combined sequence
 */
function sequence(emojis: string[], separator?: string): string;
```

**Usage Examples:**

```typescript
import { sequence } from "@emoji-toolkit/combiner";

// Simple concatenation
const stars = sequence(["🌟", "🌙", "☀️"]);
// Result: "🌟🌙☀️"

// With separator
const spaced = sequence(["🌟", "🌙", "☀️"], " ");
// Result: "🌟 🌙 ☀️"

// With custom separator
const separated = sequence(["🔴", "🟡", "🟢"], " → ");
// Result: "🔴 → 🟡 → 🟢"

// With emoji separator
const divided = sequence(["🍎", "🍊", "🍋"], " | ");
// Result: "🍎 | 🍊 | 🍋"

// Empty array
const empty = sequence([]);
// Result: ""

// Single emoji
const single = sequence(["⭐"]);
// Result: "⭐"
```

### Add Emoji Style

Add Variation Selector-16 (VS16) to a character to make it render in emoji style rather than text style.

```typescript { .api }
/**
 * Add variation selector to make character render in emoji style
 * @param char - The character to style
 * @returns Character with VS16 (Variation Selector-16) applied
 */
function addEmojiStyle(char: string): string;
```

**Usage Examples:**

```typescript
import { addEmojiStyle } from "@emoji-toolkit/combiner";

// Force emoji rendering
const emoji = addEmojiStyle("☀");
// Result: "☀️" (with VS16, renders as emoji)

// Ensure consistent emoji display
const heart = addEmojiStyle("❤");
// Result: "❤️" (with VS16)

// White flag with emoji style
const flag = addEmojiStyle("🏳");
// Result: "🏳️" (with VS16)
```

**Note:** The Variation Selector-16 (U+FE0F) instructs text rendering systems to display the character in emoji presentation rather than text presentation. This is useful for characters that have both text and emoji variants (like ☀, ❤, etc.).

### Bullet List

Create an emoji bullet list from an array of text items, with each item prefixed by an emoji bullet and separated by newlines.

```typescript { .api }
/**
 * Create emoji bullet points
 * @param emoji - Bullet emoji
 * @param items - Array of text items
 * @returns Formatted bullet list with newline separators
 */
function bulletList(emoji: string, items: string[]): string;
```

**Usage Examples:**

```typescript
import { bulletList } from "@emoji-toolkit/combiner";

// Task list
const tasks = bulletList("✅", ["Complete project", "Review code", "Deploy"]);
// Result: "✅ Complete project\n✅ Review code\n✅ Deploy"

// Warning list
const warnings = bulletList("⚠️", ["Low memory", "High CPU", "Disk full"]);
// Result: "⚠️ Low memory\n⚠️ High CPU\n⚠️ Disk full"

// Star rating
const features = bulletList("⭐", ["Fast", "Reliable", "Scalable"]);
// Result: "⭐ Fast\n⭐ Reliable\n⭐ Scalable"

// Shopping list
const shopping = bulletList("🛒", ["Apples", "Bread", "Milk"]);
// Result: "🛒 Apples\n🛒 Bread\n🛒 Milk"

// Empty list
const empty = bulletList("📝", []);
// Result: ""
```

**Common Use Cases:**

```typescript
// Display formatted list
const todoList = bulletList("📋", [
  "Write documentation",
  "Add tests",
  "Fix bugs",
]);
console.log(todoList);
// Output:
// 📋 Write documentation
// 📋 Add tests
// 📋 Fix bugs

// Create markdown-like lists
const achievements = bulletList("🏆", [
  "100 stars on GitHub",
  "First npm package",
  "Open source contributor",
]);

// Status indicators
const statuses = bulletList("🟢", [
  "API server running",
  "Database connected",
  "Cache initialized",
]);
```
