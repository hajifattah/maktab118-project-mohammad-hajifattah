import Image from "next/image";
import Link from "next/link";
import { CgArrowLeft } from "react-icons/cg";

export const MiddleContent: React.FC = () => {
  return (
    <div className="p-4 sm:p-9 bg-white rounded-md mt-2">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 justify-between ">
        <div className="relative ">
          <div className="relative mx-auto w-full max-w-sm max-h-[18rem] rounded-md h-[30vw] md:h-[20vw]">
            <Image
              alt="image"
              src={"/home/milk.png"}
              className="rounded-md"
              fill
            ></Image>
          </div>
          <div className="absolute right-[42%] sm:right-[50%] top-0 text-gray-800 p-1 sm:grid sm:gap-y-2 md:mt-3 ">
            <h2 className="text-white font-semibold max-w-[80vw] text-[3.5vw] md:text-[2vw]  2xl:text-3xl">
              شیر گاو تازه 100%
            </h2>
            <h2 className="text-[2vw] md:text-[1.2vw]  text-white xs_app:max-w-[80%] 2xl:text-xl">
              شروع قیمت از <span className="font-semibold">27 هزارتومان</span>
            </h2>
            <Link href={"/products/subcategory/674dd47da3a18d1b356f18d9"}>
              <button className="font-semibold text-[3.2vw] md:text-[1.5vw] mt-1 bg-white px-2 xs_app:px-4 sm:px-5 py-1 w-fit rounded-xl text-green_app 2xl:text-2xl">
                خرید
                <CgArrowLeft className="inline-block size-4 md:size-5 " />
              </button>
            </Link>
          </div>
        </div>
        <div className="relative  ">
          <div className="relative mx-auto w-full max-w-sm max-h-[18rem] rounded-md h-[30vw] md:h-[20vw]">
            <Image
              alt="image"
              src={"/home/softDrink.png"}
              className="rounded-md"
              fill
            ></Image>
          </div>
          <div className="absolute right-[3%] sm:right-[7%] top-0 text-gray-800 p-1 sm:grid sm:gap-y-1 mt-[2.5vw] md:mt-3 2xl:pr-3">
            <h2 className="text-[2vw] md:text-[1.2vw] font-semibold xs_app:max-w-[80%] 2xl:text-xl">
              نوشیدنی ها
            </h2>
            <h2 className=" font-semibold max-w-[60%] text-[3.5vw] md:text-[2vw] 2xl:text-3xl">
              آب و نوشابه و انرژی زا
            </h2>

            <Link href={"/products/category/674dd2f3a3a18d1b356f18a0"}>
              <button className="font-semibold text-[3.3vw] md:text-[1.5vw] mt-[2.5vw] bg-white px-2 xs_app:px-4 sm:px-5 py-1 w-fit rounded-xl text-green_app 2xl:text-2xl">
                خرید
                <CgArrowLeft className="inline-block size-4 md:size-5 " />
              </button>
            </Link>
          </div>
        </div>
        <div className="relative hidden md:block">
          <div className="relative mx-auto w-full max-w-sm max-h-[18rem] rounded-md h-[30vw] md:h-[20vw]">
            <Image
              alt="image"
              src={"/home/breakfast.png"}
              className="rounded-md"
              fill
            ></Image>
          </div>
          <div className="absolute sm:right-[45%] top-0 text-gray-800 p-1 sm:grid sm:gap-y-2  md:mt-3 ">
            <h2 className="text-[2vw] md:text-[1.2vw] font-semibold xs_app:max-w-[80%] 2xl:text-xl">
              100% ارگانیک
            </h2>
            <h2 className="font-semibold max-w-[93%] md:text-[2vw] 2xl:text-3xl">
              صبحانه در کمترین زمان
            </h2>
            <Link href={"/products/category/674dd2dfa3a18d1b356f1898"}>
              <button className="font-semibold text-[3.3vw] md:text-[1.5vw] mt-[1.8vw] bg-white px-2 xs_app:px-4 sm:px-5 py-1 w-fit rounded-xl text-green_app 2xl:text-2xl">
                خرید
                <CgArrowLeft className="inline-block size-4 md:size-5 " />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
