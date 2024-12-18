"use client";
import { userDetailsSchema } from "@/apis/validations/user.validation";
import { DeliveryDate } from "@/components/finalize-purchase/deliveryDate";
import { TextareaInput } from "@/components/finalize-purchase/textareaInput";
import { UserInput } from "@/components/L&S/userInput";
import { TotalShoppingDetails } from "@/components/shopping-card/totalDetail";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";

const FinalizePurchasePage: React.FC = () => {
  const {
    control,
    getValues,
    formState: { isDirty, isValid },
  } = useForm<IUserInfoForm>({
    mode: "all",
    resolver: zodResolver(userDetailsSchema),
  });

  const submitform = () => {
    console.log(getValues());
  };
  return (
    <div className="flex flex-col lg:flex-row gap-2 pt-3">
      <div className="grid max-w-screen-md lg:w-full rounded-md mx-1 pb-4 pt-2 bg-white border lg:min-h-80 md:w-[40rem] md:mx-auto ">
        <h2 className="font-semibold border-b py-2 w-full text-center text-base md:text-xl text-black_app ">
          فرم تکمیل اطلاعات
        </h2>
        <form
          className="w-full grid grid-cols-1 sm:grid-cols-2 gap-5 justify-center py-4 px-4 row-span-4"
        >
          <Controller
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

      <TotalShoppingDetails
        activeButton={{ isDirty, isValid }}
        submitForm={submitform}
      />
    </div>
  );
};
export default FinalizePurchasePage;
