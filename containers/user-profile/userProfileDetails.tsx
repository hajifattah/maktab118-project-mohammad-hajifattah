"use client";
import { SubmitButton } from "@/components/submitButton";
import { getUserInfo } from "@/utils/session-manager";
import { useMemo, useState } from "react";
import { UserProfileInputs } from "./userProfileInputs";

export const UserProfileDetails: React.FC = () => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const userInfo = useMemo(() => {
    return getUserInfo();
  }, [isEdit]);
  return (
    <div className="grid max-w-screen-md lg:max-h-[26rem] lg:w-full rounded-md mx-1 pb-4 pt-2 bg-white border md:w-[40rem] md:mx-auto mt-6 ">
      <h2 className="font-semibold border-b max-h-[4rem] py-2 w-full text-center text-base md:text-xl text-black_app ">
        اطلاعات شخصی
      </h2>
      <div
        className={`w-full grid-cols-1 text-center sm:text-start ${
          isEdit ? "hidden" : "grid"
        } sm:grid-cols-2 gap-5 justify-center py-4 px-4 row-span-4 `}
      >
        <div>
          <h2 className="text-black/60 font-semibold text-sm md:text-base inline-block min-w-36">
            نام:
          </h2>
          <h2>{userInfo?.firstName}</h2>
        </div>
        <div>
          <h2 className="text-black/60 font-semibold text-sm md:text-base inline-block min-w-36">
            نام خانوادگی:
          </h2>
          <h2>{userInfo?.lastName}</h2>
        </div>
        <div>
          <h2 className="text-black/60 font-semibold text-sm md:text-base inline-block min-w-36">
            نام کاربری:
          </h2>
          <h2>{userInfo?.userName}</h2>
        </div>
        <div>
          <h2 className="text-black/60 font-semibold text-sm md:text-base inline-block min-w-36">
            کلمه عبور:
          </h2>
          <h2>********</h2>
        </div>
        <div>
          <h2 className="text-black/60 font-semibold text-sm md:text-base inline-block min-w-36">
            شماره همراه:
          </h2>
          <h2>{userInfo?.phone}</h2>
        </div>
        <div>
          <h2 className="text-black/60 font-semibold text-sm md:text-base inline-block min-w-36">
            آدرس:
          </h2>
          <h2>{userInfo?.address}</h2>
        </div>
        <div className="sm:col-span-2 px-10">
          <SubmitButton
            onClick={() => setIsEdit((prev) => !prev)}
            text="ویرایش اطلاعات"
            bgColor="bg-green_app"
          ></SubmitButton>
        </div>
      </div>
        <div className={`${isEdit ? "block" : "hidden"}`}>
         <UserProfileInputs
            userInfo={userInfo!}
            detailMod={() => setIsEdit((prev) => !prev)}
          />
        </div>
    </div>
  );
};
