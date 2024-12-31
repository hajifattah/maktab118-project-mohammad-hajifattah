import { fetchSingleProductListService } from "@/apis/services/products.service";
import { errorHandler } from "@/utils/error-handler";
import { getProductImageSorce } from "@/utils/sorce-image";
import { AxiosError } from "axios";
import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";

export const UserOrdersItem: React.FC<IOrder> = ({
  createdAt,
  deliveryStatus,
  deliveryDate,
  products,
  totalPrice,
}) => {
  const [imageProducts, setImageProducts] = useState<string[]>([]);
  const productsId = useMemo(() => {
    return products.map((item) => item.product);
  }, []);
  const callback = useCallback(async () => {
    try {
      const responses = await fetchSingleProductListService(productsId);
      const images = responses.map((item) => item.data.product.images[0]);
      setImageProducts(images);
    } catch (error) {
      errorHandler(error as AxiosError);
    }
  }, []);

  useEffect(() => {
    callback();
  }, []);

  const { created, delivery } = useMemo(() => {
    const created = new Date(createdAt);
    const delivery = new Date(deliveryDate);
    return {
      created: created.toLocaleDateString("fa-IR-u-nu-latn"),
      delivery: deliveryDate.includes("1403")? deliveryDate.split("T")[0].replaceAll("-","/"): delivery.toLocaleDateString("fa-IR-u-nu-latn"),
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
        <p>{delivery}</p>
      </div>
      <div className="flex justify-between">
        {" "}
        <h2 className="text-gray-500">قیمت کل</h2>
        <p>{totalPrice} تومان</p>
      </div>
      <div className="flex gap-x-4 border-t-2 border-gray-300 p-2 pt-4 mt-2 mx-auto overflow-x-auto w-[70vw] max-w-[42rem]">
        {imageProducts.map((image,index) => (
          <div
            key={index}
            className="relative group-hover:blur-sm w-[30%] sm:w-[18%] sm:max-w-[13rem] min-w-16 md:min-w-28 lg:max-w-[5rem] xl:max-w-[13rem] aspect-square"
          >
            <Image
              alt="image"
              src={getProductImageSorce(image)}
              className="rounded-md "
              fill
            ></Image>
          </div>
        ))}
      </div>
    </div>
  );
};
