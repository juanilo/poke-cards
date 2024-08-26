import LeftArrow from "@/svgs/leftarrow.svg";
import RightArrow from "@/svgs/rightarrow.svg";
import clsx from "clsx";
import { ChangeEvent } from "react";

interface PaginatorProps {
  limit: number;
  setLimit: (limit: number) => void;
  total: number;
  current: number;
  onPageChange: (page: number) => void;
}

const Paginator = ({
  total,
  current,
  onPageChange,
  limit,
  setLimit,
}: PaginatorProps) => {
  const pageNumbers = Array.from({ length: total }, (_, i) => i + 1);

  const limitHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    onPageChange(1);
    setLimit(Number(e.target.value));
  };

  return (
    <nav>
      <div className="flex justify-center text-2xl my-4 gap-2">
        Page Size :
        <select
          value={limit}
          onChange={limitHandler}
          className="rounded cursor-pointer text-black"
        >
          <option value="4">4</option>
          <option value="10">10</option>
        </select>
      </div>
      <ul className="flex flex-row text-black justify-center mt-5 mb-10 items-center gap-3">
        {current > 1 && (
          <li className="items-center flex" key={"page" + current}>
            <button onClick={() => onPageChange(current - 1)}>
              <LeftArrow />
            </button>
          </li>
        )}
        {pageNumbers.map((num) => (
          <li
            key={"page" + num}
            onClick={() => onPageChange(num)}
            className={clsx(
              "bg-white border-4 px-2 py-1 rounded-full w-12 text-center text-3xl cursor-pointer",
              num === current ? "text-red-500 border-red-500" : "border-black"
            )}
          >
            {num}
          </li>
        ))}
        {current < total && (
          <li className="items-center flex">
            <button onClick={() => onPageChange(current + 1)}>
              <RightArrow />
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Paginator;
