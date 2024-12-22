import { LoginForm } from "@/containers/L&S/loginForm";
import Image from "next/image";

const LoginPage: React.FC<{
  searchParams: Promise<{ isUser: boolean,isPurchase: boolean }>;
}> = async ({ searchParams }) => {
  const {isUser,isPurchase} = await searchParams;
  return !isUser ? (
    <div className="grid grid-cols-2 py-3 md:h-[calc(100vh-13.25rem)] md:max-h-[1000px]">
      <div className="content-center max-h-96 md:max-h-full py-4 md:col-span-1 col-span-2 bg-white px-4 rounded-t-md md:rounded-r-xl ">
        <div className="max-w-96 mx-auto ">
          <h2 className="font-semibold text-black/80 text-center text-lg mb-4">
            ورود به حساب مدیریت
          </h2>
          <LoginForm />
        </div>
      </div>
      <div className="relative h-[calc(100vh-30.75rem)] sm:h-[calc(100vh-31rem)] md:h-full md:col-span-1 col-span-2 ">
        <Image src={"/loginimage.jpg"} alt="loginimage" sizes="1000px" fill />
      </div>
    </div>
  ) : (
    <div className="relative md:h-[calc(100vh-13.25rem)] h-[calc(100vh-22rem)] md:max-h-[1000px] mt-4">
      <div className=" w-full h-[calc(100vh-31rem)]">
        <Image src={"/user-login.jpg"} alt="loginimage" sizes="1000px" fill />
      </div>
      <div className="max-w-[70vw] border mx-auto absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] bg-white w-96 p-4 rounded-md">
        <h2 className="font-semibold text-black/80 text-center text-lg mb-4">
          ورود به حساب کاربری
        </h2>
        <LoginForm isUser={isUser} isPurchase={isPurchase} />
      </div>
    </div>
  );
};
export default LoginPage;
