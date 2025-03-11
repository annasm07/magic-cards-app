import { useEffect, useState } from "react";

const DEFAULT_TIMEOUT = 200;

export const useDebouncedText = (
  typedValue: string,
  timeout: number = DEFAULT_TIMEOUT
) => {
  const [debouncedValue, setDebouncedValue] = useState(typedValue);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedValue(typedValue);
    }, timeout);
    return () => {
      clearTimeout(timerId);
    };
  }, [typedValue, timeout]);

  return debouncedValue;
};
