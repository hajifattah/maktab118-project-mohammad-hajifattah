"use client";
import { useRouter } from "next/navigation";
import { ChangeEventHandler } from "react";

export const LimitInPage: React.FC = () => {
  const { push } = useRouter();
  const onclickHandler: ChangeEventHandler<HTMLSelectElement> = (e) => {
    push(
      `?${new URLSearchParams({
        deliveryStatus: "all",
        sort: "totalPrice",
        limit: e.target.value,
      })}`
    );
  };
  return (
    <select
      onChange={onclickHandler}
      name=""
      id=""
      className="bg-gray-800 h-fit text-sm py-1 px-4 rounded-md hover:cursor-pointer text-gray-200"
    >
      <option value="6" className="">
        6 عدد
      </option>
      <option value="10">10 عدد</option>
      <option value="15">15 عدد</option>
    </select>
  );
};
