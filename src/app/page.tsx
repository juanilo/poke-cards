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
  const [nameQuery, nameQuerySet] = useState("");
  const [attackQuery, attackQuerySet] = useState("");
  const [typeSelected, setTypeSelected] = useState("");
  const [cards, setCards] = useState([]);

  const [limit, setLimit] = useState(4);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const fetchCards = async (
    limit: number,
    page: number,
    nameQuery: string,
    attackQuery: string,
    typeSelected: string
  ) => {
    try {
      const result = await get(
        limit,
        page,
        nameQuery,
        attackQuery,
        typeSelected
      );
      const { cards, count } = result;
      setCards(cards);
      setTotalPages(Math.ceil(parseInt(count) / limit));
    } catch (e) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const retry = () => {
    setIsLoading(true);
    setError(false);
    fetchCards(limit, page, nameQuery, attackQuery, typeSelected);
  };

  useEffect(() => {
    fetchCards(limit, page, nameQuery, attackQuery, typeSelected);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, limit, nameQuery, attackQuery, typeSelected]);

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
      {isLoading ? (
        <Spinner />
      ) : (
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
      )}
      {error ? (
        <ErrorMessage message="Error fetching cards." retry={retry} />
      ) : null}
    </main>
  );
};

export default PokeCardsHomePage;
