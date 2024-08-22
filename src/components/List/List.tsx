import { PokemonCard } from "@/types/types";
import { Card } from "@/components/index";
import Link from "next/link";

interface ListProps {
  items: PokemonCard[];
}
const List = ({ items }: ListProps) => {
  return (
    <div className="grid grid-cols-4 gap-4 py-9">
      {items &&
        items.map((item: PokemonCard) => (
          <div key={item.id}>
            <Link href={`/battle/${item.id}`}>
              <Card card={item} />
            </Link>
          </div>
        ))}
    </div>
  );
};

export default List;
