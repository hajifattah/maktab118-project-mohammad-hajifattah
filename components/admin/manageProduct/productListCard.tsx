import { fetchSubCatByIdService } from "@/apis/services/subCategory.service";
import { getProductImageSorce } from "@/utils/sorce-image";
import Image from "next/image";
import { DeleteProduct } from "./deleteProduct";
import { ProductForm } from "@/containers/admin/manageProduct/productForm";

export const ProductListCard: React.FC<{ data: IProduct,isLast:boolean }> = async ({
  data,
  isLast
}) => {
  const subCatDetails = await fetchSubCatByIdService(data.subcategory);
  return (
    <tr className=" border-b bg-gray-800 border-gray-700 hover:bg-gray-600">
      <td className="p-4">
        <div className="relative mx-auto size-full rounded-md max-w-20 aspect-square">
          <Image
            alt="image"
            src={getProductImageSorce(data.images[0])}
            className="rounded-md"
            fill
          ></Image>
        </div>
      </td>
      <th
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white truncate max-w-52"
        title={data.name}
      >
        {data.name}
      </th>
      <td className="px-6 py-4">
        {subCatDetails.data.subcategory.category.name} /{" "}
        {subCatDetails.data.subcategory.name}
      </td>
      <td className="px-6 py-4">
        <div className="flex gap-x-4">
          <ProductForm data={data}/>
          <DeleteProduct id={data._id} name={data.name} isLast={isLast}/>
        </div>
      </td>
    </tr>
  );
};
