"use client";

import { useEffect, useState } from "react";

import { ResultType } from "@/types/types";
import { attack } from "@/services/cards";
import { Results, ErrorMessage, Spinner } from "@/components/";

const ResultsPage = ({ params }: { params: { slug: string[] } }) => {
  const [id, attackId, targetId] = params.slug;
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [results, setResults] = useState<ResultType>({
    card: "",
    attackTo: "",
    originalAttack: 0,
    attackModified: 0,
    succeed: false,
  });

  const executeBattle = async (
    id: string,
    attackId: string,
    targetId: string
  ) => {
    try {
      setResults(await attack(id, attackId, targetId));
    } catch (e) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const retry = () => {
    setIsLoading(true);
    setError(false);
    executeBattle(id, attackId, targetId);
  };

  useEffect(() => {
    executeBattle(id, attackId, targetId);
  }, [id, attackId, targetId]);

  return (
    <>
      {isLoading && !error ? (
        <Spinner />
      ) : (
        results && <Results results={results} />
      )}
      {error ? (
        <ErrorMessage message="Error executing the battle." retry={retry} />
      ) : null}
    </>
  );
};

export default ResultsPage;
