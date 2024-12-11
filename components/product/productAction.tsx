import { HiOutlineShoppingBag } from "react-icons/hi2";
import { PiMinusCircleFill, PiPlusCircleFill } from "react-icons/pi";

export const ProductAction: React.FC = () => {
  return (
    <>
      <div className="flex gap-x-2 md:gap-x-5 py-4 border-b">
        <div className="flex gap-x-3 rounded-full p-2 lg:px-5 items-center border">
          <button>
            <PiPlusCircleFill className="size-7 lg:size-8 text-gray-300 hover:text-gray-400 " />
          </button>
          <span className="pt-1 lg:text-lg">5</span>
          <button>
            {" "}
            <PiMinusCircleFill className="size-7 lg:size-8 text-gray-300 hover:text-gray-400 " />
          </button>
        </div>
        <button className="text-white font-semibold w-full rounded-full bg-green_app hover:bg-green_app/85">
          افزودن به سبد{" "}
          <HiOutlineShoppingBag className="size-5 lg:size-7 inline-block mr-1" />
        </button>
      </div>
    </>
  );
};
