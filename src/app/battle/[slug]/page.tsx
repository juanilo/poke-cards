"use client";

import { useEffect, useState } from "react";

import { NameType, PokemonCard } from "@/types/types";
import { getById, getNames } from "@/services/cards";
import { Spinner, Battle, ErrorMessage } from "@/components/index";

const BattlePage = ({ params }: { params: { slug: string } }) => {
  const [error, setError] = useState(false);
  const [isLoadingCard, setIsLoadingCard] = useState(true);
  const [isLoadingNames, setIsLoadingNames] = useState(true);

  const [card, setCard] = useState<PokemonCard | null>(null);

  const [allNames, setAllNames] = useState<NameType[]>([]);

  const fetchNames = async () => {
    try {
      setAllNames(await getNames());
    } catch (error) {
      setError(true);
    } finally {
      setIsLoadingNames(false);
    }
  };

  const fetchCard = async (id: string) => {
    try {
      setCard(await getById(id));
    } catch (error) {
      setError(true);
    } finally {
      setIsLoadingCard(false);
    }
  };

  useEffect(() => {
    fetchCard(params.slug);
  }, [params.slug]);

  useEffect(() => {
    fetchNames();
  }, []);

  return (
    <>
      {isLoadingCard || isLoadingNames ? (
        <Spinner />
      ) : (
        !error && <Battle id={params.slug} card={card!} names={allNames} />
      )}
      {error && <ErrorMessage message="Error preparing the battle!" />}
    </>
  );
};

export default BattlePage;
