type MultiverseId = string | number;

export interface Card {
  id: string;
  name: string;
  type: string;
  manaCost: string;
  rarity: string;
  set: string;
  illustrator: string;
  text: string;
  imageUrl: string;
  colors: string[];
}

export interface CardDTO {
  name: string;
  names?: string[];
  manaCost: string;
  cmc: number;
  colors: string[];
  colorIdentity: string[];
  type: string;
  types: string[];
  subtypes?: string[];
  rarity: string;
  set: string;
  setName: string;
  text: string;
  artist: string;
  number: string;
  power?: string;
  toughness?: string;
  layout: string;
  multiverseid?: MultiverseId;
  imageUrl?: string;
  variations?: string[];
  foreignNames?: ForeignName[];
  printings: string[];
  originalText?: string;
  originalType?: string;
  legalities: Legality[];
  id: string;
  flavor?: string;
  rulings?: Ruling[];
  supertypes?: string[];
}

interface Ruling {
  date: string;
  text: string;
}

interface ForeignName {
  name: string;
  language: string;
  text?: string;
  type?: string;
  flavor?: string;
  multiverseid: MultiverseId;
  imageUrl?: string;
  identifiers: Identifiers;
}

interface Identifiers {
  scryfallId: string;
  multiverseId: MultiverseId;
}

interface Legality {
  format: string;
  legality: string;
}
