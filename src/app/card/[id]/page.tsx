"use client";
import CardDetail from "@/components/CardDetail";
import { isNullOrUndefined } from "@/utils/helpers";
import { fetchCard } from "@/infra/card";
import { Card } from "@/types/Card";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Button from "@/components/Button";

export default function DetailPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [card, setCard] = useState<Card | null>(null);

  const handleBackClick = () => {
    router.back();
  };

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
    !isNullOrUndefined(card) && (
      <>
        <Button onClick={handleBackClick} text="&larr; Go Back" />
        <CardDetail card={card as Card} />)
      </>
    )
  );
}
