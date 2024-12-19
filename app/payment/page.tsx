import Image from "next/image";
import Link from "next/link";

const PaymentPage: React.FC = () => {
  return (
    <div className="grid h-screen items-center ">
      <div className="relative hidden sm:block ">
        <div className="relative w-full h-screen ">
          <Image
            src={"/payment-gateway.jpg"}
            alt="paymentimage"
            sizes="1000px"
            fill
          />
        </div>
        <div className="flex gap-x-1 absolute top-[57.4%] right-[25.61vw] font-bold">
          <Link href={"shopping-card/finalize-purchase/result?status=succeeded"}>
            {" "}
            <button className="bg-green_app hover:bg-green-700 w-[19.65vw] rounded-2xl text-white py-2">
              پرداخت
            </button>
          </Link>
          <Link href={"shopping-card/finalize-purchase/result?status=failed"}>
            <button className="bg-orange-300 hover:bg-orange-500 w-[10vw]  rounded-2xl text-white py-2">
              انصراف
            </button>
          </Link>
        </div>
      </div>
      <div className="relative block sm:hidden ">
        <div className="relative w-full h-[calc(100vh-10rem)] flex sm:hidden content-center ">
          <Image
            src={"/payment-gateway1.jpg"}
            alt="paymentimage"
            sizes="1000px"
            fill
          />
        </div>
        <div className="flex gap-x-5 absolute top-[84%] right-[26vw] font-bold ">
          <Link href={"shopping-card/finalize-purchase/result?status=succeeded"}>
            <button className="bg-green_app hover:bg-green-700 w-[32vw] rounded-xl text-white py-[1.1rem]">
              پرداخت
            </button>
          </Link>
          <Link href={"shopping-card/finalize-purchase/result?status=failed"}>
            <button className="bg-orange-300 hover:bg-orange-500 w-[32vw]  rounded-xl text-white py-[1.1rem]">
              انصراف
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default PaymentPage;
