import { hasText, isNullOrUndefined } from "../helpers";

describe("Helpers", () => {
  describe("isNullOrUndefined", () => {
    const tableCases = [
      [true, null],
      [true, undefined],
      [false, 0],
      [false, 1],
      [false, ""],
      [false, "a"],
    ];

    it.each(tableCases)(
      "should return %p when passes %p as value",
      // @ts-ignore - Proposal tests.
      (expected, value) => {
        const result = isNullOrUndefined(value);
        expect(result).toEqual(expected);
      }
    );
  });

  describe("hasText", () => {
    const tableCases = [
      [false, null],
      [false, undefined],
      [false, ""],
      [false, " "],
      [true, "a"],
    ];

    // @ts-ignore - Proposal tests.
    it.each(tableCases)(
      "should return %p when passes %p as value",
      (expected, value) => {
        const result = hasText(value as string);
        expect(result).toEqual(expected);
      }
    );
  });
});
