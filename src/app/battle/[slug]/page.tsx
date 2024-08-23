"use client";

import { useGetCardById, useGetNames } from "@/hooks/useCards";
import { Spinner, Battle, ErrorMessage } from "@/components/index";

const BattlePage = ({ params }: { params: { slug: string } }) => {
  const {
    data: card,
    error: errorGettingCard,
    isLoading: isLoadingCard,
  } = useGetCardById(params.slug);
  const {
    data: names,
    error: errorGettingNames,
    isLoading: isLoadingNames,
  } = useGetNames();

  const error = !!(errorGettingCard || errorGettingNames);
  return (
    <>
      {isLoadingCard || isLoadingNames ? (
        <Spinner />
      ) : (
        !error && <Battle id={params.slug} card={card!} names={names} />
      )}
      {error && <ErrorMessage message="Error preparing the battle!" />}
    </>
  );
};

export default BattlePage;
