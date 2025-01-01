"use client";
import { createOrderService } from "@/apis/services/orders.service";
import { removeShoppingListService } from "@/apis/services/shoppingCard.service";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { ShoppingAction } from "@/redux/slices/shoppingSlice";
import { errorHandler } from "@/utils/error-handler";
import { getUserInfo } from "@/utils/session-manager";
import { AxiosError } from "axios";
import Link from "next/link";
import { useMemo } from "react";
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";

export const ResultStatus: React.FC<{ status: "succeeded" | "failed" }> = ({
  status,
}) => {
  const userId = getUserInfo()?.id;
  const shopping = useAppSelector((state) => state.shopping);
  const dispatch = useAppDispatch();
  const order = useMemo(() => {
    const products = shopping.list.map((item) => {
      return { product: item.id, count: item.qty };
    });
    return {
      deliveryDate: shopping.deliveryDate,
      products,
      user: userId as string,
    };
  }, [shopping]);
  const createOrderAndDeleteStateDb = async () => {
    try {
      await createOrderService(order);
      await removeShoppingListService(userId as string);
      dispatch(ShoppingAction.removeAll());
    } catch (error) {
      errorHandler(error as AxiosError)
    }
  };
  if (status === "succeeded" && shopping.list.length > 0) {
    createOrderAndDeleteStateDb();
  }
  const text =
    status === "succeeded"
      ? "با تشکر از پرداخت شما، سفارش شما ثبت شد و در زمان انتخابی تحویل شما خواهد شد همچنین می توانید از طریق صفحه سفارشات وضعیت آن را مشاهده کنید"
      : "پرداخت انجام نشد، بارفتن به صفحه نهایی کردن خرید میتوانید مجددا اقدام به پرداهت نماییید";

  return (
    <div className="flex gap-x-6 items-center ">
      {status === "succeeded" ? (
        <FaCheckCircle className="size-16 shrink-0 text-green_app" />
      ) : (
        <FaExclamationCircle className="size-16 shrink-0 text-red-500" />
      )}
      <div>
        <h2 className="font-bold text-xl sm:text-2xl mb-2 ">نتیجه پرداخت:</h2>
        <h2>{text}</h2>
        <Link href={"/"} className="inline-flex">
          <button className="font-semibold block px-3 py-1 bg-gray-300 mt-3 hover:text-white rounded-md hover:bg-green-400">
            بازگشت به صفحه اصلی
          </button>
        </Link>
        {status === "succeeded" ? (
          <Link href={"/user-profile/orders"} className="inline-flex mr-4">
            <button className="font-semibold block px-3 py-1 bg-gray-300 mt-3 hover:text-white rounded-md hover:bg-green-400">
              سفارشات من
            </button>
          </Link>
        ) : (
          <Link
            href={"/shopping-card/finalize-purchase"}
            className="inline-flex mr-4"
          >
            <button className="font-semibold block px-3 py-1 bg-gray-300 mt-3 hover:text-white rounded-md hover:bg-green-400">
              نهایی کردن خرید
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};
