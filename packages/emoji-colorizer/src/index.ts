/**
 * Emoji colorizer utilities
 * Apply color modifiers to emojis using skin tone variations and color mappings
 */

/** Available skin tone modifiers */
export type SkinTone =
  | "light"
  | "medium-light"
  | "medium"
  | "medium-dark"
  | "dark";

/** Color categories for themed emoji replacement */
export type ColorTheme = "green" | "blue" | "red" | "yellow" | "purple" | "pink";

/** Skin tone modifier unicode characters */
const skinToneModifiers: Record<SkinTone, string> = {
  light: "\u{1F3FB}",
  "medium-light": "\u{1F3FC}",
  medium: "\u{1F3FD}",
  "medium-dark": "\u{1F3FE}",
  dark: "\u{1F3FF}",
};

/** Emojis that support skin tone modifiers */
const skinToneEmojis = [
  "👋", "🤚", "🖐️", "✋", "🖖", "👌", "🤌", "🤏", "✌️", "🤞", "🤟", "🤘", "🤙",
  "👈", "👉", "👆", "🖕", "👇", "☝️", "👍", "👎", "✊", "👊", "🤛", "🤜", "👏",
  "🙌", "👐", "🤲", "🤝", "🙏", "✍️", "💅", "🤳", "💪", "🦵", "🦶", "👂", "🦻",
  "👃", "👶", "🧒", "👦", "👧", "🧑", "👱", "👨", "🧔", "👩", "🧓", "👴", "👵",
  "🙍", "🙎", "🙅", "🙆", "💁", "🙋", "🧏", "🙇", "🤦", "🤷", "👮", "🕵️", "💂",
  "🥷", "👷", "🤴", "👸", "👳", "👲", "🧕", "🤵", "👰", "🤰", "🤱", "👼", "🎅",
  "🤶", "🦸", "🦹", "🧙", "🧚", "🧛", "🧜", "🧝", "🧞", "🧟", "💆", "💇", "🚶",
  "🧍", "🧎", "🏃", "💃", "🕺", "🕴️", "👯", "🧖", "🧗", "🤸", "🏌️", "🏇", "⛷️",
  "🏂", "🏋️", "🤼", "🤽", "🤾", "🤺", "⛹️", "🏄", "🚣", "🏊", "🚴", "🚵", "🤹",
];

/** Color-themed emoji mappings */
const colorThemedEmojis: Record<ColorTheme, string[]> = {
  green: ["💚", "🥒", "🥦", "🥬", "🌲", "🌳", "🌴", "🌱", "🌿", "☘️", "🍀", "🐸", "🦎", "🐢", "🐊", "🟢", "🟩", "♻️"],
  blue: ["💙", "🧊", "🌊", "💎", "🐳", "🐋", "🐬", "🦋", "🫐", "🔵", "🟦", "🌀", "💠", "🧿", "🥶", "🌌"],
  red: ["❤️", "🔴", "🟥", "🍎", "🍒", "🌹", "🐞", "🦞", "🦀", "🍅", "🌶️", "🎈", "♥️", "❣️", "💔", "🩸"],
  yellow: ["💛", "🌟", "⭐", "🌻", "🌼", "🍋", "🍌", "🧀", "🟡", "🟨", "🐥", "🐤", "🌕", "🔆", "⚡", "🏆"],
  purple: ["💜", "🍇", "🍆", "🔮", "☂️", "🟣", "🟪", "👾", "🦄", "🌸", "🎵", "🪻"],
  pink: ["💗", "💖", "💕", "💓", "💞", "🌸", "🌷", "🎀", "🦩", "🐷", "🐖", "🧁", "🍧", "🩰", "🩷"],
};

/** Standard emojis to replace with colored versions */
const standardEmojis = ["❤️", "💙", "💚", "💛", "💜", "🖤", "🤍", "🤎", "💗", "💖"];

/**
 * Apply a skin tone modifier to an emoji
 * @param emoji - The base emoji
 * @param tone - The skin tone to apply
 * @returns The emoji with skin tone modifier, or original if not supported
 */
export function applySkinTone(emoji: string, tone: SkinTone): string {
  // Remove existing skin tone modifiers first
  const baseEmoji = removeSkinTone(emoji);
  
  // Check if this emoji supports skin tones
  if (!skinToneEmojis.includes(baseEmoji)) {
    return emoji;
  }
  
  return baseEmoji + skinToneModifiers[tone];
}

/**
 * Remove skin tone modifier from an emoji
 * @param emoji - The emoji with potential skin tone
 * @returns The base emoji without skin tone modifier
 */
export function removeSkinTone(emoji: string): string {
  const modifierPattern = /[\u{1F3FB}-\u{1F3FF}]/gu;
  return emoji.replace(modifierPattern, "");
}

/**
 * Get the skin tone of an emoji
 * @param emoji - The emoji to analyze
 * @returns The skin tone or null if none applied
 */
export function getSkinTone(emoji: string): SkinTone | null {
  for (const [tone, modifier] of Object.entries(skinToneModifiers)) {
    if (emoji.includes(modifier)) {
      return tone as SkinTone;
    }
  }
  return null;
}

/**
 * Apply skin tone to all compatible emojis in text
 * @param text - Input text containing emojis
 * @param tone - The skin tone to apply
 * @returns Text with skin tones applied
 */
export function applyAllSkinTones(text: string, tone: SkinTone): string {
  let result = text;
  for (const emoji of skinToneEmojis) {
    if (result.includes(emoji)) {
      result = result.replaceAll(emoji, applySkinTone(emoji, tone));
    }
  }
  return result;
}

/**
 * Get a random emoji from a color theme
 * @param theme - The color theme
 * @returns A random themed emoji
 */
export function getColoredEmoji(theme: ColorTheme): string {
  const emojis = colorThemedEmojis[theme];
  return emojis[Math.floor(Math.random() * emojis.length)] as string;
}

/**
 * Replace heart emojis with a specific color
 * @param text - Input text
 * @param theme - Target color theme
 * @returns Text with hearts replaced
 */
export function colorizeHearts(text: string, theme: ColorTheme): string {
  let result = text;
  for (const heartEmoji of standardEmojis) {
    if (result.includes(heartEmoji)) {
      result = result.replaceAll(heartEmoji, getColoredEmoji(theme));
    }
  }
  return result;
}

/**
 * Make all emojis "green" themed
 * @param text - Input text
 * @returns Text with green-themed emoji replacements
 */
export function makeGreen(text: string): string {
  return colorizeHearts(text, "green");
}

/**
 * Make all emojis "blue" themed
 * @param text - Input text
 * @returns Text with blue-themed emoji replacements
 */
export function makeBlue(text: string): string {
  return colorizeHearts(text, "blue");
}

/**
 * Get all emojis for a color theme
 * @param theme - The color theme
 * @returns Array of themed emojis
 */
export function getEmojisForTheme(theme: ColorTheme): string[] {
  return [...colorThemedEmojis[theme]];
}

/**
 * Get all available color themes
 * @returns Array of available themes
 */
export function getAvailableThemes(): ColorTheme[] {
  return Object.keys(colorThemedEmojis) as ColorTheme[];
}

/**
 * Get all available skin tones
 * @returns Array of available skin tones
 */
export function getAvailableSkinTones(): SkinTone[] {
  return Object.keys(skinToneModifiers) as SkinTone[];
}

