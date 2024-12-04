import Image from "next/image";

export const NavAdmin: React.FC = () => {
  return (
    <>
      <div className="h-18 flex justify-center relative -z-10 ">
        <div className="text-center text-sm flex items-end gap-x-2 text-white sm:text-xl absolute  self-center p-4 mx-auto max-w-screen-2xl">
          پنل مدیریت فروشگاه
          <span className="text-green_app font-bold text-xl sm:text-3xl"> بازار روز </span>
          <div className="relative size-9">
            <Image src={"logo.svg"} alt="logo" fill />
          </div>
        </div>
        <div className=" w-full h-16 mb-7 -z-10">
          <Image
            src={"admin/bg-navbar.svg"}
            alt="bg"
            style={{objectFit:"cover"}}
            fill
          />
        </div>
      </div>
    </>
  );
};
