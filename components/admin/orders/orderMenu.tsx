"use client";
import Link from "next/link";
import { useState } from "react";

export const OrderMenu: React.FC<{limit :string}> = ({limit}) => {
  const [whichTitle, setWhichTitle] = useState<number>(1);
  return (
    <div className="flex justify-between border-b-2 py-2 px-2 sm:px-3 font-semibold bg-blue_app_menu">
      <Link href={`?${new URLSearchParams({deliveryStatus : "all",limit: limit || "5"})}`}
        onClick={() => setWhichTitle(1)}
        className={`py-3 px-2 sm:px-3 rounded-t-md ${
          whichTitle === 1 ? "border-b-2 border-b-white bg-slate-600" : ""
        }`}
      >
        همه سفارشات
      </Link>
      <Link href={`?${new URLSearchParams({deliveryStatus : "true",limit: limit || "5"})}`}
        onClick={() => setWhichTitle(2)}
        className={`py-3 px-2 sm:px-3 rounded-t-md ${
          whichTitle === 2 ? "border-b-2 border-b-white bg-slate-600" : ""
        }`}
      >
        سفارشات تحویل شده
      </Link>
      <Link href={`?${new URLSearchParams({deliveryStatus : "false",limit: limit || "5"})}`}
        onClick={() => setWhichTitle(3)}
        className={`py-3 px-2 sm:px-3 rounded-t-md ${
          whichTitle === 3 ? "border-b-2 border-b-white bg-slate-600" : ""
        }`}
      >
        سفارشات تحویل نشده
      </Link>
    </div>
  );
};
