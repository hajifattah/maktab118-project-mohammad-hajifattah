"use client";
import { signupService } from "@/apis/services/auth.service";
import { SignupFormSchema } from "@/apis/validations/auth.validation";
import { TextareaInput } from "@/components/finalize-purchase/textareaInput";
import { UserInput } from "@/components/L&S/userInput";
import { SubmitButton } from "@/components/submitButton";
import { errorHandler } from "@/utils/error-handler";
import { setRefToken, setToken, setUserInfo } from "@/utils/session-manager";
import { zodResolver } from "@hookform/resolvers/zod";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";

export const SignupForm: React.FC = () => {
  const { control, handleSubmit } = useForm<ISignupReqDto>({
    mode: "all",
    resolver: zodResolver(SignupFormSchema),
  });
  const { push } = useRouter();
  const submitForm = async (values: ISignupReqDto) => {
    try {
      const response = await signupService(values);
      const token = response.token.accessToken;
      const userData = response.data.user;
      setToken(token);
      setUserInfo({
        id: userData._id,
        firstName: userData.firstname,
        lastName: userData.lastname,
        address: userData.address,
        phone: userData.phoneNumber,
      });
      setRefToken(response.token.refreshToken);
      toast.success("ثبت نام با موفقیت انجام شد");
      push("/");
    } catch (error) {
      errorHandler(error as AxiosError);
    }
  };
  return (
    <form
      onSubmit={handleSubmit((values) => submitForm(values))}
      className="flex flex-col gap-y-2 "
    >
      <Controller
        control={control}
        name="firstname"
        render={({ field, fieldState }) => (
          <UserInput label="نام" {...field} error={fieldState.error?.message} />
        )}
      />
      <Controller
        control={control}
        name="lastname"
        render={({ field, fieldState }) => (
          <UserInput
            label="نام خانوادگی"
            {...field}
            error={fieldState.error?.message}
          />
        )}
      />
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
      <Controller
        control={control}
        name="phoneNumber"
        render={({ field, fieldState }) => (
          <UserInput
            label="شماره همراه"
            {...field}
            error={fieldState.error?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="address"
        render={({ field, fieldState }) => (
          <TextareaInput
            label="آدرس"
            {...field}
            error={fieldState.error?.message}
          />
        )}
      />
      <SubmitButton text="ثبت نام" bgColor="bg-green_app" />
    </form>
  );
};
