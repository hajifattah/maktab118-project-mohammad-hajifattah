"use client";

import { useEffect, useState } from "react";
import { PiUserLight } from "react-icons/pi";
import { UserLogin } from "./userLogin";
import { SubmitButton } from "@/components/submitButton";
import { deleteToken, getToken } from "@/utils/session-manager";

export const UserDetails: React.FC = () => {
  const [show, setShow] = useState<boolean>(false);
  const [userToken, setUserToken] = useState<string | null>(null);

  const deleteTokenHandler = () => {
    deleteToken();
    showHandle();
  };
  const showHandle = () => {
    setShow((prev) => !prev);
  };
  useEffect(() => {
    setUserToken(getToken());
  }, [show]);
  return (
    <div className="relative z-50">
      <PiUserLight onClick={showHandle} className="size-6 cursor-pointer" />
      <div
        className={`${
          show ? "flex" : "hidden"
        } bg-white shadow-xl rounded-md flex-col gap-y-2 absolute -left-5 sm:left-0 top-9 w-72 min-h-14 py-4 px-5`}
      >
        <div className={`${!userToken && "hidden"} flex flex-col gap-y-2`}>
          <h2 className="text-center"> شما وارد حساب خود شدید. </h2>
          <button className="border py-1 rounded-md hover:bg-slate-100">
            پروفایل
          </button>
          <SubmitButton
            text="خروج"
            onClick={deleteTokenHandler}
            bgColor="bg-red-500"
          />
        </div>
        <div className={`${userToken && "hidden"} `}>
          <UserLogin showHandle={showHandle} />
        </div>
      </div>
    </div>
  );
};
