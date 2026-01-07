# Task Progress Dashboard

Build a command-line task progress dashboard that displays the status of multiple tasks with visual indicators and an overall progress summary.

## Requirements

You need to create a TypeScript program that:

1. **Reads task data from JSON input** containing an array of tasks, where each task has:
   - `name`: A string describing the task
   - `progress`: A decimal number from 0 to 1 (where 0 = 0% complete, 1 = 100% complete)
   - `emoji`: An emoji character to represent the task

2. **Displays individual task status** where each task is shown with:
   - A visual indicator (emoji) that scales based on the task's progress:
     - 0-33% complete: Very small visual indicator
     - 34-66% complete: Medium visual indicator (doubled)
     - 67-99% complete: Large visual indicator (tripled)
     - 100% complete: Extra-large visual indicator (repeated 5 times with spacing)
   - The task name
   - The progress percentage (rounded to nearest whole number)

3. **Calculates and displays overall progress** showing:
   - An "Overall Progress" label
   - A visual progress bar using two different symbols (one for filled, one for empty)
   - The average progress across all tasks as a percentage (rounded to nearest whole number)

4. **Shows a celebration pattern** when ALL tasks reach 100% completion:
   - Display a triangular pattern made from a celebration emoji
   - The pattern should have 3 rows, centered appropriately

## Output Format

```
Task Status:
[scaled emoji] [Task Name]: [XX]%
[scaled emoji] [Task Name]: [XX]%
...

Overall Progress: [visual progress bar] [XX]%

[Optional celebration pattern if all tasks complete]
```

## Test Cases

### Test 1: Mixed Progress {@test}

**Input:**
```json
{
  "tasks": [
    {"name": "Design", "progress": 0.25, "emoji": "🎨"},
    {"name": "Development", "progress": 0.5, "emoji": "💻"},
    {"name": "Testing", "progress": 0.8, "emoji": "🧪"}
  ]
}
```

**Expected Output:**
```
Task Status:
·🎨· Design: 25%
💻💻 Development: 50%
🧪🧪🧪 Testing: 80%

Overall Progress: 🟢🟢🟢🟢🟢⚪⚪⚪⚪⚪ 52%
```

### Test 2: All Tasks Complete {@test}

**Input:**
```json
{
  "tasks": [
    {"name": "Planning", "progress": 1.0, "emoji": "📋"},
    {"name": "Execution", "progress": 1.0, "emoji": "🔨"},
    {"name": "Review", "progress": 1.0, "emoji": "✅"}
  ]
}
```

**Expected Output:**
```
Task Status:
📋 📋 📋 📋 📋 Planning: 100%
🔨 🔨 🔨 🔨 🔨 Execution: 100%
✅ ✅ ✅ ✅ ✅ Review: 100%

Overall Progress: 🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢 100%

  🎉
 🎉🎉🎉
🎉🎉🎉🎉🎉
```

### Test 3: Early Stage Progress {@test}

**Input:**
```json
{
  "tasks": [
    {"name": "Research", "progress": 0.1, "emoji": "🔍"},
    {"name": "Prototyping", "progress": 0.0, "emoji": "⚙️"}
  ]
}
```

**Expected Output:**
```
Task Status:
·🔍· Research: 10%
·⚙️· Prototyping: 0%

Overall Progress: ⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪ 5%
```

## Implementation Notes

- The progress bar should have a fixed length of 10 segments
- Use 🟢 for filled segments and ⚪ for empty segments
- Use 🎉 for the celebration pattern
- Progress values should be treated as decimals (0.0 to 1.0) but displayed as percentages (0 to 100)
- The overall progress is the arithmetic mean of all task progress values
- All percentage displays should be rounded to the nearest whole number

## Dependencies { .dependencies }

### @emoji-toolkit/size { .dependency }

Provides emoji size manipulation and visual pattern utilities.

[@satisfied-by](@emoji-toolkit/size)

## Implementation

[@generates](./src/dashboard.ts)

## API

```typescript { #api }
export interface Task {
  name: string;
  progress: number;
  emoji: string;
}

export interface DashboardInput {
  tasks: Task[];
}

export function generateDashboard(input: DashboardInput): string;
```
