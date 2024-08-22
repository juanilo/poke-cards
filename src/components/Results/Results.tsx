import { ResultType } from "@/types/types";
import clsx from "clsx";

interface ResultsProps {
  results: ResultType;
}

const Results = ({ results }: ResultsProps) => {
  return (
    <div className="flex flex-col items-center gap-4 mt-10 pt-14">
      <h2 className="text-4xl">Result of the battle:</h2>
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
        <p className="text-center">
          {results.succeed ? (
            <strong className="text-green-600">SUCCEED!</strong>
          ) : (
            <strong className="text-red-600">FAILED</strong>
          )}
        </p>
      </div>
    </div>
  );
};

export default Results;
