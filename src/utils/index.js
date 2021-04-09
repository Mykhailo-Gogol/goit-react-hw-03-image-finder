import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const warning = () => {
  toast.warn("No matches found!", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export const success = () => {
  toast.success("👍 Searching is cool!", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};
