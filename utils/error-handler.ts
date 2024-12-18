import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";

export const errorHandler = (err: AxiosError | string) => {
  if (axios.isAxiosError(err)) {
    let message = err.response?.data as string;
    message =
      message.includes("You are not logged in!") ||
      message.includes("invalid token") ||
      message.includes("TokenExpiredError") ||
      message.includes("jwt malformed")
        ? "لطفا مجددا وارد شوید"
        : message.includes("incorrect username or password")
        ? "نام کاربری یا کلمه عبور صحیح نیست"
        : message.includes("product name is already exists")
        ? "محصولی با این نام موجود می باشد"
        : (err.response?.statusText as string);
    toast.error(message as string);
  } else if (typeof err === "string") {
    toast.error(err as string);
  }
};
