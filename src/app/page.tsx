import { Card } from "@/types/Card";

export default async function Home() {
  const data = await fetch(
    "https://api.magicthegathering.io/v1/cards?pageSize=25"
  );
  const { cards } = await data.json();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header className="flex gap-6 flex-wrap">
        <p>Header Navigation</p>
      </header>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>Magic Cards App</h1>

        {cards.map((card: Card) => (
          <p key={card.id}>{card.name}</p>
        ))}
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p>This is the footer</p>
      </footer>
    </div>
  );
}
