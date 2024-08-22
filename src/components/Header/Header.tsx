import { Dispatch, SetStateAction } from "react";
import Cards from "@/svgs/cards.svg";

import { PokemonType } from "@/types/types";

interface HeaderProps {
  title: string;
  nameQuery: string;
  nameSet: Dispatch<SetStateAction<string>>;
  attackQuery: string;
  attackSet: Dispatch<SetStateAction<string>>;
  typeSelected: string;
  typeSet: Dispatch<SetStateAction<string>>;
}

const Header = ({
  title,
  nameQuery,
  nameSet,
  attackQuery,
  attackSet,
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
        <input
          type="text"
          placeholder="Search by attack..."
          value={attackQuery}
          onChange={(e) => attackSet(e.target.value)}
          className="rounded-lg p-2"
        />
        <select
          name="type"
          value={typeSelected}
          onChange={(e) => typeSet(e.target.value)}
          className="cursor-pointer p-2 rounded-lg"
        >
          <option value="" key="select">
            Select Type...
          </option>
          {types.map((type) => (
            <option value={type} key={type}>
              {type}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Header;
