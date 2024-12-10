"use client";
import Image from "next/image";
import { useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { MdFavoriteBorder } from "react-icons/md";

export const ProductCard: React.FC = () => {
  const [selected, setSelected] = useState<boolean>(false);
  return (
    <div
      className={`flex flex-col gap-y-2 border shadow-lg bg-slate-50 ${
        selected ? "border-green_app" : "border-gray-300"
      }`}
    >
      <div className="group relative ">
        <div className="relative group-hover:blur-sm  mx-auto w-full rounded-md aspect-square">
          <Image
            alt="image"
            src={"/product-Image.png"}
            className="rounded-md"
            fill
          ></Image>
        </div>
        <div className="absolute left-[78%] top-[4%] invisible text-gray-800 p-1 hover:text-slate-500 hover:cursor-pointer group-hover:visible z-20">
          <FaRegEye className="size-6" />
        </div>
        <div className="absolute left-[78%] top-[18%] invisible text-gray-800 p-1 hover:text-slate-500 hover:cursor-pointer group-hover:visible z-20">
          <MdFavoriteBorder className="size-6" />
        </div>
      </div>
      <div className="flex items-center justify-between px-3 py-2 ">
        <div className="text-sm xs_app:max-w-[75%]">
          <h2 className="font-semibold text-gray-800 truncate max-w-[65vw]">
            گل کلم خیلی تازه ارزان به شرط محصول تعدا محدود
          </h2>
          <h2 className="text-gray-500 font-semibold">موجود در انبار</h2>
          <h2 className="font-semibold">250000 تومان</h2>
        </div>
        <button onClick={() => setSelected((prev) => !prev)}>
          <HiOutlineShoppingBag
            className={` rounded-full p-1 size-8  mr-1 hover:border hover:border-green_app ${
              selected ? "bg-green_app text-white" : "bg-gray-200 text-gray-700"
            }`}
          />
        </button>
      </div>
    </div>
  );
};
