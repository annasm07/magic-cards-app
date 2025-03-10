"use client";

import Button from "@/components/Button";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-items-center m-16">
      <h2 className="text-xl font-bold text-[#1A1A1A] mb-2">
        Something went wrong!
      </h2>
      <Button disabled={false} onClick={() => reset()}>
        Try again
      </Button>
    </div>
  );
}
