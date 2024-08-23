"use client";

import { useGetCardById, useGetNames } from "@/hooks/useCards";
import { Spinner, Battle, ErrorMessage, TopBar } from "@/components/index";
import { useUser } from "@auth0/nextjs-auth0/client";
import { redirect } from "next/navigation";
import CardsIcon from "@/svgs/cards.svg";

const BattlePage = ({ params }: { params: { slug: string } }) => {
  const { user, isLoading: isLoadingUser, error: errorUser } = useUser();
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

  if (!user) {
    redirect("/");
  }

  const error = !!(errorGettingCard || errorGettingNames);
  return (
    <>
      <TopBar user={user} isLoading={isLoadingUser} />
      <div className="flex flex-row items-center gap-4">
        <CardsIcon />
        <h1 className="text-6xl">Poke-Cards : Prepare the Battle</h1>
      </div>
      {isLoadingCard || isLoadingNames || isLoadingUser ? (
        <Spinner />
      ) : (
        !error && <Battle id={params.slug} card={card!} names={names} />
      )}
      {(error || errorUser) && (
        <ErrorMessage message="Error preparing the battle!" />
      )}
    </>
  );
};

export default BattlePage;
