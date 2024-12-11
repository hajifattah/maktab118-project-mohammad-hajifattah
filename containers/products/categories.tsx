import { GetSubCatAndCat } from "@/utils/fetch-cat-subCat";
import { getCategoryImageSorce } from "@/utils/sorce-image";
import Image from "next/image";
import { FaCaretLeft } from "react-icons/fa";

export const Categories: React.FC<{ catOrSubCatId: string }> = async ({
  catOrSubCatId,
}) => {
    const { catList, subCatList } = await GetSubCatAndCat();
    let findSubCat = subCatList.find((item) => item._id === catOrSubCatId);

  return (
    <div className="grid bg-white mt-3 p-2 sm:p-4 w-2/5 sm:2/6 md:3/8 2xl:w-3/12 rounded-md">
      <ul>
        {catList.map((cat, index) => {
          return (
            <li key={index}>
              <div className="flex flex-wrap gap-x-2 hover:cursor-pointer pt-4 min-h-[2.5rem] ">
                <div className="relative size-5 ">
                  <Image
                    src={getCategoryImageSorce(cat.icon)}
                    alt={cat.slugname}
                    fill
                  />
                </div>
                <h2
                  className={` text-black hover:font-semibold text-sm sm:text-base lg:text-lg ${
                    findSubCat === undefined && catOrSubCatId === cat._id
                      ? "font-extrabold border-b border-b-gray-700"
                      : ""
                  }`}
                >
                  {cat.name}{" "}
                </h2>
              </div>

              <ul className="grid sm:mr-2 text-start gap-y-1 gap-x-4">
                {subCatList.map((subCat) => {
                  return (
                    subCat.category === cat._id && (
                      <li
                        key={subCat._id}
                        className={`hover:bg-gray-200 hover:text-black rounded-sm p-1 text-xs sm:text-sm lg:text-base text-gray-500 cursor-pointer ${
                          findSubCat && findSubCat._id === subCat._id
                            ? "!text-black font-extrabold"
                            : ""
                        }`}
                      >
                        <FaCaretLeft className="size-5 inline-block sm:mr-1" />
                        {subCat.name}
                      </li>
                    )
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
