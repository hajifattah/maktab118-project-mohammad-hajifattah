import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";

export const errorHandler = (err: AxiosError | string | Error) => {
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
        : message.includes("ValidationError")
        ? "مقادیر صحیح نمی باشند"
        : message.includes("username is already taken")
        ? "نام کاربری دیگری انتخاب کنید"
        : message.includes("phoneNumber is already exists")
        ? "شماره تلفن دیگری وارد کنید"
        : (err.response?.statusText as string);
    toast.error(message as string);
  } else if (err instanceof Error) {
    toast.error(err.message);
  } else if (typeof err === "string") {
    toast.error(err as string);
  }
};
