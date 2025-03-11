import { Card } from "@/types/Card";
import LocalStorage from "@/utils/storage";
import { useEffect, useState } from "react";

const storage = new LocalStorage("favoriteCards");

export const useFavoriteCards = () => {
  const [favoriteCards, setFavoriteCards] = useState<Card[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedFavorites = storage.get();
      if (storedFavorites) {
        setFavoriteCards(JSON.parse(storedFavorites));
      }
    }
  }, []);

  const handleFavoriteClick = (card: Card) => {
    setFavoriteCards((prevFavorites: Card[]) => {
      const isFavorite = prevFavorites.some((fav) => fav.id === card.id);

      const updatedFavorites = isFavorite
        ? prevFavorites.filter((fav) => fav.id !== card.id)
        : [...prevFavorites, card];

      storage.set(JSON.stringify(updatedFavorites));

      return updatedFavorites;
    });
  };

  const isFavorite = (cardId: string) =>
    favoriteCards.some((card) => card.id === cardId);

  return { favoriteCards, onFavoriteClick: handleFavoriteClick, isFavorite };
};
