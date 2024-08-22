import clsx from "clsx";

import { Ability, PokemonCard, AttackType } from "@/types/types";
import { RarityBadge, AbilityyBadge } from "@/components/index";
import { useSetAttackState, useAttackState } from "@/context/attackContext";
import SelectedIcon from "@/svgs/lefthand.svg";

interface CardProps {
  card: PokemonCard;
  allowToSelectAttack?: boolean;
}

const Card = ({ card, allowToSelectAttack }: CardProps) => {
  const setAttack = useSetAttackState();
  const attackId = useAttackState();

  return (
    <div className="max-w-96 m-2 p-6 bg-neutral-600 max-h-max rounded-xl min-h-[48rem]">
      <div className="flex flex-row justify-between items-center">
        <div className="text-black text-3xl font-bold">{card.name}</div>
        <div className="bg-red-600 rounded-full p-2 border-white border-2 shadow-md cursor-default">
          HP {card.hp}{" "}
        </div>
      </div>
      <div className="p-3">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={card.image_url}
          alt={card.name}
          className="w-60 h-60 bg-white object-cover rounded-xl"
        />
      </div>
      <div className="flex flex-col justify-between p-3">
        <div>Type : {card.type}</div>
        <div className="pt-6">
          <span>Attacks:</span>
          {allowToSelectAttack && attackId === "" && (
            <div className="text-red-600 font-bold comic-baloon">
              Please select an attack to proceed to the Battle!
            </div>
          )}
          <ul className="p-3 gap-4 bg-neutral-800 rounded-xl mt-1">
            {card.attacks &&
              card.attacks.map((attack: AttackType) => (
                <li
                  key={attack.name}
                  className={clsx(
                    "mb-1 ",
                    allowToSelectAttack ? "cursor-pointer" : ""
                  )}
                  onClick={() => setAttack(attack.id)}
                >
                  <div className="flex flex-row justify-between gap-2 py-2">
                    <div className="flex flex-row items-center h-6 gap-2">
                      {attack.name}{" "}
                      {attackId === attack.id ? <SelectedIcon /> : ""}
                    </div>
                    <div>{attack.damage}</div>
                  </div>
                  <ul
                    className={clsx(
                      "p-2 gap-1 bg-neutral-700 rounded-xl",
                      attackId === attack.id ? "bg-red-700" : ""
                    )}
                  >
                    {attack.abilities.map((ability: Ability) => (
                      <li
                        key={attack.name + ability.type}
                        className="items-center flex flex-row gap-2 pb-2"
                      >
                        <AbilityyBadge
                          ability={ability.type}
                          value={ability.value}
                        />
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
          </ul>
        </div>
        <div className="pt-4 flex max-h-2">
          <div className="w-64 bg-red-100 relative group flex justify-end">
            <RarityBadge rarity={card.rarity} />
            <div className="opacity-0 group-hover:opacity-100 duration-300 absolute inset-x-28 -bottom-8 flex justify-center bg-orange-300 text-black w-28 h-8 rounded-full items-center">
              {card.rarity}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
