import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-[#1A1A1A] text-[#EAEAEA] sticky top-0 z-1">
      <div className="container mx-auto flex flex-wrap flex-col sm:flex-row items-center justify-between p-4 gap-8">
        <Link href="/">
          <h1 className="text-2xl font-bold text-[#FFD700] cursor-pointer">
            Magic Cards APP
          </h1>
        </Link>

        <nav className="flex flex-wrap space-x-6 flex-col sm:flex-row gap-6">
          <Link href="/" className="hover:text-[#FFD700] transition">
            Home
          </Link>
          <Link href="/favorites" className="hover:text-[#FFD700] transition">
            Favorites
          </Link>
        </nav>
      </div>
    </header>
  );
}
