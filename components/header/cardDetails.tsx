"use client";

import { useState } from "react";
import { TfiShoppingCart } from "react-icons/tfi";

export const CardDetails: React.FC = () => {
  const [show, setShow] = useState<boolean>(false);
  const [card , setCard] = useState<INavShoppingCard>();
  return (
    <div className="relative">
      <TfiShoppingCart
        onClick={() => setShow((prev) => !prev)}
        className="size-6 cursor-pointer"
      />
      <div className={`${show ? "flex" : "hidden"} bg-white shadow-xl rounded-md flex-col gap-y-2 absolute p-3  left-0 top-9 w-60 min-h-20`}>
        <h2 className={`${card && "hidden"} text-lg text-gray-400 m-auto text-center `}>شما محصولی انتخاب نکردید</h2>
      </div>
    </div>
  );
};
