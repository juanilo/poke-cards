import type { Metadata } from "next";
import Link from "next/link";
import CardsIcon from "@/svgs/cards.svg";

export const metadata: Metadata = {
  title: "Poke Cards : Battle",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex flex-col items-center mx-auto max-w-[75%] ">
      <div className="flex flex-row items-center gap-4">
        <CardsIcon />
        <h1 className="text-6xl">Poke-Cards : Battle</h1>
      </div>
      {children}
      <div className="flex justify-center mt-10 mb-20">
        <Link href="/">
          <button className="w-full py-2 px-3 border rounded-2xl shadow text-black bg-green-700 h-16 text-2xl cursor-pointer font-bold">
            Back
          </button>
        </Link>
      </div>
    </main>
  );
}
