import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";

export const errorHandler = (err: AxiosError | string) => {
  if (axios.isAxiosError(err)) {
    const message = err.response?.statusText=== "Unauthorized" ? "نام کاربری یا کلمه عبور اشتباه است" : err.response?.statusText
    toast.error(message);
  } else if (typeof err === "string") {
    toast.error(err as string);
  }
};
