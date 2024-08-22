"use client";

import { useEffect, useState } from "react";

import { get } from "@/services/cards";
import { Header, List, Spinner, ErrorMessage } from "@/components/index";

const PokeCardsHomePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [nameQuery, nameQuerySet] = useState("");
  const [attackQuery, attackQuerySet] = useState("");
  const [typeSelected, setTypeSelected] = useState("");
  const [cards, setCards] = useState([]);

  const fetchCards = async (
    nameQuery: string,
    attackQuery: string,
    typeSelected: string
  ) => {
    try {
      setCards(await get(nameQuery, attackQuery, typeSelected));
    } catch (e) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const retry = () => {
    setIsLoading(true);
    setError(false);
    fetchCards(nameQuery, attackQuery, typeSelected);
  };

  useEffect(() => {
    if (cards.length === 0) {
      fetchCards(nameQuery, attackQuery, typeSelected);
    }
  }, [nameQuery, attackQuery, typeSelected]);

  return (
    <main className="flex flex-col items-center mx-auto max-w-[75%]">
      <Header
        title="Poke Cards"
        nameQuery={nameQuery}
        attackQuery={attackQuery}
        typeSelected={typeSelected}
        attackSet={attackQuerySet}
        nameSet={nameQuerySet}
        typeSet={setTypeSelected}
      />
      {isLoading ? <Spinner /> : <List items={cards} />}
      {error ? (
        <ErrorMessage message="Error fetching cards." retry={retry} />
      ) : null}
    </main>
  );
};

export default PokeCardsHomePage;
