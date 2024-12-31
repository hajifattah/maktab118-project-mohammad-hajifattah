import Link from "next/link";
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";

export const ResultStatus: React.FC<{ status: "succeeded" | "failed" }> = ({
  status,
}) => {
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
          <Link
            href={"/user-profile/orders"}
            className="inline-flex mr-4"
          >
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
