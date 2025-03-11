import { fetchCard, fetchCards } from "@/infra/card";
import { Card } from "@/types/Card";
import { mapCardAPItoVM, mapToCollection } from "@/utils/mappers";
import { useEffect, useState } from "react";

export const useCards = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [cards, setCards] = useState<Card[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const getCards = async () => {
      try {
        setIsLoading(true);
        const { cards } = await fetchCards(currentPage);

        const mappedCards = mapToCollection(cards, mapCardAPItoVM);

        setCards(mappedCards);
        setIsLoading(false);
      } catch {
        console.error("Failed to fetch cards");
        setIsLoading(false);
      }
    };

    getCards();
  }, [currentPage]);

  return {
    isLoading,
    cards,
    onChangeCurrentPage: setCurrentPage,
    currentPage,
  };
};

export const useCard = (cardId: Card["id"]) => {
  const [isLoading, setIsLoading] = useState(true);
  const [card, setCard] = useState<Card>(null);

  useEffect(() => {
    const getCard = async () => {
      try {
        setIsLoading(true);
        const { cards } = await fetchCard(cardId);

        const mappedCard = mapCardAPItoVM(cards[0]);

        setCard(mappedCard);
        setIsLoading(false);
      } catch {
        setCard(null);
        setIsLoading(false);
      }
    };

    getCard();
  }, [cardId]);

  return {
    isLoading,
    card,
  };
};
