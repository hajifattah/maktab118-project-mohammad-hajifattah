"use client";
import { loginService } from "@/apis/services/auth.service";
import { LoginFormSchema } from "@/apis/validations/auth";
import { UserInput } from "@/components/L&S/userInput";
import { SubmitButton } from "@/components/submitButton";
import { errorHandler } from "@/utils/error-handler";
import { setToken } from "@/utils/session-manager";
import { zodResolver } from "@hookform/resolvers/zod";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";

export const LoginForm: React.FC<{ showHandle?: () => void }> = ({
  showHandle,
}) => {
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
      if (isAdmin === true) {
        const newToken = response.token.accessToken.split("");
        console.log(newToken)
        newToken.splice(20, 0,"i","a","d");
        token = newToken.join("")
      }
      console.log(token)
      //when user login from managment
      if (!isAdmin && !showHandle) {
        toast.error("شماادمین نیستید لطفا از صفحه اصلی اقدام کنید");
        return push("/");
      }
      //login from nav for user or admin
      setToken(token);
      toast.success("ورود موفقیت آمیز بود");
      if (isAdmin) {
        push("/orders");
      } else {
        showHandle!();
        push("/");
      }
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
