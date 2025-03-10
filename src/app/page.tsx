"use client";
import { useEffect, useState } from "react";
import { VariableSizeGrid as Grid } from "react-window";
import { fetchCards } from "@/infra/card";
import { Card } from "@/types/Card";
import { useFilteredCards } from "./useFilteredCards";
import Pagintation from "@/components/Pagination";
import { useListConfig } from "./useListConfig";
import CardRow from "@/components/CardRow";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [cards, setCards] = useState<Card[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const getCards = async () => {
      try {
        setIsLoading(true);
        const { cards } = await fetchCards(currentPage);

        setCards(cards);
        setIsLoading(false);
      } catch {
        console.error("Failed to fetch cards");
        setIsLoading(false);
      }
    };

    getCards();
  }, [currentPage]);

  const { columnCount, rowCount, width } = useListConfig();

  const fiteredCards = useFilteredCards(searchTerm, cards);

  if (isLoading) {
    return <p>Loading ...</p>;
  }

  return (
    <>
      <div className="flex flex-col items-center justify-items-center m-16">
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 md:w-sm"
          aria-label="Search Magic Cards by Name"
          placeholder="Search..."
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        {fiteredCards?.length === 0 ? (
          <p className="text-md italic text-[#1A1A1A] mb-8">
            Sorry! No cards were found
          </p>
        ) : (
          <div className="flex flex-wrap justify-center mt-16 drop-shadow-xl">
            <Grid
              columnCount={columnCount}
              columnWidth={() => 500}
              height={550}
              rowCount={rowCount}
              rowHeight={() => 150}
              width={width}
              itemData={cards}
            >
              {CardRow}
            </Grid>
          </div>
        )}
      </div>
      <Pagintation
        onPageChange={(newPage: number) => setCurrentPage(newPage)}
        currentPage={currentPage}
        totalPages={100}
      />
    </>
  );
}
