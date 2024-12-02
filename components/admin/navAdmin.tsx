import Image from "next/image";

export const NavAdmin: React.FC = () => {
  return (
    <div className="">
      <div className="h-18 flex justify-center relative -z-10 ">
        <h2 className="text-center text-white text-xl absolute  self-center p-4 mx-auto max-w-screen-2xl">
          پنل مدیریت فروشگاه
        </h2>
        <div className=" w-full h-16 mb-7 -z-10">
          <Image
            src={"admin/bg-navbar.svg"}
            alt="bg"
            objectFit="cover"
            layout="fill"
          />
        </div>
      </div>
    </div>
  );
};
