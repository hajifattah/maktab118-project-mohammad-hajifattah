import { IoIosArrowDown } from "react-icons/io";
import { Category } from "./category";
import { BsList } from "react-icons/bs";

export const NavMenu: React.FC = () => {
  return (
    <div className="flex bg-black_app text-white items-center px-6 sm:px-main_px">
      <div className="text-sm sm:text-base group sm:ml-5 relative flex items-center py-3 px-2 gap-x-2 cursor-pointer bg-green_app">
        <BsList className="hidden sm:inline-block size-5" />
        <h2>دسته بندی ها</h2>
        <IoIosArrowDown className="sm:mr-4 size-4" />
        <Category />
      </div>
      <div className="sm:flex hidden gap-x-2">
        <h2 className="cursor-pointer hover:font-semibold w-20 text-center">
          صفحه اصلی
        </h2>
        <h2 className="cursor-pointer hover:font-semibold w-16 text-center">
          محصولات
        </h2>
        <h2 className="cursor-pointer hover:font-semibold w-14 text-center">
          درباره ما{" "}
        </h2>
        <h2 className="cursor-pointer hover:font-semibold w-18 text-center">
          تماس با ما
        </h2>
      </div>
      <div className="flex mr-2 sm:hidden ">
        <h2 className="text-sm cursor-pointer hover:font-semibold w-20 mr-4 text-center">
          صفحه اصلی
        </h2>
        <h2 className="text-sm cursor-pointer hover:font-semibold mr-4 text-center">
          محصولات
        </h2>
      </div>
    </div>
  );
};
