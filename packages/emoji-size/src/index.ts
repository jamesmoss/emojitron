/**
 * Emoji size manipulation utilities
 * Create different size representations of emojis
 */

/** Size options for emoji display */
export type EmojiSize = "tiny" | "small" | "medium" | "large" | "huge" | "giant";

/** Configuration for size output */
export interface SizeConfig {
  /** Number of repetitions for the emoji */
  repeat: number;
  /** Wrapper characters */
  wrapper?: { start: string; end: string };
  /** Space between repeated emojis */
  separator: string;
}

/** Size configurations */
const sizeConfigs: Record<EmojiSize, SizeConfig> = {
  tiny: { repeat: 1, wrapper: { start: "·", end: "·" }, separator: "" },
  small: { repeat: 1, separator: "" },
  medium: { repeat: 2, separator: "" },
  large: { repeat: 3, separator: "" },
  huge: { repeat: 4, separator: " " },
  giant: { repeat: 5, separator: " " },
};

/**
 * Scale an emoji to a specific size
 * @param emoji - The emoji to scale
 * @param size - Target size
 * @returns Scaled emoji representation
 */
export function scaleEmoji(emoji: string, size: EmojiSize): string {
  const config = sizeConfigs[size];
  const repeated = Array(config.repeat).fill(emoji).join(config.separator);
  
  if (config.wrapper) {
    return `${config.wrapper.start}${repeated}${config.wrapper.end}`;
  }
  
  return repeated;
}

/**
 * Make an emoji tiny
 * @param emoji - The emoji
 * @returns Tiny representation
 */
export function makeTiny(emoji: string): string {
  return scaleEmoji(emoji, "tiny");
}

/**
 * Make an emoji small
 * @param emoji - The emoji
 * @returns Small representation
 */
export function makeSmall(emoji: string): string {
  return scaleEmoji(emoji, "small");
}

/**
 * Make an emoji large
 * @param emoji - The emoji
 * @returns Large representation
 */
export function makeLarge(emoji: string): string {
  return scaleEmoji(emoji, "large");
}

/**
 * Make an emoji huge
 * @param emoji - The emoji
 * @returns Huge representation
 */
export function makeHuge(emoji: string): string {
  return scaleEmoji(emoji, "huge");
}

/**
 * Make an emoji giant
 * @param emoji - The emoji
 * @returns Giant representation
 */
export function makeGiant(emoji: string): string {
  return scaleEmoji(emoji, "giant");
}

/**
 * Create a grid of emojis
 * @param emoji - The emoji to use
 * @param rows - Number of rows
 * @param cols - Number of columns
 * @returns Multi-line emoji grid
 */
export function createGrid(emoji: string, rows: number, cols: number): string {
  const row = Array(cols).fill(emoji).join("");
  return Array(rows).fill(row).join("\n");
}

/**
 * Create a pyramid of emojis
 * @param emoji - The emoji to use
 * @param height - Height of the pyramid
 * @returns Multi-line pyramid string
 */
export function createPyramid(emoji: string, height: number): string {
  const lines: string[] = [];
  for (let i = 1; i <= height; i++) {
    const spaces = " ".repeat(height - i);
    const emojis = Array(i * 2 - 1).fill(emoji).join("");
    lines.push(spaces + emojis);
  }
  return lines.join("\n");
}

/**
 * Create a diamond shape of emojis
 * @param emoji - The emoji to use
 * @param size - Size of the diamond (width at middle)
 * @returns Multi-line diamond string
 */
export function createDiamond(emoji: string, size: number): string {
  const lines: string[] = [];
  const mid = Math.ceil(size / 2);
  
  // Top half
  for (let i = 1; i <= mid; i++) {
    const spaces = " ".repeat(mid - i);
    const emojis = Array(i * 2 - 1).fill(emoji).join("");
    lines.push(spaces + emojis);
  }
  
  // Bottom half
  for (let i = mid - 1; i >= 1; i--) {
    const spaces = " ".repeat(mid - i);
    const emojis = Array(i * 2 - 1).fill(emoji).join("");
    lines.push(spaces + emojis);
  }
  
  return lines.join("\n");
}

/**
 * Create a progress bar using emojis
 * @param fillEmoji - Emoji for filled portion
 * @param emptyEmoji - Emoji for empty portion
 * @param progress - Progress value (0-1)
 * @param length - Total length of the bar
 * @returns Progress bar string
 */
export function createProgressBar(
  fillEmoji: string,
  emptyEmoji: string,
  progress: number,
  length: number = 10
): string {
  const clampedProgress = Math.max(0, Math.min(1, progress));
  const filledCount = Math.round(clampedProgress * length);
  const emptyCount = length - filledCount;
  
  return (
    Array(filledCount).fill(fillEmoji).join("") +
    Array(emptyCount).fill(emptyEmoji).join("")
  );
}

/**
 * Scale all emojis in text to a specific size
 * @param text - Input text
 * @param size - Target size
 * @returns Text with scaled emojis
 */
export function scaleAllEmojis(text: string, size: EmojiSize): string {
  // Match emoji characters
  const emojiRegex = /\p{Emoji_Presentation}|\p{Emoji}\uFE0F/gu;
  return text.replace(emojiRegex, (match) => scaleEmoji(match, size));
}

/**
 * Repeat an emoji n times
 * @param emoji - The emoji
 * @param count - Number of repetitions
 * @param separator - Optional separator between emojis
 * @returns Repeated emoji string
 */
export function repeatEmoji(emoji: string, count: number, separator: string = ""): string {
  return Array(Math.max(0, count)).fill(emoji).join(separator);
}

/**
 * Get available size options
 * @returns Array of available sizes
 */
export function getAvailableSizes(): EmojiSize[] {
  return Object.keys(sizeConfigs) as EmojiSize[];
}

