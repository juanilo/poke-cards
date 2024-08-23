import { useState } from "react";

import { NameType, PokemonCard } from "@/types/types";
import { BattleButton, Card, Select } from "@/components/index";
import { AttackContext } from "@/context/attackContext";

interface BattleProps {
  id: string;
  card?: PokemonCard;
  names: NameType[];
}

const Battle = ({ id, card, names }: BattleProps) => {
  const [targetId, setTargetId] = useState<string>("");

  return (
    <AttackContext>
      <div className="flex flex-row items-center gap-20 mt-10">
        <div>{card && <Card card={card} allowToSelectAttack={true} />}</div>
        <div className="text-6xl text-red-700 bg-red-200 rounded-full border-8 border-red-700 p-5 font-extrabold">
          VS
        </div>
        {names && (
          <div className="flex flex-col gap-16">
            <Select
              className="w-full py-2 px-3 border rounded shadow text-black h-16 text-2xl cursor-pointer font-semibold"
              placeholder="Select an oponent..."
              selected={targetId}
              setSelected={setTargetId}
              options={names
                .filter((x: NameType) => x.id !== card?.id)
                .map(({ name, id }) => {
                  return { label: name, value: id };
                })}
            />
            <BattleButton id={id} targetId={targetId} />
          </div>
        )}
      </div>
    </AttackContext>
  );
};
export default Battle;
