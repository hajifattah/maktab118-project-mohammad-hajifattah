"use client";

import { useState } from "react";
import { PiUserLight } from "react-icons/pi";
import { UserLogin } from "./userLogin";

export const UserDetails: React.FC = () => {
  const [show, setShow] = useState<boolean>(false);
  const showHandle = ()=>{
    setShow((prev) => !prev)
  }
  return (
    <div className="relative ">
      <PiUserLight
        onClick={showHandle}
        className="size-6 cursor-pointer"
      />
      <div
        className={`${
          show ? "flex" : "hidden"
        } bg-white shadow-xl rounded-md flex-col gap-y-2 absolute -left-5 sm:left-0 top-9 w-72 min-h-14 py-4 px-5`}
      >
        <UserLogin showHandle={showHandle}/>
      </div>
    </div>
  );
};
