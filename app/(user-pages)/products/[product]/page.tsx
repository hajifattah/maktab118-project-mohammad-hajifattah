import { fetchSingleProductService } from "@/apis/services/products.service";
import { Description } from "@/components/product/description";
import { ProductImagesList } from "@/components/product/imageList";
import { ProductAction } from "@/components/product/productAction";
import Link from "next/link";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF, FaTwitter } from "react-icons/fa";

const ProductPage: React.FC<INextPageParams<{ product: string }>> = async ({
  params,
}) => {
  const productId = (await params).product;
  const productInfo = (await fetchSingleProductService(productId)).data.product;
  console.log(productInfo.description);
  return (
    <div>
      <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-5">
        <ProductImagesList imgList={productInfo.images} />
        <div className="bg-white border rounded-md px-4 w-full xl:col-span-3">
          <div className="py-4 border-b flex flex-col gap-y-4">
            <div className="flex gap-x-1 items-center">
              <h2 className="font-semibold lg:text-lg">{productInfo.name}</h2>
              <h2
                className={`text-xs lg:text-sm rounded-sm p-1 ${
                  productInfo.quantity ? "bg-green-200" : "bg-red-200"
                }`}
              >
                {productInfo.quantity > 0
                  ? "موجود در انبار"
                  : "کالا موجود نیست"}
              </h2>
            </div>
            <h2 className="font-semibold text-green_app lg:text-lg">
              {productInfo.price} تومان
            </h2>
          </div>
          <div className="py-4 border-b flex flex-col gap-y-4">
            <div className="flex flex-col gap-y-3 sm:flex-row sm:flex-wrap sm:justify-between sm:items-center ">
              <div className="flex gap-x-2 items-center">
                <h2 className="">برند: </h2>
                <h2 className="border pt-1 px-4 rounded-sm lg:text-lg ">
                  {productInfo.brand}
                </h2>
              </div>
              <div className="flex gap-x-2 sm:text-base items-center">
                <h2 className="text-sm lg:text-base">اشتراک گذاری: </h2>
                <FaFacebookF className="size-5 lg:size-6 text-gray-600 cursor-pointer" />
                <FaTwitter className="size-5 lg:size-6 text-gray-600 cursor-pointer" />
                <AiFillInstagram className="size-5 lg:size-6 text-gray-600 cursor-pointer" />
              </div>
            </div>
            <Description info={productInfo.description} />
          </div>
          <ProductAction stockQty={productInfo.quantity} />
          <div className="flex flex-col gap-x-2 gap-y-1 py-4 border-b">
            <Link href={`/products/category/${productInfo.category._id}`}>
              <h2 >
                دسته اصلی:{" "}
                <span className="font-semibold mr-1 hover:text-gray-500">
                  {productInfo.category.name}
                </span>
              </h2>
            </Link>
            <Link href={`/products/subcategory/${productInfo.subcategory._id}`}>
              <h2 >
                زیر دسته:{" "}
                <span className="font-semibold mr-1 hover:text-gray-500">
                  {productInfo.subcategory.name}
                </span>
              </h2>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductPage;
