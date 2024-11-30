import Image from "next/image";
import Link from "next/link";
import { CardDetails } from "./cardDetails";
import { UserDetails } from "./user/userDetails";
export const Nav: React.FC = () => {
  return (
    <div className="bg-white mt-3">
      <div className="px-6 sm:px-main_px py1 max-w-screen-2xl mx-auto flex justify-between items-center">
        <Link href={"/"} className="flex gap-x-1 p-1 items-end">
          <div className="relative size-9">
            <Image src={"logo.svg"} alt="logo" fill />
          </div>
          <h2 className="text-green_app font-bold text-2xl">بازار روز</h2>
        </Link>
        <div className="flex gap-x-2">
          <button className="font-semibold">مدیریت</button>
          <UserDetails />
          <CardDetails />
        </div>
      </div>
    </div>
  );
};
