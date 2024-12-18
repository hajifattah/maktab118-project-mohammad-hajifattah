"use client"
import { useAppSelector } from "@/redux/hooks";
import { getTotalDetails } from "@/redux/selectors/totalDetails";
import Link from "next/link";

export const TotalShoppingDetails: React.FC = () => {
  const { totalPrice, totalQty } = useAppSelector(getTotalDetails);
  return (
    <div className="flex flex-col gap-y-3 border p-4 pb-6 bg-white rounded-md m-1 mb-4 lg:flex-auto lg:min-w-72 h-fit">
        <h2 className="font-bold text-center mb-2">مجموع سبد خرید</h2>
      {" "}
      <div className="flex justify-between border-b pb-3">
        <h2 className="text-gray-500 lg:text-sm">تعداد کل کالاها:</h2>
        <h2 className="font-semibold text-gray-700">{totalQty} عدد</h2>
      </div>
      <div className="flex justify-between border-b pb-3">
        <h2 className="text-gray-500 lg:text-sm">هزینه حمل و نقل:</h2>
        <h2 className="font-semibold text-gray-700">رایگان</h2>
      </div>
      <div className="flex justify-between">
        <h2 className="text-gray-500 lg:text-sm"> قیمت قابل پرداخت:</h2>
        <h2 className="font-semibold">{totalPrice} <span className="lg:text-sm text-gray-600">تومان</span></h2>
      </div>
    <Link href={"/finalize-purchase"} className="flex justify-center"><button className="w-full bg-green_app text-white font-bold mt-2 hover:bg-green_app/80 px-2 py-2 rounded-md max-w-xl">نهایی کردن خرید</button></Link>
    <Link href={"/products/category/all"} className="flex justify-center"><button className="w-full bg-gray-200 border text-gray-600 font-bold mt-2 hover:bg-gray-100 px-2 py-2 rounded-md max-w-xl">بازگشت و ادامه خرید</button></Link>
    </div>
  );
};
