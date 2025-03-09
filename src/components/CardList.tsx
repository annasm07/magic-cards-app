import { Card } from "@/types/Card";
import Link from "next/link";

interface CardListProps {
  cards: Card[];
}

export default function CardList({ cards }: CardListProps) {
  return (
    <>
      {cards.map((card: Card) => (
        <Link key={card.id} href={`/card/${card.id}`}>
          <p>{card.name}</p>
        </Link>
      ))}
    </>
  );
}
