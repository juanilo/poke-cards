"use client";

import { useState } from "react";

import { useGetCards } from "@/hooks/useCards";
import {
  Header,
  List,
  Spinner,
  ErrorMessage,
  Paginator,
} from "@/components/index";

const PokeCardsHomePage = () => {
  const [nameQuery, nameQuerySet] = useState("");
  const [abilitySelected, setAbility] = useState("");
  const [typeSelected, setTypeSelected] = useState("");

  const [limit, setLimit] = useState(4);
  const [page, setPage] = useState(1);

  const { data, error, isLoading } = useGetCards(
    limit,
    page,
    nameQuery,
    abilitySelected,
    typeSelected
  );

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
            <List items={data.cards} />
            <Paginator
              limit={limit}
              setLimit={setLimit}
              total={Math.ceil(parseInt(data.totalCards) / limit)}
              current={page}
              onPageChange={(page) => setPage(page)}
            />
          </div>
        )
      )}
      {!isLoading && error ? (
        <ErrorMessage message="Error fetching cards." />
      ) : null}
    </main>
  );
};

export default PokeCardsHomePage;
