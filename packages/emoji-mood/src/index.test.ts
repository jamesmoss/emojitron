import { describe, it, expect } from "vitest";
import {
  detectMood,
  getEmojiForMood,
  transformMood,
  makeHappySad,
  makeSadHappy,
  getAvailableMoods,
  getEmojisForMood,
} from "./index.js";

describe("emoji-mood", () => {
  describe("detectMood", () => {
    it("should detect happy emojis", () => {
      expect(detectMood("😀")).toBe("happy");
      expect(detectMood("😊")).toBe("happy");
    });

    it("should detect sad emojis", () => {
      expect(detectMood("😢")).toBe("sad");
      expect(detectMood("😭")).toBe("sad");
    });

    it("should return null for unknown emojis", () => {
      expect(detectMood("🍕")).toBeNull();
      expect(detectMood("abc")).toBeNull();
    });
  });

  describe("getEmojiForMood", () => {
    it("should return an emoji for the given mood", () => {
      const happyEmojis = getEmojisForMood("happy");
      const result = getEmojiForMood("happy");
      expect(happyEmojis).toContain(result);
    });
  });

  describe("transformMood", () => {
    it("should transform happy emoji to sad", () => {
      const result = transformMood("😀", "sad");
      const sadEmojis = getEmojisForMood("sad");
      expect(sadEmojis).toContain(result);
    });

    it("should return original if not a known emoji", () => {
      expect(transformMood("🍕", "happy")).toBe("🍕");
    });

    it("should return same emoji if already in target mood", () => {
      const result = transformMood("😀", "happy");
      const happyEmojis = getEmojisForMood("happy");
      expect(happyEmojis).toContain(result);
    });
  });

  describe("makeHappySad", () => {
    it("should convert happy emojis to sad in text", () => {
      const result = makeHappySad("Hello 😀 World");
      const sadEmojis = getEmojisForMood("sad");
      const containsSadEmoji = sadEmojis.some((e) => result.includes(e));
      expect(containsSadEmoji).toBe(true);
      expect(result).not.toContain("😀");
    });
  });

  describe("makeSadHappy", () => {
    it("should convert sad emojis to happy in text", () => {
      const result = makeSadHappy("Goodbye 😢 World");
      const happyEmojis = getEmojisForMood("happy");
      const containsHappyEmoji = happyEmojis.some((e) => result.includes(e));
      expect(containsHappyEmoji).toBe(true);
      expect(result).not.toContain("😢");
    });
  });

  describe("getAvailableMoods", () => {
    it("should return all available moods", () => {
      const moods = getAvailableMoods();
      expect(moods).toContain("happy");
      expect(moods).toContain("sad");
      expect(moods).toContain("angry");
      expect(moods).toContain("calm");
    });
  });
});

