import type { Metadata } from "next";
import "./globals.css";
import { geistMono, geistSans } from "../ui/fonts";
import Header from "../components/Header";

export const metadata: Metadata = {
  title: "Magic Cards App",
  description: "Application to learn all about Magic Cards!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="flex flex-col gap-8">{children}</main>
        <footer className="absolute bg-[#1A1A1A] text-[#EAEAEA] text-center p-4 mt-4 inset-x-0 bottom-0 fixed">
          <p>&copy; 2025 Magic Cards App - Anna Sala </p>
        </footer>
      </body>
    </html>
  );
}
