import Image from "next/image";
import { GiFruitBowl } from "react-icons/gi";

export const Category: React.FC = () => {
  return (
    <div className="grid p-4 group-hover:visible absolute invisible shadow-xl top-11 sm:top-[3rem] right-0 bg-white rounded-tr-none text-black w-44 rounded-md">
      <ul>
        <li className="group/item pb-3 flex gap-x-2">
          <div className="relative size-5 group-hover/item:size-6">
            <Image src={"/category/vegetables.svg"} alt="vegetables" fill />
          </div>
          <h2 className="group-hover/item:font-semibold text-black">
            میوه و سبزیجات{" "}
          </h2>
        </li>
        <li className="group/item py-3 flex gap-x-2">
          <div className="relative size-5 group-hover/item:size-6">
            <Image src={"/category/meat.svg"} alt="vegetables" fill />
          </div>
          <h2 className="group-hover/item:font-semibold">انواع گوشت</h2>
        </li>
        <li className="group/item py-3 flex gap-x-2">
          <div className="relative size-5 group-hover/item:size-6">
            <Image src={"/category/breakfast2.svg"} alt="vegetables" fill />
          </div>
          <h2 className="group-hover/item:font-semibold">صبحانه</h2>
        </li>
        <li className="group/item py-3 flex gap-x-2">
          <div className="relative size-5 group-hover/item:size-6">
            <Image src={"/category/dairy.svg"} alt="vegetables" fill />
          </div>
          <h2 className="group-hover/item:font-semibold">لبنیات</h2>
        </li>
        <li className="group/item py-3 flex gap-x-2">
          <div className="relative size-5 group-hover/item:size-6">
            <Image src={"/category/drink.svg"} alt="vegetables" fill />
          </div>
          <h2 className="group-hover/item:font-semibold">نوشیدنی ها</h2>
        </li>
      </ul>
    </div>
  );
};
