import { Card, CardDTO } from "@/types/Card";

const DEFAULT_CARD_IMAGE =
  "https://propagandamtg.com/cdn/shop/files/mtg_placeholder_2bfc0f4d-50f6-4158-9104-ffb14d2fe7c5_800x.png?v=1736530948";

export const mapCardAPItoVM = (card: CardDTO): Card => {
  return {
    id: card.id,
    name: card.name,
    type: card.type,
    manaCost: card.manaCost,
    rarity: card.rarity,
    set: card.setName,
    illustrator: card.artist,
    text: card.text,
    colors: card.colors,
    imageUrl: card.imageUrl || DEFAULT_CARD_IMAGE,
  };
};

export const mapToCollection = <Item, ItemResult>(
  collection: Item[],
  mapItemFn: (item: Item, index?: number) => ItemResult
): ItemResult[] => (Array.isArray(collection) ? collection.map(mapItemFn) : []);
