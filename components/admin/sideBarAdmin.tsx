"use client";
import Image from "next/image";
import { useState } from "react";
import { PiArrowFatLineLeftFill } from "react-icons/pi";
import { ExtendSideBar } from "./extendSideBar";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { deleteToken } from "@/utils/session-manager";
import { toast } from "react-toastify";

export const SideBarAdmin: React.FC = () => {
  const [isExtend, setIsExtend] = useState<boolean>(false);
  const path = usePathname();
  const exitAccount = () => {
    toast.success("خروج موفقیت آمیز بود")
    deleteToken();
  };
  return (
    <>
      <div
        className={` h-screen w-0 sm:w-2/12 sm:min-w-16 relative max-w-44 pt-6 bg-blue_app_menu text-white flex flex-col ${isExtend ? "invisible":""} `}
      >
        {/* arrow */}
        <div
          onClick={() => setIsExtend((prev) => !prev)}
          className={`${
            isExtend && "hidden"
          } absolute -left-8  hover:w-6 top-8 cursor-pointer`}
        >
          <PiArrowFatLineLeftFill className="size-8 fill-white" />
        </div>
        {/* avatar */}
        <div className="relative sm:size-16 lg:size-20 self-center mb-7 hidden sm:block">
          <Image src={"admin/avatar.svg"} alt="avatar" fill />
        </div>
        {/* items */}
        <div
          className={`${
            isExtend && "hidden"
          } px-2 sm:px-3 flex-col gap-y-5 items-center hidden sm:flex`}
        >
          <Link
            href={"/orders"}
            className={`relative p-2 size-14 w-full rounded-sm hover:bg-slate-600 cursor-pointer ${
              path === "/orders" ? "border-b-2 border-b-white bg-slate-600" : ""
            }`}
          >
            <Image
              src={"admin/shopping-bags.svg"}
              alt="shopping-card"
              className="py-2"
              fill
            />
          </Link>
          <Link
            href={"/stock"}
            className={`relative p-2  size-14 w-full rounded-sm hover:bg-slate-600 cursor-pointer ${
              path === "/stock" ? "border-b-2 border-b-white bg-slate-600" : ""
            }`}
          >
            <Image src={"admin/prices.svg"} alt="shop" fill className="py-2" />
          </Link>
          <Link
            href={"/manage-products"}
            className={`relative p-2  size-14 w-full rounded-sm hover:bg-slate-600 cursor-pointer ${
              path === "/manage-products"
                ? "border-b-2 border-b-white bg-slate-600"
                : ""
            }`}
          >
            <Image
              src={"admin/product-management.svg"}
              alt="shop"
              fill
              className="py-2"
            />
          </Link>
          <Link
            href={"/"}
            className={`relative p-2  size-14 w-full rounded-sm hover:bg-slate-600 cursor-pointer ${
              path === "/" ? "border-b-2 border-b-white bg-slate-600" : ""
            }`}
          >
            <Image src={"admin/shop.svg"} alt="shop" fill className="py-2" />
          </Link>
          <Link
            href={"/"}
            onClick={exitAccount}
            className="relative p-2  size-14 w-full rounded-sm hover:bg-slate-600 cursor-pointer"
          >
            <Image
              src={"admin/exit-vector.svg"}
              alt="shop"
              fill
              className="py-2"
            />
          </Link>
        </div>
      </div>
      <ExtendSideBar
      path={path}
        exitAccount={exitAccount}
        isExtend={isExtend}
        setIsExtend={() => setIsExtend((prev) => !prev)}
      />
    </>
  );
};
