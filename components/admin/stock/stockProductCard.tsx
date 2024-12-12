"use client";
import { getProductImageSorce } from "@/utils/sorce-image";
import Image from "next/image";
import { useContext, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { ProductInput } from "../manageProduct/inputs/productInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { QuantityPriceSchema } from "@/apis/validations/product.validation";
import { PairStockContext } from "@/providers/stockPage.provider";

export const StockProductCard: React.FC<IProduct> = ({
  _id,
  price,
  name,
  quantity,
  images,
}) => {
  const {addToPairsList} = useContext(PairStockContext);
  const [isStore, setIsStore] = useState<boolean>(true);
  const {
    control,
    getValues,
    formState: { isValid },
  } = useForm<IQuantityPriceForm>({
    mode: "all",
    resolver: zodResolver(QuantityPriceSchema),
  });

  const storeValues = (s: boolean) => {
    if (isStore) return setIsStore(s);
    addToPairsList({ pair: getValues(), id: _id, name });
    setIsStore(true);
  };
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
      {isStore ? (
        <td className="px-6 py-4">
          {getValues("price") ? getValues("price") : price}
        </td>
      ) : (
        <td className="p-4 px-2 text-center sm:text-start ">
          <Controller
            control={control}
            defaultValue={price.toString()}
            name="price"
            render={({ field, fieldState }) => {
              return (
                <ProductInput
                  extraStyle="!w-9/12 max-w-24"
                  {...field}
                  error={fieldState.error?.message}
                />
              );
            }}
          />
        </td>
      )}
      {isStore ? (
        <td className="px-6 py-4 text-center sm:text-start">
          {getValues("quantity") ? getValues("quantity") : quantity}
        </td>
      ) : (
        <td className="p-4 px-2 text-center sm:text-start ">
          <Controller
            control={control}
            defaultValue={String(quantity)}
            name="quantity"
            render={({ field, fieldState }) => {
              return (
                <ProductInput
                  extraStyle="!w-9/12 max-w-24"
                  {...field}
                  error={fieldState.error?.message}
                />
              );
            }}
          />
        </td>
      )}
      <td className="px-6 py-4 text-center sm:text-start">
        <label className="inline-flex items-center cursor-pointer w-fit">
          <input
            disabled={isStore ? false : !isValid}
            onChange={(e) => storeValues(e.target.checked)}
            type="checkbox"
            checked={isStore}
            className="sr-only peer hidden"
          />
          <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        </label>
      </td>
    </tr>
  );
};
