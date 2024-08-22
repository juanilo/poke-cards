import { RarityType } from "@/types/types";
import CircleIcon from "@/svgs/circle.svg";
import StarIcon from "@/svgs/star.svg";
import Diamond from "@/svgs/diamond.svg";

interface RarityTypeProps {
  rarity: RarityType;
}

const RarityBadge = ({ rarity }: RarityTypeProps) => {
  switch (rarity) {
    case RarityType.Uncommon:
      return <Diamond alt={RarityType.Uncommon} />;
    case RarityType.Rare:
      return <StarIcon alt={RarityType.Rare} />;
    default:
      return <CircleIcon alt={RarityType.Common} />;
  }
};

export default RarityBadge;
