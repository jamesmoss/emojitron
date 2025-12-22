# Emoji Sentiment Analyzer

## Overview

Build a sentiment analyzer that processes text containing emojis and performs mood-based transformations and analysis. The analyzer should detect emoji moods, calculate sentiment scores, and intelligently transform emojis based on configurable rules.

## Requirements

### 1. Sentiment Score Calculation

Implement a function that analyzes text and returns a sentiment score based on emoji moods:

- Happy emojis contribute +1 to the score
- Calm emojis contribute +0.5 to the score
- Neutral emojis contribute 0 to the score
- Surprised emojis contribute 0 to the score
- Sad emojis contribute -1 to the score
- Angry emojis contribute -1.5 to the score
- The function should return the total sentiment score

### 2. Mood Distribution Report

Implement a function that analyzes text and returns a report showing:

- The count of emojis for each mood category (happy, sad, angry, calm, surprised, neutral)
- The total number of recognized emojis
- The most common mood (or "tie" if multiple moods have the same highest count)

### 3. Selective Mood Normalization

Implement a function that normalizes text by transforming only negative emojis (sad and angry) to positive/neutral alternatives:

- Sad emojis should be transformed to happy emojis
- Angry emojis should be transformed to calm emojis
- All other emojis should remain unchanged

### 4. Conditional Sentiment Adjustment

Implement a function that adjusts the overall sentiment of text based on a threshold:

- If the sentiment score (from requirement 1) is below -2, transform ALL emojis to neutral
- If the sentiment score is between -2 and 0 (exclusive), apply selective normalization (from requirement 3)
- If the sentiment score is 0 or positive, keep the text unchanged
- The function should return the transformed text

## Input/Output

All functions should work with standard strings containing text and emojis. Handle cases where:

- Text contains no emojis
- Text contains only unrecognized emojis
- Text contains mixed recognized and unrecognized emojis

## Dependencies { .dependencies }

### @emoji-toolkit/mood { .dependency }

Provides emoji mood detection and transformation capabilities.

## Test Cases

Create a test file `analyzer.test.ts` with the following test cases:

### Test 1: Sentiment Score Calculation { .test }

```typescript
@test
Input: "Great day! 😀😊 Having fun!"
Expected: Sentiment score of 2 (two happy emojis: +1 each)
```

### Test 2: Mood Distribution { .test }

```typescript
@test
Input: "Mixed emotions 😀😢😡"
Expected: Report showing 1 happy, 1 sad, 1 angry, 0 for other moods, total 3 emojis
```

### Test 3: Selective Normalization { .test }

```typescript
@test
Input: "Feeling bad 😢 and angry 😡 but also good 😊"
Expected: Text with sad and angry emojis transformed, but happy emoji unchanged
Note: Due to randomization, verify the transformed emojis are in the correct mood categories
```

### Test 4: Conditional Adjustment { .test }

```typescript
@test
Input: "Terrible day 😢😭😡😠" (sentiment score: -5)
Expected: All emojis transformed to neutral (score below -2)
Note: Due to randomization, verify all emojis are from the neutral mood category
```

## Implementation Notes

- Create appropriate TypeScript interfaces or types for the mood distribution report
- Handle the non-deterministic nature of emoji transformations in your tests
- Consider performance when processing large texts with many emojis
- Ensure your code properly handles emojis that may not be recognized

## File Structure

```
analyzer.ts          # Main implementation file
analyzer.test.ts     # Test file with the test cases above
```
