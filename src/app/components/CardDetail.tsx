import { Card } from "@/types/Card";
import Image from "next/image";

interface CardDetailProps {
  card: Card;
}

const DEFAULT_CARD_IMAGE =
  "https://propagandamtg.com/cdn/shop/files/mtg_placeholder_2bfc0f4d-50f6-4158-9104-ffb14d2fe7c5_800x.png?v=1736530948";

export default function CardDetail({ card }: CardDetailProps) {
  return (
    <div className="bg-[#1A1A1A] text-[#EAEAEA] border border-[#FFD700] rounded-lg shadow-md p-6 max-w-md mx-auto mt-8 sm:min-w-110">
      <div className="w-full h-140 relative mb-4">
        <Image
          src={card.imageUrl ?? DEFAULT_CARD_IMAGE}
          alt={card.name}
          layout="fill"
          objectFit="cover"
          className="rounded-md"
          unoptimized
        />
      </div>

      <h1 className="text-2xl font-bold text-[#FFD700] mb-2">{card.name}</h1>
      <p className="text-sm italic text-[#D4AF37] mb-2">{card.type}</p>

      <p className="text-md mb-2">Mana Cost: {card.manaCost}</p>
      <p className="text-md mb-2">Rarity: {card.rarity}</p>
      <p className="text-md mb-2">Set: {card.setName}</p>
      <p className="text-md mb-4">Illustrated by: {card.artist}</p>

      <div className="bg-[#121212] p-4 rounded-md border border-[#FFD700]">
        <h3 className="text-[#FFD700] font-semibold mb-1">Card Text:</h3>
        <p className="text-sm">{card.text}</p>
      </div>
    </div>
  );
}
