"use client";
import { useEffect, useState } from "react";
import CardList from "./components/CardList";
import { fetchCards } from "@/infra/card";
import { Card } from "@/types/Card";
import { useFilteredCards } from "./useFilteredCards";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [cards, setCards] = useState<Card[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const getCards = async () => {
      try {
        setIsLoading(true);
        const { cards } = await fetchCards();

        setCards(cards);
        setIsLoading(false);
      } catch {
        console.error("Failed to fetch cards");
        setIsLoading(false);
      }
    };

    getCards();
  }, []);

  const fiteredCards = useFilteredCards(searchTerm, cards);

  return isLoading ? (
    <p>Loading ...</p>
  ) : (
    <div className="flex flex-col items-center justify-items-center m-16">
      <input
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 md:w-sm"
        aria-label="Search Magic Cards by Name"
        placeholder="Search..."
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      <CardList cards={fiteredCards} />
    </div>
  );
}
