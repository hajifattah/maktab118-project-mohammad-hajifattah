import Image from "next/image";
import Link from "next/link";
import { PiArrowFatLineRightFill } from "react-icons/pi";

export const ExtendSideBar: React.FC<{
  isExtend: boolean;
  path: string;
  setIsExtend: () => void;
  exitAccount: () => void;
}> = ({ isExtend, setIsExtend, exitAccount, path }) => {
  return (
    <main
      className={
        " fixed overflow-hidden z-10 bg-gray-700 bg-opacity-25 inset-0 transform ease-in-out " +
        (isExtend ? " translate-x-0  " : " translate-x-full")
      }
    >
      <section
        className={
          " pt-6 max-w-96 w-5/12 right-0 absolute flex flex-col bg-blue_app_menu text-white h-full shadow-xl delay-400 duration-500  transition-all transform  " +
          (isExtend ? " translate-x-0 " : " translate-x-full ")
        }
      >
        <div
          onClick={() => setIsExtend()}
          className={`
            } absolute hover:w-10 top-8 left-0 cursor-pointer z-10`}
        >
          <PiArrowFatLineRightFill className="size-8" />
        </div>
        <div className="px-2">
          <div className="relative w-full h-32  mb-7">
            <Image src={"admin/avatar.svg"} alt="avatar" fill />
          </div>
        </div>
        {/* items */}
        <div className="px-4 flex flex-col gap-y-2">
          <Link
            onClick={setIsExtend}
            href={"/orders"}
            className={`group/item hover:bg-slate-600 p-2 rounded-sm flex flex-col sm:flex-row text-sm gap-2 items-center  cursor-pointer ${
              path === "/orders" ? "border-b-2 border-b-white bg-slate-600" : ""
            }`}
          >
            <div className="relative size-10 group-hover/item:w-12 shrink-0 ">
              <Image src={"admin/shopping-bags.svg"} alt="shopping-card" fill />
            </div>
            <h2 className="group-hover/item:font-bold text-center">
              مدیریت سفارشات
            </h2>
          </Link>
          <Link
            onClick={setIsExtend}
            href={"/stock"}
            className={`group/item hover:bg-slate-600 p-2 flex flex-col sm:flex-row text-sm gap-x-2 items-center  cursor-pointer ${
              path === "/stock" ? "border-b-2 border-b-white bg-slate-600" : ""
            }`}
          >
            <div className="relative  size-10 group-hover/item:w-12 shrink-0">
              <Image src={"admin/prices.svg"} alt="shop" fill />
            </div>
            <h2 className="group-hover/item:font-bold text-center">
              مدیریت موجودی و قیمت ها
            </h2>
          </Link>
          <Link
            onClick={setIsExtend}
            href={"/manage-products"}
            className={`group/item hover:bg-slate-600 p-2 flex flex-col sm:flex-row text-sm gap-x-2 items-center  cursor-pointer ${
              path === "/manage-products" ? "border-b-2 border-b-white bg-slate-600" : ""
            }`}
          >
            <div className="relative  size-10 group-hover/item:w-12 shrink-0">
              <Image src={"admin/product-management.svg"} alt="shop" fill />
            </div>
            <h2 className="group-hover/item:font-bold text-center">
              مدیریت محصولات
            </h2>
          </Link>
          <Link
            href={"/"}
            className="group/item hover:bg-slate-600 p-2 flex flex-col sm:flex-row text-sm gap-2 items-center  cursor-pointer"
          >
            <div className="relative  size-10 group-hover/item:w-12 shrink-0">
              <Image src={"admin/shop.svg"} alt="shop" fill />
            </div>
            <h2 className="group-hover/item:font-bold text-center">
              رفتن به فروشگاه
            </h2>
          </Link>
          <Link
            href={"/"}
            onClick={exitAccount}
            className="group/item hover:bg-slate-600 p-2 flex flex-col sm:flex-row text-sm gap-2 items-center  cursor-pointer"
          >
            <div className="relative  size-10 sm:group-hover/item:w-12 shrink-0">
              <Image src={"admin/exit-vector.svg"} alt="shop" fill />
            </div>
            <h2 className="group-hover/item:font-bold text-center">خروج</h2>
          </Link>
        </div>
      </section>
      <section
        className=" w-screen h-full cursor-pointer "
        onClick={() => {
          setIsExtend();
        }}
      ></section>
    </main>
  );
};
