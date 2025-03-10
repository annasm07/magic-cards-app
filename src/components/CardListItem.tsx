import Image from "next/legacy/image";
import Link from "next/link";
import { GridChildComponentProps } from "react-window";

const DEFAULT_CARD_IMAGE =
  "https://propagandamtg.com/cdn/shop/files/mtg_placeholder_2bfc0f4d-50f6-4158-9104-ffb14d2fe7c5_800x.png?v=1736530948";

export default function CardListItem({
  columnIndex,
  rowIndex,
  style,
  data,
}: GridChildComponentProps) {
  const card = data[columnIndex + rowIndex];
  return (
    <div style={style}>
      <Link href={`/card/${card.id}`} className="min-w-100">
        <div className="bg-[#1A1A1A] text-[#EAEAEA] border border-[#FFD700] rounded-lg shadow-md p-4 flex space-x-4 items-center m-2">
          <div className="w-20 h-28 relative">
            <Image
              src={card.imageUrl ?? DEFAULT_CARD_IMAGE}
              alt={card.name}
              layout="fill"
              objectFit="cover"
              className="rounded-md"
              unoptimized
            />
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#FFD700]">{card.name}</h2>
            <p className="text-sm italic text-[#D4AF37]">{card.type}</p>
            <div className="flex space-x-2 mt-2">
              {card.colors.map((color: string) => (
                <span
                  key={color}
                  className={`px-2 py-1 text-xs font-bold rounded bg-[#F8F4E6] text-black`}
                >
                  {color}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
