"use client";
import Image from "next/image";
import { useState } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";

export const ProductCard: React.FC = () => {
  const [selected, setSelected] = useState<boolean>(false);
  return (
    <div className={`flex flex-col gap-y-2 border-2 w-fit rounded-md shadow-lg bg-slate-50 ${selected ? "border-green_app" : "border-gray-300"}`
    }>
      <div className="relative mx-auto w-full rounded-md aspect-square">
        <Image
          alt="image"
          src={"/product-Image.png"}
          className="rounded-md"
          fill
        ></Image>
      </div>
      <div className="flex items-center justify-between px-3 py-2">
        <div className="text-sm">
          <h2 className="font-semibold text-gray-800 truncate max-w-44">
            گل کلم خیلی تازه ارزان به شرط محصول
          </h2>
          <h2 className="text-gray-500 font-semibold">موجود در انبار</h2>
          <h2 className="font-semibold">250000 تومان</h2>
        </div>
        <button onClick={()=>setSelected(prev=>!prev)}>
          <HiOutlineShoppingBag
            className={` rounded-full p-1 size-8  mr-1 hover:border hover:border-green_app ${
              selected ? "bg-green_app text-white" : "bg-gray-200 text-gray-800"
            }`}
          />
        </button>
      </div>
    </div>
  );
};
