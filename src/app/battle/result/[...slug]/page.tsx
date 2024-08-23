"use client";

import { useAttack, useGetCardById, updateCard } from "@/hooks/useCards";
import { Results, ErrorMessage, Spinner } from "@/components/";
import useToast from "@/hooks/useToast";

const ResultsPage = ({ params }: { params: { slug: string[] } }) => {
  const { successToast, errorToast } = useToast();
  const [id, attackId, targetId] = params.slug;
  const { data: results, error, isLoading } = useAttack(id, attackId, targetId);
  const { data: card } = useGetCardById(targetId);

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
      {isLoading && !error ? (
        <Spinner />
      ) : (
        results && <Results results={results} onApply={useApplyResults} />
      )}
      {error ? <ErrorMessage message="Error executing the battle." /> : null}
    </>
  );
};

export default ResultsPage;
