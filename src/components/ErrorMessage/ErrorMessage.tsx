import SkullIcon from "@/svgs/skull.svg";

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return (
    <div className="h-full w-full flex justify-center items-center mt-[15%] flex-col pb-[25%]">
      <SkullIcon />
      <p className="text-4xl mb-5">{message}</p>
    </div>
  );
};

export default ErrorMessage;
