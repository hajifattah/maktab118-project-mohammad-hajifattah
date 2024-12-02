"use client";
import Image from "next/image";
import { useState } from "react";
import { PiArrowFatLineLeftFill } from "react-icons/pi";
import { ExtendSideBar } from "./extendSideBar";

export const SideBarAdmin: React.FC = () => {
  const [isExtend, setIsExtend] = useState<boolean>(false);
  return (
    <>
      <div
        className={` h-screen w-2/12 min-w-12 sm:min-w-16 relative max-w-44 pt-6 bg-black_app text-white flex flex-col `}
      >
        <div
          onClick={() => setIsExtend((prev) => !prev)}
          className={`${
            isExtend && "hidden"
          } absolute -left-8  hover:w-6 top-8 cursor-pointer`}
        >
          <PiArrowFatLineLeftFill className="size-8 fill-black_app" />
        </div>

        <div className="relative size-10 sm:size-14 lg:size-16 self-center mb-7">
          <Image src={"admin/avatar.svg"} alt="avatar" fill />
        </div>
        <div
          className={`${
            isExtend && "hidden"
          } px-3 flex flex-col gap-y-5 items-center`}
        >
          <div className="relative p-2 size-14 w-full rounded-sm hover:bg-slate-600 cursor-pointer ">
            <Image
              src={"admin/shopping-bags.svg"}
              alt="shopping-card"
              className="py-2"
              fill
            />
          </div>
          <div className="relative p-2  size-14 w-full rounded-sm hover:bg-slate-600 cursor-pointer">
            <Image src={"admin/prices.svg"} alt="shop" fill className="py-2" />
          </div>
          <div className="relative p-2  size-14 w-full rounded-sm hover:bg-slate-600 cursor-pointer">
            <Image
              src={"admin/product-management.svg"}
              alt="shop"
              fill
              className="py-2"
            />
          </div>
          <div className="relative p-2  size-14 w-full rounded-sm hover:bg-slate-600 cursor-pointer">
            <Image src={"admin/shop.svg"} alt="shop" fill className="py-2" />
          </div>
          <div className="relative p-2  size-14 w-full rounded-sm hover:bg-slate-600 cursor-pointer">
            <Image
              src={"admin/exit-vector.svg"}
              alt="shop"
              fill
              className="py-2"
            />
          </div>
        </div>
      </div>
      <ExtendSideBar
        isExtend={isExtend}
        setIsExtend={() => setIsExtend((prev) => !prev)}
      />
    </>
  );
};
