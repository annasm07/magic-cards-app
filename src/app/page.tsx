"use client";
import { useState } from "react";
import { VariableSizeGrid as Grid } from "react-window";
import { useFilteredCards } from "./hooks/useFilteredCards";
import Pagintation from "@/components/Pagination";
import { useListConfig } from "./hooks/useListConfig";
import CardRow from "@/components/CardRow";
import { useCards } from "./hooks/useCards";
import { useDebouncedText } from "./hooks/useDebouncedText";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const { isLoading, cards, onChangeCurrentPage, currentPage } = useCards();

  const { columnCount, rowCount, width } = useListConfig();

  const debouncedSearchValue = useDebouncedText(searchTerm);

  const fiteredCards = useFilteredCards(debouncedSearchValue, cards);

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
              itemData={fiteredCards || []}
            >
              {CardRow}
            </Grid>
          </div>
        )}
      </div>
      <Pagintation
        onPageChange={(newPage: number) => onChangeCurrentPage(newPage)}
        currentPage={currentPage}
        totalPages={100}
      />
    </>
  );
}
