# Visual Status Dashboard Generator

## Problem Description

Build a command-line tool that generates visual status dashboards for project tasks. The tool should display task progress using emoji-based visual elements.

Your program should read task data and generate a formatted dashboard that includes:
1. A progress summary with visual indicators
2. Task-specific status displays
3. A visual celebration element when all tasks are complete

## Requirements

### Input Format

Your program should accept a JSON file path as a command-line argument. The JSON file contains an array of task objects:

```json
[
  {
    "name": "Frontend Development",
    "progress": 0.75
  },
  {
    "name": "Backend API",
    "progress": 1.0
  },
  {
    "name": "Testing",
    "progress": 0.3
  }
]
```

Each task object has:
- `name` (string): The task name
- `progress` (number): Completion percentage as a decimal (0.0 to 1.0, but may exceed 1.0)

### Output Format

The program should output a dashboard with these sections:

#### 1. Overall Progress Bar
Display the average progress of all tasks using a visual progress bar with 10 segments. Use a filled emoji for completed portions and an empty emoji for remaining portions.

**Format:**
```
Overall Progress: [progress bar] XX%
```

#### 2. Individual Task Status
For each task, display:
- Task name with scaled emojis based on completion:
  - 0-33%: Display "🔴" at tiny size
  - 34-66%: Display "🟡" at medium size
  - 67-99%: Display "🟢" at large size
  - 100% or higher: Display "✅" at giant size

**Format:**
```
- [scaled emoji] [Task Name]
```

#### 3. Completion Celebration
If ALL tasks are at 100% completion, display a pyramid pattern using a celebration emoji. The pyramid should have a height of 3 rows.

## Dependencies { .dependencies }

### @emoji-toolkit/size { .dependency }

Provides emoji size manipulation and visual pattern generation.

## Test Cases

### Test Case 1: Partial Progress { .test }

**Input file (tasks1.json):**
```json
[
  {"name": "Design", "progress": 0.5},
  {"name": "Implementation", "progress": 0.8}
]
```

**Expected output:**
```
Overall Progress: ████████░░ 65%
- 🟡🟡 Design
- 🟢🟢🟢 Implementation
```

### Test Case 2: All Complete { .test }

**Input file (tasks2.json):**
```json
[
  {"name": "Task A", "progress": 1.0},
  {"name": "Task B", "progress": 1.0}
]
```

**Expected output:**
```
Overall Progress: ██████████ 100%
- ✅ ✅ ✅ ✅ ✅ Task A
- ✅ ✅ ✅ ✅ ✅ Task B

  🎉
 🎉🎉🎉
🎉🎉🎉🎉🎉
```

### Test Case 3: Low Progress { .test }

**Input file (tasks3.json):**
```json
[
  {"name": "Research", "progress": 0.2}
]
```

**Expected output:**
```
Overall Progress: ██░░░░░░░░ 20%
- ·🔴· Research
```

## Implementation Notes

- Progress values greater than 1.0 should be clamped to 1.0 (100%) for calculations
- Round the overall progress percentage to the nearest whole number for display
- The progress bar should always have exactly 10 segments total
- Use "█" (U+2588) for filled segments and "░" (U+2591) for empty segments in the progress bar
- The pyramid should only appear when ALL tasks have progress >= 1.0
- The celebration pyramid should use "🎉" emoji and have exactly 3 rows with proper spacing
- When displaying giant-sized emojis, maintain the spaces between individual emoji as produced by the library

## Technical Specifications

- Language: JavaScript/TypeScript (use Node.js)
- Input: Command-line argument with path to JSON file
- Output: Print to stdout
- The program filename should be `dashboard.js` (or `dashboard.ts` if using TypeScript)

## Scoring Criteria

Solutions will be evaluated on:
- Correct usage of the emoji manipulation library
- Proper handling of progress calculations and edge cases
- Accurate visual formatting according to the specifications
- Code correctness and output accuracy
