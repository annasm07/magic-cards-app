"use client";

import CardListItem from "@/components/CardListItem";
import { Card } from "@/types/Card";

import { useFavoriteCards } from "../hooks/useFavoriteCards";

export default function Favorites() {
  const { favoriteCards } = useFavoriteCards();

  return (
    <>
      <div className="flex flex-col items-center justify-items-center m-16">
        {favoriteCards?.length === 0 ? (
          <p className="text-md italic text-[#1A1A1A] mb-8">
            You have no favorite cards at this moment
          </p>
        ) : (
          <div className="flex flex-wrap justify-center mt-16 drop-shadow-xl">
            {favoriteCards.map((card: Card) => (
              <CardListItem key={card.id} card={card} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
