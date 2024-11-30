import Image from "next/image";
import Link from "next/link";
import { PiUserLight } from "react-icons/pi";
import { TfiShoppingCart } from "react-icons/tfi";
export const Nav: React.FC = () => {
  return (
    <div className="bg-white  mt-3">
      <div className="px-main_px max-w-screen-2xl mx-auto flex justify-between items-center">
        <Link href={"/"} className="flex gap-x-1 p-1 items-end">
          <div className="relative size-9">
            <Image src={"logo.svg"} alt="logo" fill />
          </div>
          <h2 className="text-green_app font-bold text-2xl">بازار روز</h2>
        </Link>
        <div className="flex gap-x-2">
          <button className="font-semibold">مدیریت</button>
          <PiUserLight className="size-6" />
          <TfiShoppingCart className="size-6" />
        </div>
      </div>
    </div>
  );
};
