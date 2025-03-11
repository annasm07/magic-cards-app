"use client";
import CardDetail from "@/components/CardDetail";
import { isNullOrUndefined } from "@/utils/helpers";
import { CardDTO } from "@/types/Card";
import { usePathname, useRouter } from "next/navigation";
import Button from "@/components/Button";
import { useCard } from "@/app/hooks/useCards";
import HeartButton from "@/components/HeartButton";
import { useFavoriteCards } from "@/app/hooks/useFavoriteCards";

export default function DetailPage() {
  const router = useRouter();
  const pathname = usePathname();

  const cardId = pathname.split("/")[2];
  const { isLoading, card } = useCard(cardId);
  const { isFavorite, onFavoriteClick } = useFavoriteCards();

  const handleBackClick = () => {
    router.back();
  };

  if (isLoading) {
    return <p>Loading ...</p>;
  }

  return (
    <>
      <div className="flex place-content-around">
        <Button onClick={handleBackClick} disabled={false}>
          &larr; Go Back
        </Button>
        <HeartButton
          onClick={() => onFavoriteClick(card)}
          isActive={isFavorite(card.id)}
        />
      </div>
      {isNullOrUndefined(card) ? (
        <p className="text-md italic text-[#1A1A1A] mb-8">
          Sorry! The selected card could not be found. Plase go back and try
          again.
        </p>
      ) : (
        <CardDetail card={card} />
      )}
    </>
  );
}
