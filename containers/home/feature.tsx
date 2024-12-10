import { BiSupport } from "react-icons/bi";
import { FaShippingFast } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";
import { HiOutlineShoppingBag } from "react-icons/hi2";

export const Feature: React.FC = () => {
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 p-4 gap-3 sm:p-8 justify-between bg-white rounded-md">
      <div className="flex items-center justify-between md:justify-center  gap-x-2">
        <div >
          <h2 className="font-semibold text-sm xl:text-base">ارسال رایگان</h2>
          <h2 className="text-gray-300 text-xs xl:text-sm">ارسال رایگان برای تمام سفارشات</h2>
        </div>
        <FaShippingFast className="text-green_app transform shrink-0 -scale-x-100 size-8 xl:size-10" />
      </div>
      <div className="flex items-center justify-between md:justify-center gap-x-2">
        <div >
          <h2 className="font-semibold text-sm xl:text-base ">پشتیبانی مشتریان 24/7</h2>
          <h2 className="text-gray-300 text-xs xl:text-sm ">دسترسی فوری به پشتیبانی</h2>
        </div>
        <BiSupport className="text-green_app transform shrink-0 -scale-x-100 size-8 xl:size-10" />
      </div>
      <div className="flex items-center justify-between md:justify-center gap-x-2">
        <div >
          <h2 className="font-semibold text-sm xl:text-base ">100% پرداخت مطمئن</h2>
          <h2 className="text-gray-300 text-xs xl:text-sm ">اطمینان میدهیم پول شما دریافت می شود</h2>
        </div>
        <HiOutlineShoppingBag className="text-green_app transform shrink-0 -scale-x-100 size-8 xl:size-10" />
      </div>
      <div className="flex items-center justify-between md:justify-center  gap-x-2">
        <div >
          <h2 className="font-semibold text-sm xl:text-base ">گارانتی بازگشت وجه</h2>
          <h2 className="text-gray-300 text-xs xl:text-sm ">گارانتی بازگشت وجه تا 30 روز</h2>
        </div>
        <GiReceiveMoney className="text-green_app transform shrink-0 -scale-x-100 size-8 xl:size-10" />
      </div>
    </div>
    </div>
  );
};
