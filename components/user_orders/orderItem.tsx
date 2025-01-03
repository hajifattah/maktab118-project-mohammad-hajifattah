import { fetchSingleProductListService } from "@/apis/services/products.service";
import { errorHandler } from "@/utils/error-handler";
import { getProductImageSorce } from "@/utils/sorce-image";
import { AxiosError } from "axios";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";

export const UserOrdersItem: React.FC<IOrder> = ({
  createdAt,
  deliveryStatus,
  deliveryDate,
  products,
  totalPrice,
}) => {
  const [productsIdImage, setProductsIdImage] = useState<
    { productId: string; productImage: string }[]
  >([]);
  const productsId = useMemo(() => {
    return products.map((item) => item.product);
  }, []);
  const callback = useCallback(async () => {
    try {
      const responses = await fetchSingleProductListService(productsId);
      const products = responses.map((item) => {
        return {
          productId: item.data.product._id,
          productImage: item.data.product.images[0],
        };
      });
      setProductsIdImage(products);
    } catch (error) {
      errorHandler(error as AxiosError);
    }
  }, []);

  useEffect(() => {
    callback();
  }, []);

  const { created, delivery } = useMemo(() => {
    const created = new Date(createdAt);
    return {
      created: created.toLocaleDateString("fa-IR-u-nu-latn"),
      delivery: {
        date: deliveryDate.split("T")[0].replaceAll("-", "/"),
        time: deliveryDate.slice(
          deliveryDate.indexOf("T") + 1,
          deliveryDate.indexOf(".")
        ),
      },
    };
  }, [createdAt]);
  return (
    <div className="border border-gray-400 p-4 rounded-md bg-slate-200 max-w-screen-md mx-auto w-full max-h-72">
      <h2
        className={`text-center ${
          deliveryStatus ? "text-green_app" : "text-orange-500"
        }`}
      >
        {deliveryStatus ? "تحویل داده شد" : "درحال تامین کالا"}
      </h2>
      <div className="flex justify-between">
        {" "}
        <h2 className="text-gray-500">زمان سفارش</h2>
        <p>{created}</p>
      </div>
      <div className="flex justify-between">
        {" "}
        <h2 className="text-gray-500">زمان تحویل</h2>
        <p>
          {deliveryStatus ? delivery.time + "," : ""} {delivery.date}
        </p>
      </div>
      <div className="flex justify-between">
        {" "}
        <h2 className="text-gray-500">قیمت کل</h2>
        <p>{totalPrice} تومان</p>
      </div>
      <div className="flex gap-x-4 border-t-2 border-gray-300 p-2 pt-4 mt-2 mx-auto overflow-x-auto w-[70vw] max-w-[42rem]">
        {productsIdImage.map((item, index) => (
          <Link
            href={`/products/${item.productId}`}
            key={index}
            className="relative group-hover:blur-sm w-[30%] sm:w-[18%] sm:max-w-[13rem] min-w-16 md:min-w-28 lg:max-w-[5rem] xl:max-w-[13rem] aspect-square"
          >
            <Image
              alt="image"
              src={getProductImageSorce(item.productImage)}
              className="rounded-md "
              fill
            ></Image>
            <div
              className={`
               absolute -top-2 -right-1 sm:-right-2 rounded-md text-slate-400 flex justify-center items-center shadow-md bg-white size-6 pt-1 font-semibold`}
            >
              {products.find((item2) => item2.product === item.productId)
                ?.count + "X"}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
