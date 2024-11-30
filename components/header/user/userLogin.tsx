"use client";
import { SubmitButton } from "@/components/submitButton";
import { Input } from "../input";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginService } from "@/apis/services/auth.service";
import { errorHandler } from "@/utils/error-handler";
import { AxiosError } from "axios";
import { LoginFormSchema } from "@/apis/validations/auth";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export const UserLogin: React.FC<{showHandle :()=>void}> = ({showHandle}) => {
  const { control, handleSubmit } = useForm<ILoginReqDto>({
    mode: "all",
    resolver: zodResolver(LoginFormSchema),
  });
   const {push} = useRouter();
  const submitForm = async (values: ILoginReqDto) => {
    try {
      const response = await loginService(values);
      toast.success("logged in")
      response.data.user.role === "ADMIN" ? push("/orders") : showHandle()
    } catch (error) {
      errorHandler(error as AxiosError);
    }
  };
  return (
    <>
      <h2 className="font-semibold text-black/80 text-center text-lg">
        ورود به حساب کاربری
      </h2>
      <form
        onSubmit={handleSubmit(submitForm)}
        className="flex flex-col gap-y-2 "
      >
        <Controller
          control={control}
          name="username"
          render={({ field, fieldState }) => (
            <Input
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
            <Input
              type="password"
              label="کلمه عبور"
              {...field}
              error={fieldState.error?.message}
            />
          )}
        />
        <SubmitButton text="ورود" bgColor="bg-green_app" />
      </form>

      <div className="relative flex py-2 items-center">
        <div className="flex-grow border-t border-gray-400"></div>
        <span className="flex-shrink text-xs text-center mx-2 text-gray-400">
          حساب کاربری ندارید ؟
        </span>
        <div className="flex-grow border-t border-gray-400"></div>
      </div>
      <button className="text-green_app border border-green_app px-3 py-2 w-full rounded-md">
        ثبت نام
      </button>
    </>
  );
};
