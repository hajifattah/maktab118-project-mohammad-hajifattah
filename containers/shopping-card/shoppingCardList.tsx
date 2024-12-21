"use client";
import { ShoppingCardItem } from "@/components/shopping-card/shoppingCardItem";
import { useAppSelector } from "@/redux/hooks";
import dynamic from "next/dynamic";

export const ShoppingCardListCSR = dynamic(() => Promise.resolve(ShoppingCardList), {
  ssr: false,
})
const ShoppingCardList: React.FC = () => {
  const shoppingList = useAppSelector((state) => state.shopping.list);
  return (
    <div className="grid gap-y-2  sm:px-4 py-4 m-1 right-0 border bg-white rounded-md lg:flex-auto">
      <div className="hidden sm:flex gap-x-2 justify-between items-center bg-black_app pr-4 py-3 font-semibold rounded-md text-white sm:text-sm xl:text-lg">
        <h2 className="w-[14%] flex-auto max-w-[13rem]">تصویر</h2>
        <h2 className="w-[14%] flex-auto ">نام محصول</h2>
        <h2 className="w-[14%] flex-auto ">قیمت</h2>
        <h2 className="w-[14%] flex-auto max-w-[8.5rem]">تعداد</h2>
        <h2 className="w-[14%] flex-auto ">قیمت کل هرمحصول</h2>
        <h2 className="w-[14% flex-auto ">حذف</h2>
      </div>
      <div className="max-h-[calc(100vh-12rem)] overflow-y-auto overflow-x-auto px-4">
        {shoppingList.map((product) => {
          return (
            <div
              key={product.id}
              className={`flex flex-col sm:flex-row gap-y-2 gap-x-4 sm:items-center w-full items-center sm:min-w-[34rem] pt-4 pb-6 sm:py-4 sm:border-b border-b-2 ${
                shoppingList.length - 1 === shoppingList.indexOf(product) &&
                "border-b-0 pb-0"
              }`}
            >
              <ShoppingCardItem {...product} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
