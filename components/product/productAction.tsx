"use client";
import { useState } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { PiMinusCircleFill, PiPlusCircleFill } from "react-icons/pi";
import { toast } from "react-toastify";

export const ProductAction: React.FC<{ stockQty: number }> = ({ stockQty }) => {
  const [quantity, setQuantity] = useState<number>(0);
  const changePic = (qty: number) => {
    if (stockQty === 0) {
      return toast.error("محصول موجود نمی باشد");
    } else if (qty > stockQty) {
      return toast.error("حداکثر موجودی");
    } else if (qty < 0) return;
    setQuantity(qty);
  };
  return (
    <>
      <div className="flex gap-x-2 md:gap-x-5 py-4 border-b">
        <div className="flex gap-x-2 rounded-full p-2 lg:px-4 items-center border ">
          <button onClick={() => changePic(quantity + 1)}>
            <PiPlusCircleFill className="size-7 lg:size-8 text-gray-300 hover:text-gray-400 " />
          </button>
          <span className="pt-1 lg:text-lg min-w-6 text-center">
            {quantity}
          </span>
          <button onClick={() => changePic(quantity - 1)}>
            {" "}
            <PiMinusCircleFill className="size-7 lg:size-8 text-gray-300 hover:text-gray-400 " />
          </button>
        </div>
        <button
          disabled={stockQty === 0}
          className="text-white font-semibold w-full rounded-full bg-green_app hover:bg-green_app/85 disabled:bg-gray-500"
        >
          افزودن به سبد{" "}
          <HiOutlineShoppingBag className="size-5 lg:size-7 inline-block mr-1" />
        </button>
      </div>
    </>
  );
};
