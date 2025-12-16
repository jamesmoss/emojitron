/**
 * Emoji mood transformation utilities
 * Transform emoji emotions - turn happy emojis sad, angry emojis calm, and more
 */

/** Mood categories for emojis */
export type Mood = "happy" | "sad" | "angry" | "calm" | "surprised" | "neutral";

/** Mapping of emojis to their mood */
const emojiMoods: Record<Mood, string[]> = {
  happy: ["😀", "😃", "😄", "😁", "😆", "😊", "🙂", "😋", "😎", "🤗", "🥰", "😍"],
  sad: ["😢", "😭", "😿", "🥺", "😞", "😔", "😟", "🙁", "☹️", "😥", "😰"],
  angry: ["😠", "😡", "🤬", "👿", "💢", "😤", "🔥", "💀"],
  calm: ["😌", "😇", "🧘", "☮️", "🕊️", "🌸", "🍃", "✨"],
  surprised: ["😮", "😯", "😲", "🤯", "😱", "🙀", "❗", "⁉️"],
  neutral: ["😐", "😑", "🫤", "😶", "🤔", "🫥"],
};

/** Reverse mapping from emoji to mood */
const emojiToMood = new Map<string, Mood>();
for (const [mood, emojis] of Object.entries(emojiMoods) as [Mood, string[]][]) {
  for (const emoji of emojis) {
    emojiToMood.set(emoji, mood);
  }
}

/**
 * Detect the mood of a given emoji
 * @param emoji - The emoji to analyze
 * @returns The detected mood or null if not recognized
 */
export function detectMood(emoji: string): Mood | null {
  return emojiToMood.get(emoji) ?? null;
}

/**
 * Get a random emoji for a given mood
 * @param mood - The target mood
 * @returns A random emoji matching that mood
 */
export function getEmojiForMood(mood: Mood): string {
  const emojis = emojiMoods[mood];
  return emojis[Math.floor(Math.random() * emojis.length)] as string;
}

/**
 * Transform an emoji from one mood to another
 * @param emoji - The original emoji
 * @param targetMood - The desired mood
 * @returns A new emoji with the target mood, or the original if not transformable
 */
export function transformMood(emoji: string, targetMood: Mood): string {
  const currentMood = detectMood(emoji);
  if (!currentMood) return emoji;
  if (currentMood === targetMood) return emoji;
  return getEmojiForMood(targetMood);
}

/**
 * Transform all emojis in a string to a target mood
 * @param text - The input text containing emojis
 * @param targetMood - The desired mood for all emojis
 * @returns The text with transformed emojis
 */
export function transformAllMoods(text: string, targetMood: Mood): string {
  let result = text;
  for (const emoji of emojiToMood.keys()) {
    if (result.includes(emoji)) {
      result = result.replaceAll(emoji, getEmojiForMood(targetMood));
    }
  }
  return result;
}

/**
 * Make happy emojis sad
 * @param text - Input text containing emojis
 * @returns Text with happy emojis replaced by sad ones
 */
export function makeHappySad(text: string): string {
  let result = text;
  for (const emoji of emojiMoods.happy) {
    if (result.includes(emoji)) {
      result = result.replaceAll(emoji, getEmojiForMood("sad"));
    }
  }
  return result;
}

/**
 * Make sad emojis happy
 * @param text - Input text containing emojis
 * @returns Text with sad emojis replaced by happy ones
 */
export function makeSadHappy(text: string): string {
  let result = text;
  for (const emoji of emojiMoods.sad) {
    if (result.includes(emoji)) {
      result = result.replaceAll(emoji, getEmojiForMood("happy"));
    }
  }
  return result;
}

/**
 * Make angry emojis calm
 * @param text - Input text containing emojis
 * @returns Text with angry emojis replaced by calm ones
 */
export function makeAngryCool(text: string): string {
  let result = text;
  for (const emoji of emojiMoods.angry) {
    if (result.includes(emoji)) {
      result = result.replaceAll(emoji, getEmojiForMood("calm"));
    }
  }
  return result;
}

/**
 * Get all available moods
 * @returns Array of available mood types
 */
export function getAvailableMoods(): Mood[] {
  return Object.keys(emojiMoods) as Mood[];
}

/**
 * Get all emojis for a specific mood
 * @param mood - The mood to get emojis for
 * @returns Array of emojis for that mood
 */
export function getEmojisForMood(mood: Mood): string[] {
  return [...emojiMoods[mood]];
}

