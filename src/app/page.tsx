import CardList from "./components/CardList";

export default async function Home() {
  const data = await fetch(
    "https://api.magicthegathering.io/v1/cards?pageSize=25"
  );
  const { cards } = await data.json();

  return <CardList cards={cards} />;
}
