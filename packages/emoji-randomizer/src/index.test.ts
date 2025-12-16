import { describe, it, expect } from "vitest";
import {
  randomEmoji,
  randomFromCategory,
  randomEmojis,
  shuffle,
  shuffleEmojisInText,
  pickRandom,
  weightedRandom,
  emojiPassword,
  rollDice,
  flipCoin,
  getAvailableCategories,
  getEmojisInCategory,
  randomSubset,
} from "./index.js";

describe("emoji-randomizer", () => {
  describe("randomEmoji", () => {
    it("should return an emoji string", () => {
      const emoji = randomEmoji();
      expect(typeof emoji).toBe("string");
      expect(emoji.length).toBeGreaterThan(0);
    });

    it("should return different emojis over multiple calls", () => {
      const emojis = new Set(Array(50).fill(null).map(() => randomEmoji()));
      expect(emojis.size).toBeGreaterThan(1);
    });
  });

  describe("randomFromCategory", () => {
    it("should return emoji from specified category", () => {
      const animals = getEmojisInCategory("animals");
      const result = randomFromCategory("animals");
      expect(animals).toContain(result);
    });
  });

  describe("randomEmojis", () => {
    it("should return specified count of emojis", () => {
      const result = randomEmojis(5);
      expect(result).toHaveLength(5);
    });

    it("should return unique emojis when specified", () => {
      const result = randomEmojis(10, true);
      const unique = new Set(result);
      expect(unique.size).toBe(10);
    });
  });

  describe("shuffle", () => {
    it("should return array of same length", () => {
      const input = ["a", "b", "c", "d", "e"];
      const result = shuffle(input);
      expect(result).toHaveLength(input.length);
    });

    it("should contain same elements", () => {
      const input = ["🍎", "🍊", "🍋", "🍇"];
      const result = shuffle(input);
      expect(result.sort()).toEqual(input.sort());
    });

    it("should not mutate original array", () => {
      const input = ["a", "b", "c"];
      const original = [...input];
      shuffle(input);
      expect(input).toEqual(original);
    });
  });

  describe("shuffleEmojisInText", () => {
    it("should keep text structure but shuffle emojis", () => {
      const text = "Hello 😀 World 🌍!";
      const result = shuffleEmojisInText(text);
      expect(result).toMatch(/Hello .+ World .+!/);
    });
  });

  describe("pickRandom", () => {
    it("should pick from given array", () => {
      const options = ["🔴", "🟢", "🔵"];
      const result = pickRandom(options);
      expect(options).toContain(result);
    });

    it("should handle empty array", () => {
      expect(pickRandom([])).toBe("");
    });
  });

  describe("weightedRandom", () => {
    it("should return one of the weighted options", () => {
      const weights = { "🍎": 1, "🍊": 1, "🍋": 1 };
      const result = weightedRandom(weights);
      expect(Object.keys(weights)).toContain(result);
    });

    it("should favor higher weighted items over many runs", () => {
      const weights = { "🍎": 100, "🍊": 1 };
      const results = Array(100).fill(null).map(() => weightedRandom(weights));
      const appleCount = results.filter((r) => r === "🍎").length;
      expect(appleCount).toBeGreaterThan(80);
    });
  });

  describe("emojiPassword", () => {
    it("should generate emoji string of specified length", () => {
      const result = emojiPassword(6);
      // Each emoji is at least 1 char, could be more with modifiers
      expect(result.length).toBeGreaterThanOrEqual(6);
    });
  });

  describe("rollDice", () => {
    it("should return a dice emoji", () => {
      const dice = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
      const result = rollDice();
      expect(dice).toContain(result);
    });
  });

  describe("flipCoin", () => {
    it("should return one of two options", () => {
      const result = flipCoin("😀", "😢");
      expect(["😀", "😢"]).toContain(result);
    });
  });

  describe("getAvailableCategories", () => {
    it("should return all categories", () => {
      const categories = getAvailableCategories();
      expect(categories).toContain("smileys");
      expect(categories).toContain("animals");
      expect(categories).toContain("food");
    });
  });

  describe("getEmojisInCategory", () => {
    it("should return emojis for category", () => {
      const smileys = getEmojisInCategory("smileys");
      expect(smileys.length).toBeGreaterThan(0);
      expect(smileys).toContain("😀");
    });
  });

  describe("randomSubset", () => {
    it("should return specified count from category", () => {
      const result = randomSubset("food", 5);
      expect(result).toHaveLength(5);
      
      const allFood = getEmojisInCategory("food");
      for (const emoji of result) {
        expect(allFood).toContain(emoji);
      }
    });
  });
});

