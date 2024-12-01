import Image from "next/image";
import { SubCategory } from "./subCategory";

export const Category: React.FC = () => {
  return (
    <div className=" group-hover:visible absolute invisible shadow-xl top-11 sm:top-[3rem] right-0 bg-white rounded-br-md text-black w-44 ">
      <ul>
        <li className="group/item flex gap-x-2 min-h-[2.5rem] relative px-4 pt-4">
          <div className="relative size-5 group-hover/item:size-6">
            <Image src={"/category/vegetables.svg"} alt="vegetables" fill />
          </div>
          <h2 className="group-hover/item:font-semibold text-black">
            میوه و سبزیجات{" "}
          </h2>
          <div className="group-hover/item:visible invisible grid p-2 min-h-[212px] xs_app:rounded-br-none rounded-br-md shadow-xl rounded-l-md sm:w-[calc(100vw-17rem)] w-[calc(100vw-13rem)] px-2 sm:px-4 bg-black_app absolute right-44 top-[0.2rem] text-white max-w-screen-xl z-30">
            <SubCategory list={["میوه", "سبزیجات"]} />
          </div>
        </li>
        <li className="group/item min-h-[2.5rem] flex gap-x-2 px-4 pt-4">
          <div className="relative size-5 group-hover/item:size-6">
            <Image src={"/category/meat.svg"} alt="vegetables" fill />
          </div>
          <h2 className="group-hover/item:font-semibold">انواع گوشت</h2>
          <div className="group-hover/item:visible invisible grid p-2 min-h-[212px] xs_app:rounded-br-none rounded-br-md shadow-xl rounded-l-md sm:w-[calc(100vw-17rem)] w-[calc(100vw-13rem)] px-2 sm:px-4 bg-black_app absolute right-44 top-[0.2rem] text-white max-w-screen-xl z-30">
            <SubCategory
              list={["گوشت گاو", "گوشت مرغ", "گوشت گوساله", "ماهی"]}
            />
          </div>
        </li>
        <li className="group/item min-h-[2.5rem] flex gap-x-2 px-4 pt-4">
          <div className="relative size-5 group-hover/item:size-6">
            <Image src={"/category/breakfast2.svg"} alt="vegetables" fill />
          </div>
          <h2 className="group-hover/item:font-semibold">صبحانه</h2>
          <div className="group-hover/item:visible invisible grid p-2 min-h-[212px] xs_app:rounded-br-none rounded-br-md shadow-xl rounded-l-md sm:w-[calc(100vw-17rem)] w-[calc(100vw-13rem)] px-2 sm:px-4 bg-black_app absolute right-44 top-[0.2rem] text-white max-w-screen-xl z-30">
            <SubCategory list={["شکلات صبحانه", "پنیر صبحانه", "غلات"]} />
          </div>
        </li>
        <li className="group/item min-h-[2.5rem] flex gap-x-2 px-4 pt-4">
          <div className="relative size-5 group-hover/item:size-6">
            <Image src={"/category/dairy.svg"} alt="vegetables" fill />
          </div>
          <h2 className="group-hover/item:font-semibold">لبنیات</h2>
          <div className="group-hover/item:visible invisible grid p-2 min-h-[212px] xs_app:rounded-br-none rounded-br-md shadow-xl rounded-l-md sm:w-[calc(100vw-17rem)] w-[calc(100vw-13rem)] px-2 sm:px-4 bg-black_app absolute right-44 top-[0.2rem] text-white max-w-screen-xl z-30">
            <SubCategory list={["شیر", "ماست", "دوغ", "خامه"]} />
          </div>
        </li>
        <li className="group/item min-h-[3.5rem] flex gap-x-2 px-4 py-4">
          <div className="relative size-5 group-hover/item:size-6">
            <Image src={"/category/drink.svg"} alt="vegetables" fill />
          </div>
          <h2 className="group-hover/item:font-semibold">نوشیدنی ها</h2>
          <div className="group-hover/item:visible invisible grid p-2 min-h-[212px] xs_app:rounded-br-none rounded-br-md shadow-xl rounded-l-md sm:w-[calc(100vw-17rem)] w-[calc(100vw-13rem)] px-2 sm:px-4 bg-black_app absolute right-44 top-[0.2rem] text-white max-w-screen-xl z-30">
            <SubCategory
              list={["آب معدنی", "نوشابه", "ماءالشعیر", "انرژی زا"]}
            />
          </div>
        </li>
      </ul>
    </div>
  );
};
