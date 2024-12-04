import { getProductImageSorce } from "@/utils/sorce-image";
import Image from "next/image";

export const ProductListCard: React.FC = () => {
  return (
    <tr className=" border-b bg-gray-800 border-gray-700 hover:bg-gray-600">
      <div className=" p-4">
        <div className="relative mx-auto size-full rounded-md max-w-20 aspect-square">
          <Image
            alt="image"
            src={getProductImageSorce(
              "products-674dff55a3a18d1b356f1991-1733164885066-1.jpeg"
            )}
            
            className="rounded-md"
            fill
          ></Image>
        </div>
      </div>
      <th
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white truncate max-w-52"
        title="شیر پرچرب دامداران مقدار بسبشسبسشسیب 2 کیلو گرم"
      >
        شیر پرچرب دامداران مقدار بسبشسبسشسیب 2 کیلو گرم
      </th>
      <td className="px-6 py-4">258000 تومان</td>
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
