import { LoginForm } from "@/containers/L&S/loginForm";
import Link from "next/link";

export const UserLogin: React.FC<{
  showHandle: () => void;
}> = ({ showHandle }) => {
  return (
    <>
      <h2 className="font-semibold text-black/80 text-center text-lg">
        ورود به حساب کاربری
      </h2>
      <LoginForm showHandle={showHandle} />

      <div className="relative flex py-2 items-center">
        <div className="flex-grow border-t border-gray-400"></div>
        <span className="flex-shrink text-xs text-center mx-2 text-gray-400">
          حساب کاربری ندارید ؟
        </span>
        <div className="flex-grow border-t border-gray-400"></div>
      </div>
      <Link href={"/signup"}>
      <button className="text-green_app border border-green_app px-3 hover:bg-green-100 py-2 w-full rounded-md">
        ثبت نام
      </button></Link>
    </>
  );
};
