import SkullIcon from "@/svgs/skull.svg";

interface ErrorMessageProps {
  message: string;
  retry?: () => void;
}

const ErrorMessage = ({ message, retry }: ErrorMessageProps) => {
  return (
    <div className="h-full w-full flex justify-center items-center mt-[15%] flex-col">
      <SkullIcon />
      <p className="text-4xl mb-5">{message}</p>
      {retry ? (
        <button
          onClick={retry}
          className="mt-4 border-2 border-white rounded-xl p-4"
        >
          Try Again
        </button>
      ) : null}
    </div>
  );
};

export default ErrorMessage;
