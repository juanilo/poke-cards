import Link from "next/link";

import { useAttackState } from "@/context/attackContext";

interface BattleButtonProps {
  id?: string;
  targetId?: string;
}

const BattleButton = ({ id, targetId }: BattleButtonProps) => {
  const attackId = useAttackState();
  return (
    <Link href={`/battle/result/${id}/${attackId}/${targetId}`}>
      <button
        disabled={targetId === "" || attackId === ""}
        className="w-full py-2 px-3 border rounded-full shadow text-black bg-red-700 h-16 text-4xl cursor-pointer font-bold disabled:bg-gray-500 disabled:cursor-not-allowed"
      >
        Battle!
      </button>
    </Link>
  );
};

export default BattleButton;
