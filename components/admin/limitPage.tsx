"use client";
import { useRouter } from "next/navigation";
import { ChangeEventHandler, useEffect, useState } from "react";

export const LimitInPage: React.FC<{ params: ISearchParams }> = ({
  params,
}) => {
  const { push } = useRouter();
  const onclickHandler: ChangeEventHandler<HTMLSelectElement> = (e) => {
    push(
      `?${
        params.deliveryStatus
          ? new URLSearchParams({
              deliveryStatus: params.deliveryStatus,
              sort: params.sort,
              limit: e.target.value,
            })
          : new URLSearchParams({
              sort: params.sort,
              limit: e.target.value,
            })
      }`
    );
  };
  return (
    <select
      onChange={onclickHandler}
      value={params.limit}
      name=""
      id=""
      className="bg-gray-800 h-fit text-sm py-1 px-4 rounded-md hover:cursor-pointer focus:outline-none text-gray-200"
    >
      <option value="5" >
        5 عدد
      </option>
      <option value="10">10 عدد</option>
      <option value="15">15 عدد</option>
    </select>
  );
};
