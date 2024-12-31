"use client";
import { loginService } from "@/apis/services/auth.service";
import { LoginFormSchema } from "@/apis/validations/auth.validation";
import { UserInput } from "@/components/L&S/userInput";
import { SubmitButton } from "@/components/submitButton";
import { errorHandler } from "@/utils/error-handler";
import { integrateShoppingStateWithDb } from "@/utils/integrateStateDb";
import { setRefToken, setToken, setUserInfo } from "@/utils/session-manager";
import { zodResolver } from "@hookform/resolvers/zod";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";

export const LoginForm: React.FC<{
  showHandle?: () => void;
  isUser?: boolean;
  isPurchase?: boolean;
}> = ({ showHandle, isUser, isPurchase }) => {
  const { control, handleSubmit } = useForm<ILoginReqDto>({
    mode: "all",
    resolver: zodResolver(LoginFormSchema),
  });
  const { push } = useRouter();
  const submitForm = async (values: ILoginReqDto) => {
    try {
      const response = await loginService(values);
      const isAdmin = response.data.user.role === "ADMIN";
      let token = response.token.accessToken;
      const userData = response.data.user;
      if (isAdmin === true) {
        const newToken = response.token.accessToken.split("");
        newToken.splice(20, 0, "i", "a", "d");
        token = newToken.join("");
      }
      //when user login from managment
      if (!isAdmin && !showHandle && !isUser) {
        toast.error("شماادمین نیستید لطفا از صفحه اصلی اقدام کنید");
        return push("/");
      }
      //login from nav for user or admin
      setToken(token);
      setUserInfo({
        id: userData._id,
        userName: userData.username,
        firstName: userData.firstname,
        lastName: userData.lastname,
        address: userData.address,
        phone: userData.phoneNumber,
      });
      setRefToken(response.token.refreshToken);
      integrateShoppingStateWithDb({userId:userData._id})
      toast.success("ورود موفقیت آمیز بود");
      if (isAdmin && isPurchase) {
        push("/shopping-card/finalize-purchase");
      } else if (isAdmin && isUser) {
        push("/");
      } else if (isAdmin && !showHandle) {
        push("/orders");
      } else if (showHandle) {
        showHandle();
        push("/");
      } else if (isPurchase) {
        push("/shopping-card/finalize-purchase");
      } else push("/");
    } catch (error) {
      errorHandler(error as AxiosError);
    }
  };
  return (
    <form
      onSubmit={handleSubmit(submitForm)}
      className="flex flex-col gap-y-2 "
    >
      <Controller
        control={control}
        name="username"
        render={({ field, fieldState }) => (
          <UserInput
            label="نام کاربری"
            {...field}
            error={fieldState.error?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="password"
        render={({ field, fieldState }) => (
          <UserInput
            type="password"
            label="کلمه عبور"
            {...field}
            error={fieldState.error?.message}
          />
        )}
      />
      <SubmitButton text="ورود" bgColor="bg-green_app" />
    </form>
  );
};
