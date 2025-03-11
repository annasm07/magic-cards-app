import { mockedCardsDTO } from "@/__mocks__/cards.mock";
import { mapCardAPItoVM, mapToCollection } from "../mappers";

describe("Mappers", () => {
  describe("mapToCollection", () => {
    it("should return a card model with the correct properties", () => {
      const card = mockedCardsDTO[0];

      const cardVm = mapCardAPItoVM(card);

      expect(cardVm).toMatchSnapshot();
    });

    it("should return a card model with the default values", () => {
      const card = mockedCardsDTO[0];

      card.imageUrl = undefined;

      const cardVm = mapCardAPItoVM(card);

      expect(cardVm.imageUrl).toEqual(
        "https://propagandamtg.com/cdn/shop/files/mtg_placeholder_2bfc0f4d-50f6-4158-9104-ffb14d2fe7c5_800x.png?v=1736530948"
      );
    });
  });
  describe("mapToCollection", () => {
    // @ts-ignore - Proposal tests.
    const invalidCases = [null, undefined, []];
    it.each(invalidCases)(
      "should return an empty string when passes %p",
      (testValue) => {
        const irrelevantMapper = (value: string) => value;
        expect(mapToCollection(testValue, irrelevantMapper)).toEqual([]);
      }
    );

    it("should map correctly", () => {
      const irrelevantMapper = (value: number) => value + 1;
      expect(mapToCollection([1, 2, 3], irrelevantMapper)).toEqual([2, 3, 4]);
    });
  });
});
