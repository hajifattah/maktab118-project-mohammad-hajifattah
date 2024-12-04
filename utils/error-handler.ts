import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";

export const errorHandler = (err: AxiosError | string) => {
  if (axios.isAxiosError(err)) {
    toast.error(err.response?.statusText);
  } else if (typeof err === "string") {
    toast.error(err as string);
  }
};
