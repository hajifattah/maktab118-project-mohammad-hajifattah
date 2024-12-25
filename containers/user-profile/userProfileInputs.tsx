"use client";

import { editUserService } from "@/apis/services/users.service";
import { userProfileSchema } from "@/apis/validations/user.validation";
import { TextareaInput } from "@/components/finalize-purchase/textareaInput";
import { UserInput } from "@/components/L&S/userInput";
import { SubmitButton } from "@/components/submitButton";
import { errorHandler } from "@/utils/error-handler";
import { setUserInfo } from "@/utils/session-manager";
import { zodResolver } from "@hookform/resolvers/zod";
import { AxiosError } from "axios";
import { Controller, useForm } from "react-hook-form";

export const UserProfileInputs: React.FC<{userInfo: IUserResINfo,detailMod:()=>void}> = ({userInfo,detailMod}) => {
  const {
    control,
    handleSubmit,
    formState: { isDirty, isValid },
  } = useForm<IUserInfoForm>({
    mode: "all",
    resolver: zodResolver(userProfileSchema),
  });
 
  const submitform = async (values: IUserInfoForm) => {
      try {
      await editUserService({ ...values, id: userInfo!.id});
      // for front
      setUserInfo({ ...values, id: userInfo!.id});
      detailMod();
    } catch (error) {
      errorHandler(error as AxiosError);
    }
  };

  return (

        <form
          onSubmit={handleSubmit(submitform)}
          className="w-full grid grid-cols-1 sm:grid-cols-2 gap-5 justify-center py-4 px-4 row-span-4"
        >
          <Controller
            defaultValue={userInfo!.firstName}
            control={control}
            name="firstName"
            render={({ field, fieldState }) => (
              <UserInput
                label="نام"
                {...field}
                error={fieldState.error?.message}
              />
            )}
          />
          <Controller
            defaultValue={userInfo!.lastName}
            control={control}
            name="lastName"
            render={({ field, fieldState }) => (
              <UserInput
                label="نام خانوادگی"
                {...field}
                error={fieldState.error?.message}
              />
            )}
          />
          <Controller
            defaultValue={userInfo!.userName}
            control={control}
            name="userName"
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
            defaultValue={userInfo!.phone}
            control={control}
            name="phone"
            render={({ field, fieldState }) => (
              <UserInput
                label="شماره همراه"
                {...field}
                error={fieldState.error?.message}
              />
            )}
          />
          <Controller
            defaultValue={userInfo!.address}
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
         <div className="sm:col-span-2"> <SubmitButton text="ثبت اطلاعات" bgColor="bg-green_app" /></div>
        </form>
  );
};
