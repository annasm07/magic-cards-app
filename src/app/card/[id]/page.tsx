"use client";
import CardDetail from "@/components/CardDetail";
import { isNullOrUndefined } from "@/utils/helpers";
import { CardDTO } from "@/types/Card";
import { usePathname, useRouter } from "next/navigation";
import Button from "@/components/Button";
import { useCard } from "@/app/hooks/useCards";

export default function DetailPage() {
  const router = useRouter();
  const pathname = usePathname();

  const cardId = pathname.split("/")[2];
  const { isLoading, card } = useCard(cardId);

  const handleBackClick = () => {
    router.back();
  };

  if (isLoading) {
    return <p>Loading ...</p>;
  }

  return (
    <>
      <Button onClick={handleBackClick} disabled={false}>
        &larr; Go Back
      </Button>
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
