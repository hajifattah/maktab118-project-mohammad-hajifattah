import Image from "next/image";
import { SubCategory } from "./subCategory";
import { getCategoryImageSorce } from "@/utils/sorce-image";
import { GetSubCatAndCat } from "@/utils/fetch-cat-subCat";
import Link from "next/link";

export const Category: React.FC = async () => {
  const { catList, subCatList } = await GetSubCatAndCat();
  return (
    <div className=" group-hover:visible absolute invisible shadow-xl top-11 sm:top-[3rem] right-0 bg-white rounded-br-md text-black w-44 z-30">
      <ul>
        {catList.map((cat, index) => {
          return (
            <Link href={`/products/category/${cat._id}`}>
              <li
                key={index}
                className={`group/item flex gap-x-2 px-4  ${
                  index === 4 ? "min-h-[3.5rem] py-4" : "pt-4 min-h-[2.5rem]"
                }`}
              >
                <div className="relative size-5 group-hover/item:size-6">
                  <Image
                    src={getCategoryImageSorce(cat.icon)}
                    alt={cat.slugname}
                    fill
                  />
                </div>
                <h2 className="group-hover/item:font-semibold text-black">
                  {cat.name}{" "}
                </h2>
                <div className="group-hover/item:visible invisible grid p-2 min-h-[212px] xs_app:rounded-br-none rounded-br-md shadow-xl rounded-l-md sm:w-[calc(100vw-17rem)] w-[calc(100vw-14rem)] px-2 sm:px-4 bg-black_app absolute right-44 top-[0.2rem] text-white max-w-screen-xl z-30">
                  <SubCategory catId={cat._id} subCatList={subCatList} />
                </div>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};
