import { ProgressBar } from "react-loader-spinner";

const Spinner = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <ProgressBar visible={true} height="200" width="200" />
    </div>
  );
};

export default Spinner;
