import { ProgressBar } from "react-loader-spinner";

const Spinner = () => {
  return (
    <div className="h-full w-full flex justify-center items-center mt-[15%]">
      <ProgressBar visible={true} height="200" width="200" />
    </div>
  );
};

export default Spinner;
