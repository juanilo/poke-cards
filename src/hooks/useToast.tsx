import toast from "react-simple-toasts";

const useToast = () => {
  return {
    infoToast: (message: string) => toast(message, { theme: "info" }),
    successToast: (message: string) => toast(message, { theme: "success" }),
    errorToast: (message: string) => toast(message, { theme: "failure" }),
    warningToast: (message: string) => toast(message, { theme: "warning" }),
  };
};

export default useToast;
