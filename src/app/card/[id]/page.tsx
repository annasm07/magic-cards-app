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
  const pathname = usePathname();

  const [isLoading, setIsLoading] = useState(true);
  const [card, setCard] = useState<Card | null>(null);

  const handleBackClick = () => {
    router.back();
  };

  const cardId = pathname.split("/")[2];

  useEffect(() => {
    const getCard = async () => {
      try {
        setIsLoading(true);
        const { cards } = await fetchCard(cardId);

        setCard(cards[0]);
        setIsLoading(false);
      } catch {
        setCard(null);
        setIsLoading(false);
      }
    };

    getCard();
  }, [cardId]);

  if (isLoading) {
    return <p>Loading ...</p>;
  }

  return (
    <>
      <Button onClick={handleBackClick} text="&larr; Go Back" />
      {isNullOrUndefined(card) ? (
        <p className="text-md italic text-[#1A1A1A] mb-8">
          Sorry! The selected card could not be found. Plase go back and try
          again.
        </p>
      ) : (
        <CardDetail card={card as Card} />
      )}
    </>
  );
}
