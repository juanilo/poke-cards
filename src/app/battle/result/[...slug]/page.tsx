"use client";

import { useAttack, useGetCardById, updateCard } from "@/hooks/useCards";
import { Results, ErrorMessage, Spinner, TopBar } from "@/components/";
import useToast from "@/hooks/useToast";
import { useUser } from "@auth0/nextjs-auth0/client";
import { redirect } from "next/navigation";
import CardsIcon from "@/svgs/cards.svg";

const ResultsPage = ({ params }: { params: { slug: string[] } }) => {
  const { user, isLoading: isLoadingUser, error: errorUser } = useUser();
  const { successToast, errorToast } = useToast();
  const [id, attackId, targetId] = params.slug;
  const { data: results, error, isLoading } = useAttack(id, attackId, targetId);
  const { data: card } = useGetCardById(targetId);

  if (!user) {
    redirect("/");
  }

  const useApplyResults = async () => {
    try {
      const newHP = card.hp - results!.attackModified;
      await updateCard(targetId, {
        hp: newHP > 0 ? newHP : 0,
      });
      successToast("Card succefully updated!");
    } catch {
      errorToast("Error updating card!");
    }
  };

  return (
    <>
      <TopBar user={user} isLoading={isLoadingUser} />
      <div className="flex flex-row items-center gap-4">
        <CardsIcon />
        <h1 className="text-6xl">Poke-Cards : Battle Results</h1>
      </div>
      {(isLoading || isLoadingUser) && !error ? (
        <Spinner />
      ) : (
        results && <Results results={results} onApply={useApplyResults} />
      )}
      {error || errorUser ? (
        <ErrorMessage message="Error executing the battle." />
      ) : null}
    </>
  );
};

export default ResultsPage;
