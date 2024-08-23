import { Dispatch, SetStateAction } from "react";
import Cards from "@/svgs/cards.svg";

import { Select } from "@/components/index";
import { AbilityType, PokemonType } from "@/types/types";

interface HeaderProps {
  title: string;
  nameQuery: string;
  nameSet: Dispatch<SetStateAction<string>>;
  abilitySelected: string;
  setAbility: Dispatch<SetStateAction<string>>;
  typeSelected: string;
  typeSet: Dispatch<SetStateAction<string>>;
}

const Header = ({
  title,
  nameQuery,
  nameSet,
  abilitySelected,
  setAbility,
  typeSelected,
  typeSet,
}: HeaderProps) => {
  const types = Object.values(PokemonType);
  return (
    <div className="flex flex-row items-center justify-between mt-10 w-full">
      <div className="flex flex-row items-center gap-4">
        <Cards />
        <h1 className="text-6xl">{title}</h1>
      </div>
      <div className="flex gap-4 text-gray-950">
        <input
          type="text"
          placeholder="Search by name..."
          value={nameQuery}
          onChange={(e) => nameSet(e.target.value)}
          className="rounded-lg p-2"
        />
        <Select
          placeholder="Select ability..."
          options={Object.values(AbilityType).map((x) => {
            return {
              label: x,
              value: x,
            };
          })}
          selected={abilitySelected}
          setSelected={setAbility}
        />
        <Select
          placeholder="Select type..."
          options={types.map((x) => {
            return { label: x, value: x };
          })}
          selected={typeSelected}
          setSelected={typeSet}
        />
      </div>
    </div>
  );
};

export default Header;
