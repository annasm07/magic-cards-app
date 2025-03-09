"use client";
import { fetchCard } from "@/infra/card";
import { Card } from "@/types/Card";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function DetailPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [card, setCard] = useState<Card | null>(null);

  const pathname = usePathname();
  const cardId = pathname.split("/")[2];

  useEffect(() => {
    const getCard = async () => {
      try {
        setIsLoading(true);
        const { cards } = await fetchCard(cardId);

        setCard(cards[0]);
        setIsLoading(false);
      } catch {
        console.error("Failed to fetch card");
        setIsLoading(false);
      }
    };

    getCard();
  }, [cardId]);

  return isLoading ? (
    <p>Loading ...</p>
  ) : (
    <p>This will have the detail of the selected Card {card?.name}</p>
  );
}
