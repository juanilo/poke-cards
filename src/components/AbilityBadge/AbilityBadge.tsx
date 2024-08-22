import React from "react";

import { AbilityType } from "@/types/types";
import Water from "@/svgs/water.svg";
import Fire from "@/svgs/fire.svg";
import Grass from "@/svgs/grass.svg";
import Electric from "@/svgs/electric.svg";
import Ice from "@/svgs/ice.svg";
import Poison from "@/svgs/poison.svg";
import Ground from "@/svgs/ground.svg";
import Flying from "@/svgs/flying.svg";
import Psychic from "@/svgs/psychic.svg";
import Bug from "@/svgs/bug.svg";
import Rock from "@/svgs/rock.svg";
import Steel from "@/svgs/steel.svg";
import Dragon from "@/svgs/dragon.svg";
import Dark from "@/svgs/dark.svg";
import Fairy from "@/svgs/fairy.svg";

interface AbilityTypeProps {
  ability: AbilityType;
  value: number;
}

const Badge = (ability: AbilityType, index: number) => {
  switch (ability) {
    case AbilityType.Water:
      return <Water alt={ability} key={ability + index} />;
    case AbilityType.Fire:
      return <Fire alt={ability} key={ability + index} />;
    case AbilityType.Grass:
      return <Grass alt={ability} key={ability + index} />;
    case AbilityType.Electric:
      return <Electric alt={ability} key={ability + index} />;
    case AbilityType.Ice:
      return <Ice alt={ability} key={ability + index} />;
    case AbilityType.Poison:
      return <Poison alt={ability} key={ability + index} />;
    case AbilityType.Ground:
      return <Ground alt={ability} key={ability + index} />;
    case AbilityType.Flying:
      return <Flying alt={ability} key={ability + index} />;
    case AbilityType.Psychic:
      return <Psychic alt={ability} key={ability + index} />;
    case AbilityType.Bug:
      return <Bug alt={ability} key={ability + index} />;
    case AbilityType.Rock:
      return <Rock alt={ability} key={ability + index} />;
    case AbilityType.Steel:
      return <Steel alt={ability} key={ability + index} />;
    case AbilityType.Dragon:
      return <Dragon alt={ability} key={ability + index} />;
    case AbilityType.Dark:
      return <Dark alt={ability} key={ability + index} />;
    default:
      return <Fairy alt={ability} key={ability + index} />;
  }
};

const AbilityyBadge = ({ ability, value }: AbilityTypeProps) => {
  const badges = Array(value).fill(ability);
  return badges.map((ability, i) => Badge(ability, i));
};

export default AbilityyBadge;
