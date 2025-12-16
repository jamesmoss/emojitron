import { describe, it, expect } from "vitest";
import {
  scaleEmoji,
  makeTiny,
  makeLarge,
  makeGiant,
  createGrid,
  createPyramid,
  createDiamond,
  createProgressBar,
  repeatEmoji,
  getAvailableSizes,
} from "./index.js";

describe("emoji-size", () => {
  describe("scaleEmoji", () => {
    it("should return tiny emoji with wrapper", () => {
      expect(scaleEmoji("🌟", "tiny")).toBe("·🌟·");
    });

    it("should return medium emoji repeated twice", () => {
      expect(scaleEmoji("🌟", "medium")).toBe("🌟🌟");
    });

    it("should return large emoji repeated three times", () => {
      expect(scaleEmoji("🌟", "large")).toBe("🌟🌟🌟");
    });

    it("should return giant emoji with spaces", () => {
      expect(scaleEmoji("🌟", "giant")).toBe("🌟 🌟 🌟 🌟 🌟");
    });
  });

  describe("convenience functions", () => {
    it("makeTiny should add wrappers", () => {
      expect(makeTiny("😀")).toBe("·😀·");
    });

    it("makeLarge should triple the emoji", () => {
      expect(makeLarge("😀")).toBe("😀😀😀");
    });

    it("makeGiant should quintuple with spaces", () => {
      expect(makeGiant("😀")).toBe("😀 😀 😀 😀 😀");
    });
  });

  describe("createGrid", () => {
    it("should create a 2x3 grid", () => {
      const result = createGrid("⭐", 2, 3);
      expect(result).toBe("⭐⭐⭐\n⭐⭐⭐");
    });

    it("should create a 1x1 grid", () => {
      expect(createGrid("🌙", 1, 1)).toBe("🌙");
    });
  });

  describe("createPyramid", () => {
    it("should create a pyramid of height 3", () => {
      const result = createPyramid("🔺", 3);
      const lines = result.split("\n");
      expect(lines).toHaveLength(3);
      expect(lines[0]).toContain("🔺");
      expect(lines[2]).toContain("🔺🔺🔺🔺🔺");
    });
  });

  describe("createDiamond", () => {
    it("should create a diamond shape", () => {
      const result = createDiamond("💎", 3);
      const lines = result.split("\n");
      expect(lines.length).toBeGreaterThan(1);
    });
  });

  describe("createProgressBar", () => {
    it("should create a 50% progress bar", () => {
      const result = createProgressBar("🟢", "⚪", 0.5, 10);
      expect(result).toBe("🟢🟢🟢🟢🟢⚪⚪⚪⚪⚪");
    });

    it("should create a 100% progress bar", () => {
      const result = createProgressBar("✅", "⬜", 1, 5);
      expect(result).toBe("✅✅✅✅✅");
    });

    it("should create a 0% progress bar", () => {
      const result = createProgressBar("🔵", "⚪", 0, 3);
      expect(result).toBe("⚪⚪⚪");
    });

    it("should clamp progress to valid range", () => {
      const result = createProgressBar("🟢", "⚪", 1.5, 5);
      expect(result).toBe("🟢🟢🟢🟢🟢");
    });
  });

  describe("repeatEmoji", () => {
    it("should repeat emoji n times", () => {
      expect(repeatEmoji("🎉", 3)).toBe("🎉🎉🎉");
    });

    it("should use separator", () => {
      expect(repeatEmoji("🎈", 3, " ")).toBe("🎈 🎈 🎈");
    });

    it("should handle 0 count", () => {
      expect(repeatEmoji("🎊", 0)).toBe("");
    });
  });

  describe("getAvailableSizes", () => {
    it("should return all size options", () => {
      const sizes = getAvailableSizes();
      expect(sizes).toContain("tiny");
      expect(sizes).toContain("medium");
      expect(sizes).toContain("giant");
    });
  });
});

