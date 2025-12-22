# Emoji Message Board Generator

## Problem Description

Build a command-line tool that generates formatted message boards with emoji decorations. The tool should process text messages and display them with visual borders, decorative patterns, and size-scaled emoji content.

Your program should read message data from a JSON file and generate a visually formatted message board.

## Requirements

### Input Format

Your program should accept a JSON file path as a command-line argument. The JSON file contains message board configuration:

```json
{
  "title": "Welcome Board",
  "messages": [
    "Great work on the project! 🎉",
    "Remember to review the docs 📚",
    "Meeting at 3pm ⏰"
  ],
  "decorationEmoji": "⭐",
  "importance": 0.85
}
```

The configuration object has:
- `title` (string): The board title text
- `messages` (array of strings): Text messages that may contain emojis
- `decorationEmoji` (string): Single emoji used for decorative patterns
- `importance` (number): Importance level from 0.0 to 1.0, determining visual prominence

### Output Format

The program should generate a message board with these components:

#### 1. Top Border
Display a horizontal line of decoration emojis. The line should contain exactly 15 emojis arranged in a single row.

#### 2. Title Section
Display the title with all emojis in the title scaled based on importance:
- 0.0-0.25: Scale to tiny size
- 0.26-0.50: Scale to small size
- 0.51-0.75: Scale to medium size
- 0.76-1.0: Scale to large size

**Format:**
```
TITLE: [title text with scaled emojis]
```

#### 3. Importance Indicator
Display a visual progress bar showing the importance level. The bar should:
- Use 12 segments total
- Use "●" (U+25CF) for filled portions
- Use "○" (U+25CB) for empty portions
- Show percentage rounded to nearest integer

**Format:**
```
Importance: [progress bar] XX%
```

#### 4. Messages Section
For each message:
- Display the message with all emojis scaled to medium size
- Prefix each message with a dash and space

**Format:**
```
- [message with scaled emojis]
```

#### 5. Bottom Decoration
Create a decorative pattern using the decoration emoji:
- If importance >= 0.75: Display a diamond-shaped pattern that is 3 emojis wide at its widest point
- If importance >= 0.5 and < 0.75: Display a pyramid-shaped pattern with 2 rows (1 emoji on top, 3 on bottom)
- If importance < 0.5: Display a single row of 3 decoration emojis separated by spaces

## Dependencies { .dependencies }

### @emoji-toolkit/size { .dependency }

Provides emoji size manipulation and visual pattern generation.

## Test Cases

### Test Case 1: High Importance Board [@test](../test/board.test.ts)

**Input file (board1.json):**
```json
{
  "title": "Celebration 🎊",
  "messages": [
    "Project completed! 🚀",
    "Amazing teamwork! 👏"
  ],
  "decorationEmoji": "✨",
  "importance": 0.8
}
```

**Expected output:**
```
✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨
TITLE: Celebration 🎊🎊🎊
Importance: ●●●●●●●●●○○○ 80%
- Project completed! 🚀🚀
- Amazing teamwork! 👏👏
  ✨
 ✨✨✨
  ✨
```

### Test Case 2: Medium Importance Board [@test](../test/board.test.ts)

**Input file (board2.json):**
```json
{
  "title": "Reminders",
  "messages": [
    "Check email 📧"
  ],
  "decorationEmoji": "📌",
  "importance": 0.6
}
```

**Expected output:**
```
📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌
TITLE: Reminders
Importance: ●●●●●●●○○○○○ 60%
- Check email 📧📧
 📌
📌📌📌
```

### Test Case 3: Low Importance Board [@test](../test/board.test.ts)

**Input file (board3.json):**
```json
{
  "title": "Notes 📝",
  "messages": [
    "Draft report 📄"
  ],
  "decorationEmoji": "•",
  "importance": 0.3
}
```

**Expected output:**
```
•••••••••••••••
TITLE: ·📝·
Importance: ●●●●○○○○○○○○ 30%
- Draft report 📄📄
• • •
```

## Implementation Notes

- Importance values should be clamped to the 0.0-1.0 range before processing
- Round the importance percentage to the nearest whole number for display
- The progress bar should always have exactly 12 segments
- All emojis in title and messages should be scaled according to the specifications
- Text without emojis should remain unchanged
- Diamond and pyramid patterns should use the decoration emoji
- The bottom decoration should have no extra blank lines before or after it
- Maintain proper spacing in the output as shown in the examples

## Technical Specifications

- Language: TypeScript with Node.js runtime
- Input: Command-line argument with path to JSON file
- Output: Print to stdout
- The test file should be named `board.test.ts`

[@generates](../src/board.ts)

## API

```typescript { #api }
/**
 * Generates a formatted message board with emoji decorations
 * @param config - Message board configuration object
 * @returns Formatted message board as a string
 */
export function generateMessageBoard(config: MessageBoardConfig): string;

/**
 * Configuration for message board generation
 */
export interface MessageBoardConfig {
  title: string;
  messages: string[];
  decorationEmoji: string;
  importance: number;
}
```
