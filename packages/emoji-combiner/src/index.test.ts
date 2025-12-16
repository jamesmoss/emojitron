import { describe, it, expect } from "vitest";
import {
  joinWithZWJ,
  createFamily,
  createProfession,
  splitZWJ,
  isZWJSequence,
  getPresetSequence,
  getAvailablePresets,
  sequence,
  addBorder,
  sandwich,
  alternate,
  wave,
  mirror,
  decomposeZWJ,
  bulletList,
} from "./index.js";

describe("emoji-combiner", () => {
  describe("joinWithZWJ", () => {
    it("should join emojis with ZWJ", () => {
      const result = joinWithZWJ("👨", "💻");
      expect(result).toBe("👨\u200D💻");
    });
  });

  describe("createFamily", () => {
    it("should create family combination", () => {
      const result = createFamily("👨", "👩", "👧");
      expect(result).toContain("👨");
      expect(result).toContain("👩");
      expect(result).toContain("👧");
      expect(result).toContain("\u200D");
    });
  });

  describe("createProfession", () => {
    it("should create profession emoji", () => {
      const result = createProfession("👩", "🔬");
      expect(result).toBe("👩\u200D🔬");
    });
  });

  describe("splitZWJ", () => {
    it("should split ZWJ sequence", () => {
      const result = splitZWJ("👨\u200D💻");
      expect(result).toEqual(["👨", "💻"]);
    });
  });

  describe("isZWJSequence", () => {
    it("should detect ZWJ sequences", () => {
      expect(isZWJSequence("👨\u200D💻")).toBe(true);
      expect(isZWJSequence("😀")).toBe(false);
    });
  });

  describe("getPresetSequence", () => {
    it("should return preset sequences", () => {
      const moon = getPresetSequence("moon");
      expect(moon).toContain("🌑");
      expect(moon).toContain("🌕");
    });

    it("should return empty string for unknown preset", () => {
      // presetSequences is Record<string, string> so any string key is valid
      expect(getPresetSequence("nonexistent")).toBe("");
    });
  });

  describe("getAvailablePresets", () => {
    it("should return all preset names", () => {
      const presets = getAvailablePresets();
      expect(presets).toContain("love");
      expect(presets).toContain("moon");
      expect(presets).toContain("space");
    });
  });

  describe("sequence", () => {
    it("should combine emojis", () => {
      expect(sequence(["🌟", "🌙", "☀️"])).toBe("🌟🌙☀️");
    });

    it("should use separator", () => {
      expect(sequence(["🌟", "🌙"], " - ")).toBe("🌟 - 🌙");
    });
  });

  describe("addBorder", () => {
    it("should add border around emoji", () => {
      expect(addBorder("⭐", "✨")).toBe("✨⭐✨");
    });
  });

  describe("sandwich", () => {
    it("should create sandwich pattern", () => {
      expect(sandwich("🍔", "🍞")).toBe("🍞🍔🍞");
    });
  });

  describe("alternate", () => {
    it("should create alternating pattern", () => {
      expect(alternate("⚫", "⚪", 4)).toBe("⚫⚪⚫⚪");
    });
  });

  describe("wave", () => {
    it("should create wave pattern", () => {
      const result = wave("🌊", 3);
      expect(result).toContain("🌊");
      expect(result).toContain("🌊🌊");
      expect(result).toContain("🌊🌊🌊");
    });
  });

  describe("mirror", () => {
    it("should create mirror pattern", () => {
      expect(mirror(["🔴", "🟡", "🟢"])).toBe("🔴🟡🟢🟡🔴");
    });
  });

  describe("decomposeZWJ", () => {
    it("should decompose known combinations", () => {
      const result = decomposeZWJ("👨‍💻");
      expect(result).toEqual(["👨", "💻"]);
    });

    it("should return null for non-ZWJ emojis", () => {
      expect(decomposeZWJ("😀")).toBeNull();
    });
  });

  describe("bulletList", () => {
    it("should create emoji bullet list", () => {
      const result = bulletList("✅", ["Task 1", "Task 2"]);
      expect(result).toBe("✅ Task 1\n✅ Task 2");
    });
  });
});

