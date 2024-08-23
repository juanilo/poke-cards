import { useGetCards } from "@/hooks/useCards";
import {
  Header,
  List,
  Spinner,
  ErrorMessage,
  Paginator,
} from "@/components/index";
import { useState } from "react";

const Game = () => {
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
    <>
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
    </>
  );
};

export default Game;
