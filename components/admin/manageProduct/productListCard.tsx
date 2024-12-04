import { fetchSubCatByIdService } from "@/apis/services/subCategory.service";
import { getProductImageSorce } from "@/utils/sorce-image";
import Image from "next/image";

export const ProductListCard: React.FC<IProduct> = async ({
  _id,
  name,
  images,
  price,
  subcategory,
}) => {
  const subCatDetails = await fetchSubCatByIdService(subcategory);
  return (
    <tr className=" border-b bg-gray-800 border-gray-700 hover:bg-gray-600">
      <td className="p-4">
        <div className="relative mx-auto size-full rounded-md max-w-20 aspect-square">
          <Image
            alt="image"
            src={getProductImageSorce(images[0])}
            className="rounded-md"
            fill
          ></Image>
        </div>
      </td>
      <th
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white truncate max-w-52"
        title={name}
      >
        {name}
      </th>
      <td className="px-6 py-4">
        {subCatDetails.data.subcategory.category.name} /{" "}
        {subCatDetails.data.subcategory.name}
      </td>
      <td className="px-6 py-4">
        <div className="flex gap-x-4">
          <button className="font-medium text-blue-500 hover:text-blue-300">
            ویرایش
          </button>
          <button className="font-semibold text-base text-red-600 hover:text-red-400">
            حذف
          </button>
        </div>
      </td>
    </tr>
  );
};
