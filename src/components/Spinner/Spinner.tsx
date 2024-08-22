import { MutatingDots } from "react-loader-spinner";

const Spinner = () => {
  return (
    <div className="h-full w-full flex justify-center items-center mt-[15%]">
      <MutatingDots
        height="200"
        width="200"
        color="#4fa94d"
        secondaryColor="#4fa94d"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
      />
    </div>
  );
};

export default Spinner;
