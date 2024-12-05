import { getProductImageSorce } from "@/utils/sorce-image";
import Image from "next/image";

export const StockProductCard: React.FC<IProduct> = ({
  _id,
  price,
  name,
  quantity,
  images,
}) => {
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
      <td className="px-6 py-4">{price}</td>
      <td className="px-6 py-4 text-center sm:text-start">{quantity}</td>
      
    </tr>
  );
};
