import Image from "next/image";
import Link from "next/link";

export const HeroSection: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row gap-x-4 w-full ">
      <div className="relative w-full md:w-8/12 aspect-video rounded-md grow">
        <Image
          alt="image"
          src={"/home/Bannar.png"}
          className="rounded-md "
          fill
        />
        <div className="absolute w-[60%] h-5/6 -left-[3.4%] top-[4%]">
          <Image
            alt="image"
            src={"/home/main1.png"}
            className="rounded-md absolute"
            fill
          />
        </div>
        <div className="absolute overflow-y-hidden right-0 py-3 lg:py-8 text-slate-100 px-4 w-7/12 max-w-52 sm:max-w-96 lg:max-w-md ">
          <h2 className="text-[5vw] md:leading-[2.8rem] md:text-[3.5vw] 2xl:text-[2.4rem] ">
            محصولات <span className=" font-semibold"> تازه</span> و{" "}
            <span className=" font-semibold">ارگانیک</span>
          </h2>
          <h2 className=" text-[0.8rem] md:text-[1rem] 2xl:text-[1.5rem] xl:mt-4">
            ارسال رایگان برای تمامی محصولات
          </h2>
          <Link href={"/products/subcategory/all"}>
            <h2 className="font-semibold mt-1 text-[0.9rem] md:text-[1.2rem] 2xl:text-[1.8rem] text-green_app hover:bg-green-200 cursor-pointer xl:mt-4 bg-slate-100 rounded-md px-2 py-1 lg:px-4 lg:py-2 w-fit">
              برای دیدن محصولات کلیک کنید{" "}
            </h2>
          </Link>
        </div>
      </div>
      <div className="w-full h-[30vw] md:h-auto md:block md:w-4/12 flex gap-x-4">
        <div className="relative mt-2 md:mt-0 w-full md:h-[calc(50%-4px)] rounded-md ">
          <Image
            alt="image"
            src={"/home/main3-bg.jpg"}
            className="rounded-md"
            fill
          />
          <Link
            href={"/products/category/674dd2cca3a18d1b356f1894"}
            className="absolute -rotate-90 -left-[10%] px-2 top-[40%] bg-slate-100 text-green_app hover:bg-green-200 font-semibold rounded-md  text-[2.8vw] md:text-[1.7vw] lg:-left-[8%] 2xl:text-3xl"
          >
            <button>انواع گوشت</button>
          </Link>
        </div>
        <div className="relative mt-2 w-full md:h-[calc(50%-4px)] rounded-md ">
          <Image
            alt="image"
            src={"/home/main-veg1.jpg"}
            className="rounded-md"
            fill
          />
          <Link
            href={"/products/category/674c446e600f653354acc71f"}
            className="absolute left-[20%] top-[11vw] bg-slate-100 text-green_app hover:bg-green-200 font-semibold rounded-md px-2 text-[2.8vw] md:text-[1.7vw] md:left-[22%] md:top-[38%] lg:left-[25%] 2xl:text-3xl"
          >
            <button>میوه و سبزیجات</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
