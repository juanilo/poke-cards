import { ResultType } from "@/types/types";
import clsx from "clsx";

interface ResultsProps {
  results: ResultType;
  onApply: () => void;
}

const Results = ({ results, onApply }: ResultsProps) => {
  return (
    <div className="flex flex-col items-center gap-4 mt-10 pt-14">
      <div
        className={clsx(
          "text-4xl text-black rounded-2xl p-12 m-6",
          results.succeed ? "bg-green-200" : "bg-red-200"
        )}
      >
        <div className="gap-6">
          <p>
            <strong>Card : </strong> <span>{results.card}</span>
          </p>
          <p>
            <strong>Attack to : </strong> <span>{results.attackTo}</span>
          </p>
          <p>
            <strong>Original Attack : </strong>
            <span>{results.originalAttack}</span>
          </p>
          <p>
            <strong>Attacked Modified : </strong>
            <span>{results.attackModified}</span>
          </p>
        </div>
        <p className="text-center my-5">
          {results.succeed ? (
            <strong className="text-green-600">SUCCEED!</strong>
          ) : (
            <strong className="text-red-600">FAILED</strong>
          )}
        </p>
        <button
          onClick={() => onApply()}
          className="bg-blue-800 hover:bg-blue-300 border-4 border-blue-300 text-white font-bold py-2 px-4 rounded-xl mt-3"
        >
          Apply results to target Card
        </button>
      </div>
    </div>
  );
};

export default Results;
