import { Card } from "@/types/Card";

export const fetchCard = async (id: Card["id"]): Promise<{ cards: Card[] }> => {
  const res = await fetch(`https://api.magicthegathering.io/v1/cards?id=${id}`);
  return res.json();
};

export const fetchCards = async (): Promise<{ cards: Card[] }> => {
  const res = await fetch(
    "https://api.magicthegathering.io/v1/cards?pageSize=25"
  );
  return res.json();
};
