import { describe, it, expect } from "vitest";
import {
  applySkinTone,
  removeSkinTone,
  getSkinTone,
  getColoredEmoji,
  colorizeHearts,
  makeGreen,
  makeBlue,
  getEmojisForTheme,
  getAvailableThemes,
  getAvailableSkinTones,
} from "./index.js";

describe("emoji-colorizer", () => {
  describe("applySkinTone", () => {
    it("should apply skin tone to compatible emoji", () => {
      const result = applySkinTone("👋", "dark");
      expect(result).toBe("👋🏿");
    });

    it("should return original emoji if not compatible", () => {
      const result = applySkinTone("🍕", "dark");
      expect(result).toBe("🍕");
    });
  });

  describe("removeSkinTone", () => {
    it("should remove skin tone from emoji", () => {
      const result = removeSkinTone("👋🏿");
      expect(result).toBe("👋");
    });

    it("should return same emoji if no skin tone", () => {
      const result = removeSkinTone("👋");
      expect(result).toBe("👋");
    });
  });

  describe("getSkinTone", () => {
    it("should detect skin tone", () => {
      expect(getSkinTone("👋🏿")).toBe("dark");
      expect(getSkinTone("👋🏻")).toBe("light");
    });

    it("should return null if no skin tone", () => {
      expect(getSkinTone("👋")).toBeNull();
    });
  });

  describe("getColoredEmoji", () => {
    it("should return an emoji from the theme", () => {
      const greenEmojis = getEmojisForTheme("green");
      const result = getColoredEmoji("green");
      expect(greenEmojis).toContain(result);
    });
  });

  describe("colorizeHearts", () => {
    it("should replace hearts with themed emojis", () => {
      const result = colorizeHearts("I ❤️ you", "green");
      expect(result).not.toContain("❤️");
    });
  });

  describe("makeGreen", () => {
    it("should replace hearts with green emojis", () => {
      const result = makeGreen("Love 💙 nature");
      const greenEmojis = getEmojisForTheme("green");
      const hasGreenEmoji = greenEmojis.some((e) => result.includes(e));
      expect(hasGreenEmoji).toBe(true);
    });
  });

  describe("makeBlue", () => {
    it("should replace hearts with blue emojis", () => {
      const result = makeBlue("Love 💚 ocean");
      const blueEmojis = getEmojisForTheme("blue");
      const hasBlueEmoji = blueEmojis.some((e) => result.includes(e));
      expect(hasBlueEmoji).toBe(true);
    });
  });

  describe("getAvailableThemes", () => {
    it("should return all themes", () => {
      const themes = getAvailableThemes();
      expect(themes).toContain("green");
      expect(themes).toContain("blue");
      expect(themes).toContain("red");
    });
  });

  describe("getAvailableSkinTones", () => {
    it("should return all skin tones", () => {
      const tones = getAvailableSkinTones();
      expect(tones).toContain("light");
      expect(tones).toContain("dark");
      expect(tones.length).toBe(5);
    });
  });
});

