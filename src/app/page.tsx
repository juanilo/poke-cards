"use client";

import { useEffect, useState } from "react";

import { get } from "@/services/cards";
import {
  Header,
  List,
  Spinner,
  ErrorMessage,
  Paginator,
} from "@/components/index";

const PokeCardsHomePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [cards, setCards] = useState([]);

  const [nameQuery, nameQuerySet] = useState("");
  const [abilitySelected, setAbility] = useState("");
  const [typeSelected, setTypeSelected] = useState("");

  const [limit, setLimit] = useState(4);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const fetchCards = async (
    limit: number,
    page: number,
    nameQuery: string,
    abilitySelected: string,
    typeSelected: string
  ) => {
    try {
      const { cards, totalCards } = await get(
        limit,
        page,
        nameQuery,
        abilitySelected,
        typeSelected
      );
      setCards(cards);
      setTotalPages(Math.ceil(parseInt(totalCards) / limit));
    } catch (e) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const retry = () => {
    setIsLoading(true);
    setError(false);
    fetchCards(limit, page, nameQuery, abilitySelected, typeSelected);
  };

  useEffect(() => {
    fetchCards(limit, page, nameQuery, abilitySelected, typeSelected);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, limit, nameQuery, abilitySelected, typeSelected]);

  return (
    <main className="flex flex-col items-center mx-auto max-w-[75%]">
      <Header
        title="Poke Cards"
        nameQuery={nameQuery}
        nameSet={nameQuerySet}
        typeSelected={typeSelected}
        typeSet={setTypeSelected}
        abilitySelected={abilitySelected}
        setAbility={setAbility}
      />
      {isLoading ? (
        <Spinner />
      ) : (
        !error && (
          <div>
            <List items={cards} />
            <Paginator
              limit={limit}
              setLimit={setLimit}
              total={totalPages}
              current={page}
              onPageChange={(page) => setPage(page)}
            />
          </div>
        )
      )}
      {error ? (
        <ErrorMessage message="Error fetching cards." retry={retry} />
      ) : null}
    </main>
  );
};

export default PokeCardsHomePage;
