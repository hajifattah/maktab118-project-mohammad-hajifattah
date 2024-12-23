import { SignupForm } from "@/containers/L&S/signupForm";
import Image from "next/image";

const SignupPage: React.FC = () => {
  return (
    <div className="relative md:h-[calc(100vh-13.25rem)] h-[calc(100vh-15rem)] md:max-h-[1000px] mt-6">
      <div className=" w-full h-[calc(100vh-31rem)]">
        <Image src={"/user-login.jpg"} alt="loginimage" sizes="1000px" fill />
      </div>
      <div className="max-w-[70vw] border mx-auto absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] bg-white w-96 xl:w-[27rem] p-4 rounded-md">
        <h2 className="font-semibold text-black/80 text-center text-lg mb-4">
        ثبت نام در بازار روز
        </h2>
        <SignupForm />
      </div>
    </div>
  );
};
export default SignupPage;
