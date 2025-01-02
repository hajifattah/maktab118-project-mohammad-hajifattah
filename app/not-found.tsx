import Image from "next/image";
import Link from "next/link";

const NotFound: React.FC = () => {
  return (
    <>
      <div className="grid gap-y-5 py-4 text-appWhite mt-5">
        <div className="flex flex-col gap-y-2 items-center">
          <h2 className="font-bold text-xl text-appBlack">صفحه یافت نشد!</h2>
          <p className="px-6 text-center text-appBlack/90">
          متاسفیم صفحه ی درخواسی یافت نشد لطفا مجددا تلاش کنید یا آدرس دیگری وارد کنید.
          </p>
          <Link href={"/"} className="font-semibold bg-slate-300 hover:bg-green-400 hover:text-white px-2 py-1 rounded-md ">بازگشت به صفحه اصلی</Link>
        </div>
       <div className="relative w-[80vw] aspect-video mx-auto">
       <Image src="/404-error.svg" alt="404-error" fill/>
       </div>
      </div>
    </>
  );
};
export default NotFound;
