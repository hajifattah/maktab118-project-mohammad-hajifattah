"use client";

import { useMemo, useState } from "react";
import { PiUserLight } from "react-icons/pi";
import { UserLogin } from "./userLogin";
import { SubmitButton } from "@/components/submitButton";
import { deleteRefToken, deleteToken, deleteUserInfo, getUserInfo } from "@/utils/session-manager";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import Link from "next/link";

export const UserDetailsCSR = dynamic(() => Promise.resolve(UserDetails), {
  ssr: false,
})
  const UserDetails: React.FC = () => {
  const [show, setShow] = useState<boolean>(false);
  const {push} = useRouter();
  const deleteTokenHandler = () => {
    toast.success("خروج موفقیت آمیز بود")
    deleteToken();
    deleteRefToken();
    deleteUserInfo();
    showHandle();
    push("/")
  };
  const userInfo = useMemo(()=>{return getUserInfo()},[show])
  const showHandle = () => {
    setShow((prev) => !prev);
  };
  return (
    <div className="relative z-50">
      <PiUserLight onClick={showHandle} className="size-6 sm:size-7 cursor-pointer" />
      <div
        className={`${
          show ? "flex" : "hidden"
        } bg-white shadow-xl rounded-md flex-col gap-y-2 absolute -left-5 sm:left-0 top-9 w-72 min-h-14 py-4 px-5 border`}
      >
        <div className={`${!userInfo && "hidden"} flex flex-col gap-y-2`}>
          <h2 className="text-center mb-2"> سلام {userInfo?.firstName}، خوش آمدید. </h2>
          <Link href={"/user-profile"} >
            <button className="border w-full py-1 rounded-md hover:bg-slate-100">
              پروفایل
            </button>
          </Link>
          <SubmitButton
            text="خروج"
            onClick={deleteTokenHandler}
            bgColor="bg-red-500"
          />
        </div>
         {!userInfo && <UserLogin showHandle={showHandle} />} 
      </div>
    </div>
  );
};
