"use client";
import { getProductImageSorce } from "@/utils/sorce-image";
import Image from "next/image";
import { useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { MdFavoriteBorder } from "react-icons/md";

export const ProductCard: React.FC<IProduct & { isHome?: boolean }> = ({
  isHome = true,
  _id,
  price,
  quantity,
  name,
  images,
}) => {
  const [selected, setSelected] = useState<boolean>(false);
  return (
    <div
      className={`flex flex-col gap-y-2 border shadow-lg bg-slate-50 ${
        isHome ? "" : "rounded-md"
      } ${selected ? "border-green_app" : "border-gray-300"}`}
    >
      <div
        className={`group relative bg-white p-1 ${isHome ? "" : "rounded-md"}`}
      >
        <div className="relative group-hover:blur-sm mx-auto w-full aspect-square">
          <Image
            alt="image"
            src={getProductImageSorce(images[0])}
            className="rounded-md "
            fill
          ></Image>
        </div>
        <div className="absolute left-[78%] top-[18%] invisible text-gray-300 p-1 hover:text-slate-500 hover:cursor-pointer group-hover:visible z-20">
          <FaRegEye className="size-6" />
        </div>
        <div className="absolute left-[78%] top-[4%] invisible text-gray-300 p-1 hover:text-slate-500 hover:cursor-pointer group-hover:visible z-20">
          <MdFavoriteBorder className="size-6" />
        </div>
      </div>
      <div className="flex items-center justify-between px-3 py-2 ">
        <div className="text-sm xs_app:max-w-[75%]">
          <h2 className="font-semibold text-gray-800 truncate max-w-[35vw]">
            {name}
          </h2>
          <h2 className="text-gray-500 font-semibold">
            {quantity > 0 ? "موجود در انبار" : "کالا موجود نیست"}
          </h2>
          <h2 className="font-semibold">{price} تومان</h2>
        </div>
        <button
          disabled={quantity <= 0}
          onClick={() => setSelected((prev) => !prev)}
          className={` rounded-full hover:border p-1 hover:border-green_app disabled:bg-gray-500 disabled:hover:border-none ${
            selected && quantity !== 0
              ? "bg-green_app text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          <HiOutlineShoppingBag className="size-8 p-1 "/>
        </button>
      </div>
    </div>
  );
};
