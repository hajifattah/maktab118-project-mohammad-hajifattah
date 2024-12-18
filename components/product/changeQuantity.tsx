"use client"
import { PiMinusCircleFill, PiPlusCircleFill } from "react-icons/pi";

export const ChangeQuantity: React.FC<{
  changeqty: (qty: number) => void;
  quantity: number;
  isInShopping?: IShopping;
}> = ({ changeqty, quantity, isInShopping }) => {
  return (
    <div className={`flex   ${isInShopping ? "lg:px-3 p-2 gap-x-2":"xl:px-3 p-1 gap-x-1 xl:gap-x-2 xl:p-2"} rounded-full  items-center border`}>
      <button
        onClick={() =>
          changeqty(!!isInShopping ? isInShopping.qty + 1 : quantity + 1)
        }
      >
        <PiPlusCircleFill className={`size-7  ${isInShopping ? "lg:size-8":"xl:size-8"} text-gray-300 hover:text-gray-400 `} />
      </button>
      <span className={`pt-1 ${isInShopping ? "lg:text-lg":"xl:text-lg"} min-w-6 text-center`}>
        {!!isInShopping ? isInShopping.qty : quantity}
      </span>
      <button
        onClick={() =>
          changeqty(!!isInShopping ? isInShopping.qty - 1 : quantity - 1)
        }
      >
        {" "}
        <PiMinusCircleFill className={`size-7 ${isInShopping ? "lg:size-8":"xl:size-8"} text-gray-300 hover:text-gray-400 `} />
      </button>
    </div>
  );
};
