import { Card } from "@/types/Card";
import { hasText } from "../utils/helpers";

export const useFilteredCards = (searchTerm: string, cards: Card[]) => {
  if (!Array.isArray(cards)) {
    return [];
  }

  return cards?.reduce((acc: Card[], card) => {
    const trimmedValue = searchTerm?.trim().toLocaleLowerCase();
    const isFoundText =
      hasText(card.name) &&
      card.name.toLocaleLowerCase().includes(trimmedValue);

    if (isFoundText) {
      return [...acc, card];
    }
    return acc;
  }, []);
};
