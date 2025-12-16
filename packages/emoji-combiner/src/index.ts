/**
 * Emoji combiner utilities
 * Combine emojis into sequences, ZWJ combinations, and creative patterns
 */

/** Zero-Width Joiner character */
const ZWJ = "\u200D";

/** Variation Selector-16 (emoji style) */
const VS16 = "\uFE0F";

/** Known ZWJ combinations that render as single emojis */
const zwjCombinations: Record<string, string[]> = {
  "👨‍👩‍👧": ["👨", "👩", "👧"],
  "👨‍👩‍👦": ["👨", "👩", "👦"],
  "👨‍👩‍👧‍👦": ["👨", "👩", "👧", "👦"],
  "👨‍💻": ["👨", "💻"],
  "👩‍💻": ["👩", "💻"],
  "👨‍🔬": ["👨", "🔬"],
  "👩‍🔬": ["👩", "🔬"],
  "👨‍🎨": ["👨", "🎨"],
  "👩‍🎨": ["👩", "🎨"],
  "👨‍🚀": ["👨", "🚀"],
  "👩‍🚀": ["👩", "🚀"],
  "👨‍🍳": ["👨", "🍳"],
  "👩‍🍳": ["👩", "🍳"],
  "🏳️‍🌈": ["🏳️", "🌈"],
  "🏴‍☠️": ["🏴", "☠️"],
  "❤️‍🔥": ["❤️", "🔥"],
  "❤️‍🩹": ["❤️", "🩹"],
  "😶‍🌫️": ["😶", "🌫️"],
  "🐻‍❄️": ["🐻", "❄️"],
};

/** Preset emoji sequences for common concepts */
const presetSequences: Record<string, string> = {
  love: "💕💖💗💓💞",
  weather: "☀️🌤️⛅🌥️☁️🌧️⛈️🌩️",
  moon: "🌑🌒🌓🌔🌕🌖🌗🌘",
  time: "🕐🕑🕒🕓🕔🕕🕖🕗🕘🕙🕚🕛",
  growth: "🌱🌿🌳",
  fire: "🔥💥✨⚡",
  ocean: "🌊🐚🐠🐟🦈🐙",
  space: "🌍🌎🌏🌙⭐🌟💫🚀🛸👽",
  food: "🍕🍔🌮🌯🥗🍜🍣🍱",
  celebration: "🎉🎊🎈🎁🥳🎂🍰",
};

/**
 * Join emojis with Zero-Width Joiner
 * Note: Only certain combinations render as single emojis
 * @param emojis - Array of emojis to join
 * @returns ZWJ-joined emoji string
 */
export function joinWithZWJ(...emojis: string[]): string {
  return emojis.join(ZWJ);
}

/**
 * Create a family emoji combination
 * @param members - Family member emojis (e.g., "👨", "👩", "👧")
 * @returns Combined family emoji
 */
export function createFamily(...members: string[]): string {
  return members.join(ZWJ);
}

/**
 * Create a profession emoji (person + tool/symbol)
 * @param person - Person emoji
 * @param item - Profession symbol
 * @returns Combined profession emoji
 */
export function createProfession(person: string, item: string): string {
  return person + ZWJ + item;
}

/**
 * Split a ZWJ sequence into its components
 * @param emoji - The ZWJ emoji sequence
 * @returns Array of component emojis
 */
export function splitZWJ(emoji: string): string[] {
  return emoji.split(ZWJ).filter((e) => e.length > 0);
}

/**
 * Check if an emoji is a ZWJ sequence
 * @param emoji - The emoji to check
 * @returns True if it's a ZWJ sequence
 */
export function isZWJSequence(emoji: string): boolean {
  return emoji.includes(ZWJ);
}

/**
 * Create an emoji sequence from preset
 * @param preset - Name of the preset
 * @returns The emoji sequence or empty string if not found
 */
export function getPresetSequence(preset: keyof typeof presetSequences): string {
  return presetSequences[preset] ?? "";
}

/**
 * Get all available preset names
 * @returns Array of preset names
 */
export function getAvailablePresets(): string[] {
  return Object.keys(presetSequences);
}

/**
 * Combine emojis into a sequence with optional separator
 * @param emojis - Array of emojis
 * @param separator - Optional separator between emojis
 * @returns Combined sequence
 */
export function sequence(emojis: string[], separator: string = ""): string {
  return emojis.join(separator);
}

/**
 * Create a bordered emoji display
 * @param emoji - The center emoji
 * @param border - The border emoji
 * @returns Bordered emoji string
 */
export function addBorder(emoji: string, border: string): string {
  return `${border}${emoji}${border}`;
}

/**
 * Create a sandwich pattern (emoji surrounded by others)
 * @param center - Center emoji
 * @param outer - Outer emojis
 * @returns Sandwiched emoji
 */
export function sandwich(center: string, outer: string): string {
  return `${outer}${center}${outer}`;
}

/**
 * Create an alternating pattern of two emojis
 * @param emoji1 - First emoji
 * @param emoji2 - Second emoji
 * @param count - Number of pairs
 * @returns Alternating pattern
 */
export function alternate(emoji1: string, emoji2: string, count: number): string {
  return Array(count)
    .fill(null)
    .map((_, i) => (i % 2 === 0 ? emoji1 : emoji2))
    .join("");
}

/**
 * Create a wave pattern (increasing then decreasing count)
 * @param emoji - The emoji to use
 * @param maxCount - Maximum count at peak
 * @returns Wave pattern string
 */
export function wave(emoji: string, maxCount: number): string {
  const parts: string[] = [];
  
  // Rising
  for (let i = 1; i <= maxCount; i++) {
    parts.push(emoji.repeat(i));
  }
  
  // Falling
  for (let i = maxCount - 1; i >= 1; i--) {
    parts.push(emoji.repeat(i));
  }
  
  return parts.join(" ");
}

/**
 * Create a mirror pattern
 * @param emojis - Array of emojis
 * @returns Mirrored sequence
 */
export function mirror(emojis: string[]): string {
  const reversed = [...emojis].reverse().slice(1);
  return [...emojis, ...reversed].join("");
}

/**
 * Add variation selector to make emoji render in emoji style
 * @param char - The character
 * @returns Character with VS16 applied
 */
export function addEmojiStyle(char: string): string {
  return char + VS16;
}

/**
 * Get known ZWJ combinations
 * @returns Object mapping combined emojis to their components
 */
export function getKnownZWJCombinations(): Record<string, string[]> {
  return { ...zwjCombinations };
}

/**
 * Find what emojis make up a ZWJ combination
 * @param emoji - The combined emoji
 * @returns Array of components or null if not known
 */
export function decomposeZWJ(emoji: string): string[] | null {
  return zwjCombinations[emoji] ?? (isZWJSequence(emoji) ? splitZWJ(emoji) : null);
}

/**
 * Create emoji bullet points
 * @param emoji - Bullet emoji
 * @param items - Array of text items
 * @returns Formatted bullet list
 */
export function bulletList(emoji: string, items: string[]): string {
  return items.map((item) => `${emoji} ${item}`).join("\n");
}

