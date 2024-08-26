import SkullIcon from "@/svgs/skull.svg";

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return (
    <div className="absolute inset-0 flex items-center justify-center text-white">
      <SkullIcon />
      <p className="text-4xl mb-5">{message}</p>
    </div>
  );
};

export default ErrorMessage;
