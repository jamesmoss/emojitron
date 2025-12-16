/**
 * Emoji randomizer utilities
 * Random emoji generation, shuffling, and selection
 */

/** Emoji categories */
export type EmojiCategory =
  | "smileys"
  | "people"
  | "animals"
  | "food"
  | "travel"
  | "activities"
  | "objects"
  | "symbols"
  | "nature";

/** Emoji collections by category */
const emojiCategories: Record<EmojiCategory, string[]> = {
  smileys: [
    "😀", "😃", "😄", "😁", "😆", "😅", "🤣", "😂", "🙂", "🙃", "😉", "😊",
    "😇", "🥰", "😍", "🤩", "😘", "😗", "😚", "😙", "🥲", "😋", "😛", "😜",
    "🤪", "😝", "🤑", "🤗", "🤭", "🤫", "🤔", "🤐", "🤨", "😐", "😑", "😶",
    "😏", "😒", "🙄", "😬", "🤥", "😌", "😔", "😪", "🤤", "😴", "😷", "🤒",
  ],
  people: [
    "👶", "🧒", "👦", "👧", "🧑", "👱", "👨", "🧔", "👩", "🧓", "👴", "👵",
    "🙍", "🙎", "🙅", "🙆", "💁", "🙋", "🧏", "🙇", "🤦", "🤷", "👮", "🕵️",
    "💂", "🥷", "👷", "🤴", "👸", "👳", "👲", "🧕", "🤵", "👰", "🤰", "🤱",
  ],
  animals: [
    "🐶", "🐱", "🐭", "🐹", "🐰", "🦊", "🐻", "🐼", "🐨", "🐯", "🦁", "🐮",
    "🐷", "🐸", "🐵", "🙈", "🙉", "🙊", "🐒", "🐔", "🐧", "🐦", "🐤", "🐣",
    "🦆", "🦅", "🦉", "🦇", "🐺", "🐗", "🐴", "🦄", "🐝", "🐛", "🦋", "🐌",
    "🐞", "🐜", "🦟", "🦗", "🕷️", "🦂", "🐢", "🐍", "🦎", "🦖", "🦕", "🐙",
  ],
  food: [
    "🍏", "🍎", "🍐", "🍊", "🍋", "🍌", "🍉", "🍇", "🍓", "🫐", "🍈", "🍒",
    "🍑", "🥭", "🍍", "🥥", "🥝", "🍅", "🍆", "🥑", "🥦", "🥬", "🥒", "🌶️",
    "🫑", "🥕", "🧄", "🧅", "🥔", "🍠", "🥐", "🥯", "🍞", "🥖", "🥨", "🧀",
    "🥚", "🍳", "🧈", "🥞", "🧇", "🥓", "🥩", "🍗", "🍖", "🦴", "🌭", "🍔",
  ],
  travel: [
    "🚗", "🚕", "🚙", "🚌", "🚎", "🏎️", "🚓", "🚑", "🚒", "🚐", "🛻", "🚚",
    "🚛", "🚜", "🦯", "🦽", "🦼", "🛴", "🚲", "🛵", "🏍️", "🛺", "🚨", "🚔",
    "🚍", "🚘", "🚖", "🚡", "🚠", "🚟", "🚃", "🚋", "🚞", "🚝", "🚄", "🚅",
    "✈️", "🛫", "🛬", "🛩️", "💺", "🛰️", "🚀", "🛸", "🚁", "🛶", "⛵", "🚤",
  ],
  activities: [
    "⚽", "🏀", "🏈", "⚾", "🥎", "🎾", "🏐", "🏉", "🥏", "🎱", "🪀", "🏓",
    "🏸", "🏒", "🏑", "🥍", "🏏", "🪃", "🥅", "⛳", "🪁", "🏹", "🎣", "🤿",
    "🥊", "🥋", "🎽", "🛹", "🛼", "🛷", "⛸️", "🥌", "🎿", "⛷️", "🏂", "🪂",
    "🎮", "🕹️", "🎲", "🧩", "♟️", "🎭", "🎨", "🎬", "🎤", "🎧", "🎼", "🎹",
  ],
  objects: [
    "⌚", "📱", "📲", "💻", "⌨️", "🖥️", "🖨️", "🖱️", "🖲️", "🕹️", "🗜️", "💽",
    "💾", "💿", "📀", "📼", "📷", "📸", "📹", "🎥", "📽️", "🎞️", "📞", "☎️",
    "📟", "📠", "📺", "📻", "🎙️", "🎚️", "🎛️", "🧭", "⏱️", "⏲️", "⏰", "🕰️",
    "💡", "🔦", "🏮", "🪔", "📔", "📕", "📖", "📗", "📘", "📙", "📚", "📓",
  ],
  symbols: [
    "❤️", "🧡", "💛", "💚", "💙", "💜", "🖤", "🤍", "🤎", "💔", "❣️", "💕",
    "💞", "💓", "💗", "💖", "💘", "💝", "✨", "⭐", "🌟", "💫", "⚡", "🔥",
    "💥", "☀️", "🌈", "☁️", "❄️", "💧", "🌊", "🎵", "🎶", "🔔", "🔕", "📣",
    "✅", "❌", "❓", "❗", "💯", "🔴", "🟠", "🟡", "🟢", "🔵", "🟣", "⚫",
  ],
  nature: [
    "🌵", "🎄", "🌲", "🌳", "🌴", "🪵", "🌱", "🌿", "☘️", "🍀", "🎍", "🪴",
    "🎋", "🍃", "🍂", "🍁", "🪺", "🪹", "🌾", "🌻", "🌼", "🌷", "🌹", "🥀",
    "🪻", "🌺", "🌸", "🪷", "🌈", "☀️", "🌤️", "⛅", "🌥️", "☁️", "🌦️", "🌧️",
    "⛈️", "🌩️", "🌨️", "❄️", "☃️", "⛄", "🌬️", "💨", "🌪️", "🌫️", "🌊", "💧",
  ],
};

/** All emojis combined */
const allEmojis = Object.values(emojiCategories).flat();

/**
 * Get a random emoji from any category
 * @returns A random emoji
 */
export function randomEmoji(): string {
  return allEmojis[Math.floor(Math.random() * allEmojis.length)] as string;
}

/**
 * Get a random emoji from a specific category
 * @param category - The emoji category
 * @returns A random emoji from that category
 */
export function randomFromCategory(category: EmojiCategory): string {
  const emojis = emojiCategories[category];
  return emojis[Math.floor(Math.random() * emojis.length)] as string;
}

/**
 * Get multiple random emojis
 * @param count - Number of emojis to return
 * @param unique - Whether emojis should be unique
 * @returns Array of random emojis
 */
export function randomEmojis(count: number, unique: boolean = false): string[] {
  if (unique) {
    const shuffled = shuffle([...allEmojis]);
    return shuffled.slice(0, Math.min(count, shuffled.length));
  }
  return Array(count)
    .fill(null)
    .map(() => randomEmoji());
}

/**
 * Shuffle an array (Fisher-Yates algorithm)
 * @param array - Array to shuffle
 * @returns Shuffled array
 */
export function shuffle<T>(array: T[]): T[] {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j] as T, result[i] as T];
  }
  return result;
}

/**
 * Shuffle emojis within a string
 * @param text - Text containing emojis
 * @returns Text with shuffled emoji positions
 */
export function shuffleEmojisInText(text: string): string {
  const emojiRegex = /\p{Emoji_Presentation}|\p{Emoji}\uFE0F/gu;
  const emojis = text.match(emojiRegex) ?? [];
  const shuffled = shuffle(emojis);
  
  let emojiIndex = 0;
  return text.replace(emojiRegex, () => shuffled[emojiIndex++] ?? "");
}

/**
 * Replace text emojis with random ones
 * @param text - Input text
 * @param category - Optional category to pick from
 * @returns Text with randomized emojis
 */
export function randomizeEmojis(text: string, category?: EmojiCategory): string {
  const emojiRegex = /\p{Emoji_Presentation}|\p{Emoji}\uFE0F/gu;
  return text.replace(emojiRegex, () =>
    category ? randomFromCategory(category) : randomEmoji()
  );
}

/**
 * Pick a random emoji from a given array
 * @param emojis - Array of emojis to pick from
 * @returns A random emoji from the array
 */
export function pickRandom(emojis: string[]): string {
  return emojis[Math.floor(Math.random() * emojis.length)] ?? "";
}

/**
 * Create a weighted random emoji picker
 * @param weights - Object mapping emojis to their weights
 * @returns Random emoji based on weights
 */
export function weightedRandom(weights: Record<string, number>): string {
  const entries = Object.entries(weights);
  const totalWeight = entries.reduce((sum, [, weight]) => sum + weight, 0);
  let random = Math.random() * totalWeight;
  
  for (const [emoji, weight] of entries) {
    random -= weight;
    if (random <= 0) {
      return emoji;
    }
  }
  
  return entries[0]?.[0] ?? "";
}

/**
 * Generate a random emoji password/code
 * @param length - Length of the code
 * @returns String of random emojis
 */
export function emojiPassword(length: number = 4): string {
  return randomEmojis(length).join("");
}

/**
 * Get random emojis excluding certain ones
 * @param count - Number of emojis
 * @param exclude - Emojis to exclude
 * @returns Array of random emojis
 */
export function randomExcluding(count: number, exclude: string[]): string[] {
  const filtered = allEmojis.filter((e) => !exclude.includes(e));
  return shuffle(filtered).slice(0, count);
}

/**
 * Roll emoji dice (pick from dice emojis)
 * @returns A dice emoji (⚀-⚅)
 */
export function rollDice(): string {
  const dice = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
  return pickRandom(dice);
}

/**
 * Flip emoji coin
 * @param heads - Emoji for heads
 * @param tails - Emoji for tails
 * @returns The randomly chosen side
 */
export function flipCoin(heads: string = "🪙", tails: string = "💀"): string {
  return Math.random() < 0.5 ? heads : tails;
}

/**
 * Get all available categories
 * @returns Array of category names
 */
export function getAvailableCategories(): EmojiCategory[] {
  return Object.keys(emojiCategories) as EmojiCategory[];
}

/**
 * Get all emojis in a category
 * @param category - The category
 * @returns Array of emojis
 */
export function getEmojisInCategory(category: EmojiCategory): string[] {
  return [...emojiCategories[category]];
}

/**
 * Get a random subset of emojis from a category
 * @param category - The category
 * @param count - Number to pick
 * @returns Random subset of emojis
 */
export function randomSubset(category: EmojiCategory, count: number): string[] {
  const emojis = emojiCategories[category];
  return shuffle([...emojis]).slice(0, Math.min(count, emojis.length));
}

