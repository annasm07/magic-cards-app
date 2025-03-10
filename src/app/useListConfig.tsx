import { useEffect, useState } from "react";

export const useListConfig = () => {
  const [columnCount, setColumnCount] = useState(2);

  useEffect(() => {
    const updateColumnCount = () => {
      if (window.innerWidth >= 1800) {
        setColumnCount(3);
      } else if (window.innerWidth >= 1000) {
        setColumnCount(2);
      } else {
        setColumnCount(1);
      }
    };
    updateColumnCount();

    window.addEventListener("resize", updateColumnCount);

    return () => window.removeEventListener("resize", updateColumnCount);
  }, []);

  const width = columnCount * 500;
  const rowCount = 100 / columnCount;

  return { columnCount, width, rowCount };
};
