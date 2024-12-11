import { ProductImagesList } from "@/components/product/imageList";
import { ProductAction } from "@/components/product/productAction";
import { AiFillInstagram } from "react-icons/ai";
import {
  FaFacebook,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { PiMinusCircleFill, PiPlusCircleFill } from "react-icons/pi";

const ProductPage: React.FC<INextPageParams<{ product: string }>> = async ({
  params,
}) => {
  const productId = (await params).product;
  return (
    <div>
      <div className="grid gap-4 md:grid-cols-2 justify-center xl:grid-cols-5">
        <ProductImagesList />
        <div className="bg-white border rounded-md px-4 xl:col-span-3">
          <div className="py-4 border-b flex flex-col gap-y-4">
            <div className="flex gap-x-1 items-center">
              <h2 className="font-semibold lg:text-lg">نام محصول</h2>
              <h2 className="text-xs lg:text-sm bg-green-200 rounded-sm p-1">
                موجود در انبار
              </h2>
            </div>
            <h2 className="font-semibold text-green_app lg:text-lg">285000 تومان</h2>
          </div>
          <div className="py-4 border-b flex flex-col gap-y-4">
            <div className="flex flex-col gap-y-3 sm:flex-row sm:justify-between sm:items-center ">
              <div className="flex gap-x-2 items-center">
                <h2 className="">برند: </h2>
                <h2 className="border pt-1 px-4 rounded-sm lg:text-lg ">کاله</h2>
              </div>
              <div className="flex gap-x-2 sm:text-base items-center">
                <h2 className="text-sm lg:text-base">اشتراک گذاری: </h2>
                <FaFacebookF className="size-5 lg:size-6 text-gray-600" />
                <FaTwitter className="size-5 lg:size-6 text-gray-600" />
                <AiFillInstagram className="size-5 lg:size-6 text-gray-600" />
              </div>
            </div>
            <h2 className="text-sm sm:text-base text-gray-600">
              توضیحات محصول بمنست نمسب متسبمت متسبمتسدتئدسهب نتدسبهدبستد
              ندستنبدخ نسبدتسدبنتد
            </h2>
          </div>
          <ProductAction/>
          <div className="flex flex-col gap-x-2 py-4 border-b">
            <h2>
              دسته اصلی: <span className="font-semibold mr-1">نوشیدنی</span>
            </h2>
            <h2>
            زیر دسته: <span className="font-semibold mr-1">نوشیدنی</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductPage;
