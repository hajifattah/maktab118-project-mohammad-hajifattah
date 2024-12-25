"use client";
import { editUserService } from "@/apis/services/users.service";
import { userDetailsSchema } from "@/apis/validations/user.validation";
import { DeliveryDate } from "@/components/finalize-purchase/deliveryDate";
import { TextareaInput } from "@/components/finalize-purchase/textareaInput";
import { UserInput } from "@/components/L&S/userInput";
import { TotalShoppingDetailsCSR } from "@/components/shopping-card/totalDetail";
import { useAppDispatch } from "@/redux/hooks";
import { ShoppingAction } from "@/redux/slices/shoppingSlice";
import { errorHandler } from "@/utils/error-handler";
import { getUserInfo, setUserInfo } from "@/utils/session-manager";
import { zodResolver } from "@hookform/resolvers/zod";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { useMemo } from "react";
import { Controller, useForm } from "react-hook-form";

const FinalizePurchasePage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { push } = useRouter();
  const {
    control,
    getValues,
    formState: { isDirty, isValid },
  } = useForm<IUserInfoForm>({
    mode: "all",
    resolver: zodResolver(userDetailsSchema),
  });
  const userInfo = useMemo(() => {
    return getUserInfo();
  }, []);
  const submitform = async () => {
    try {
      const data = getValues();
      dispatch(ShoppingAction.setDeliveryDate(data.dateOfDelivery));
      await editUserService({ ...data, id: userInfo!.id});
      // for front
      setUserInfo({ ...data, id: userInfo!.id ,userName:userInfo!.userName});
      push("/payment");
    } catch (error) {
      errorHandler(error as AxiosError);
    }
  };
  return (
    <div className="flex flex-col lg:flex-row gap-2 pt-3 lg:min-h-[calc(100vh-21.7rem)]">
      <div className="grid max-w-screen-md lg:max-h-[26rem] lg:w-full rounded-md mx-1 pb-4 pt-2 bg-white border lg:min-h-80 md:w-[40rem] md:mx-auto ">
        <h2 className="font-semibold border-b py-2 w-full text-center text-base md:text-xl text-black_app ">
          فرم تکمیل اطلاعات
        </h2>
        <form className="w-full grid grid-cols-1 sm:grid-cols-2 gap-5 justify-center py-4 px-4 row-span-4">
          <Controller
            defaultValue={userInfo!.firstName}
            control={control}
            name="firstName"
            render={({ field, fieldState }) => (
              <UserInput
                {...field}
                label="نام"
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
                {...field}
                label="نام خانوادگی"
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
                {...field}
                label="شماره همراه"
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
                {...field}
                label="آدرس"
                error={fieldState.error?.message}
              />
            )}
          />

          <DeliveryDate control={control} name="dateOfDelivery" />
        </form>
      </div>

      <TotalShoppingDetailsCSR
        activeButton={{ isDirty, isValid }}
        submitForm={submitform}
      />
    </div>
  );
};
export default FinalizePurchasePage;
