"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export const OrderMenu: React.FC<{limit :string,delStatus:"all"|"true"|"false"}> = ({limit,delStatus}) => {
  const [whichTitle, setWhichTitle] = useState<string>(delStatus);
  useEffect(()=>{setWhichTitle(delStatus)},[delStatus])
  return (
    <div className="flex justify-between border-b-2 py-2 px-2 sm:px-3 font-semibold bg-blue_app_menu">
      <Link href={`?${new URLSearchParams({deliveryStatus : "all",limit: limit || "5"})}`}
        onClick={() => setWhichTitle("all")}
        className={`py-3 px-2 sm:px-3 rounded-t-md ${
          whichTitle === "all" ? "border-b-2 border-b-white bg-slate-600" : ""
        }`}
      >
        همه سفارشات
      </Link>
      <Link href={`?${new URLSearchParams({deliveryStatus : "true",limit: limit || "5"})}`}
        onClick={() => setWhichTitle("true")}
        className={`py-3 px-2 sm:px-3 rounded-t-md ${
          whichTitle === "true" ? "border-b-2 border-b-white bg-slate-600" : ""
        }`}
      >
        سفارشات تحویل شده
      </Link>
      <Link href={`?${new URLSearchParams({deliveryStatus : "false",limit: limit || "5"})}`}
        onClick={() => setWhichTitle("false")}
        className={`py-3 px-2 sm:px-3 rounded-t-md ${
          whichTitle === "false" ? "border-b-2 border-b-white bg-slate-600" : ""
        }`}
      >
        سفارشات تحویل نشده
      </Link>
    </div>
  );
};
