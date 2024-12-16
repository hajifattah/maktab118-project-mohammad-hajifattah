"use client"
import { PiMinusCircleFill, PiPlusCircleFill } from "react-icons/pi";

export const ChangeQuantity: React.FC<{
  changeqty: (qty: number) => void;
  quantity: number;
  isInShopping?: IShopping;
}> = ({ changeqty, quantity, isInShopping }) => {
  return (
    <div className="flex gap-x-2 rounded-full p-2 lg:px-4 items-center border ">
      <button
        onClick={() =>
          changeqty(!!isInShopping ? isInShopping.qty + 1 : quantity + 1)
        }
      >
        <PiPlusCircleFill className="size-7 lg:size-8 text-gray-300 hover:text-gray-400 " />
      </button>
      <span className="pt-1 lg:text-lg min-w-6 text-center">
        {!!isInShopping ? isInShopping.qty : quantity}
      </span>
      <button
        onClick={() =>
          changeqty(!!isInShopping ? isInShopping.qty - 1 : quantity - 1)
        }
      >
        {" "}
        <PiMinusCircleFill className="size-7 lg:size-8 text-gray-300 hover:text-gray-400 " />
      </button>
    </div>
  );
};
