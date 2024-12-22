"use client"
import { SignupFormSchema } from "@/apis/validations/auth.validation"
import { TextareaInput } from "@/components/finalize-purchase/textareaInput"
import { UserInput } from "@/components/L&S/userInput"
import { SubmitButton } from "@/components/submitButton"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"

export const SignupForm : React.FC = ()=>{
      const { control, handleSubmit } = useForm<ISignupReqDto>({
        mode: "all",
        resolver: zodResolver(SignupFormSchema),
      });
    return <form
    className="flex flex-col gap-y-2 "
  >
    <Controller
      control={control}
      name="firstname"
      render={({ field, fieldState }) => (
        <UserInput
          label="نام"
          {...field}
          error={fieldState.error?.message}
        />
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
}