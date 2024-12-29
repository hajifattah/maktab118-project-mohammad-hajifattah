"use client";

import { fetchAllShoppingItemsService } from "@/apis/services/shoppingCard.service";
import { IShoppingMongo } from "@/database/models/shopping-card";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { ShoppingAction } from "@/redux/slices/shoppingSlice";
import { getProductImageSorce } from "@/utils/sorce-image";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { TfiShoppingCart } from "react-icons/tfi";

export const CardDetails: React.FC = () => {
  // const [shoppingList, setShoppingList] = useState<IShoppingMongo[]>();
  const [show, setShow] = useState<boolean>(false);
  // const list = useAppSelector((state) => state.shopping.list);
  const {data} = useQuery({queryKey:["shopping-list"],queryFn:fetchAllShoppingItemsService,})
  const shoppingList = data?.list
  const dispatch = useAppDispatch();

  const removeProduct = (id: string) => {
    dispatch(ShoppingAction.removeOfCard(id));
  };
  useEffect(() => {
    if (!shoppingList?.length) setShow(false);
  }, [shoppingList]);

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     setShoppingList(list);
  //   }
  // }, [list]);

  return (
    <div className="relative z-50">
      <button onClick={() => setShow((prev) => !prev)}>
        <TfiShoppingCart className="size-6 sm:size-7 cursor-pointer" />
        <div
          className={`${
            !shoppingList?.length && "hidden"
          } absolute -top-2 -right-1 sm:-right-2 rounded-full bg-green_app flex justify-center items-center text-white size-5 sm:size-6 pt-1 font-semibold`}
        >
          {shoppingList?.length}
        </div>
      </button>
      <div
        className={`${
          show ? "block" : "hidden"
        } bg-white absolute left-0 top-8 w-[75vw] max-w-[20rem] sm:w-[40vw]  sm:max-w-[25rem] p-3 border rounded-md`}
      >
        <Link href={"/shopping-card"}>
          <button
            onClick={() => setShow(false)}
            disabled={!shoppingList?.length}
            className="sm:text-lg w-full text-center p-2 border-b text-white font-semibold bg-black_app hover:bg-green_app disabled:bg-gray-600 rounded-md"
          >
            سبد خرید
          </button>
        </Link>
        <div
          className={` flex shadow-xl rounded-md flex-col gap-y-2 mt-2  p-3   max-h-[calc(100vh_-_500px)] overflow-y-auto min-h-20 border`}
        >
          <h2
            className={`${
              shoppingList?.length && "hidden"
            } text-lg text-gray-400 m-auto text-center `}
          >
            شما محصولی انتخاب نکردید
          </h2>
          {shoppingList?.map((product) => {
            return (
              <div
                key={product.productId as string}
                className="flex gap-x-2 items-center bg-gray-200 p-1 rounded-md"
              >
                <div className="relative group-hover:blur-sm mx-auto w-[25%] min-w-[3.75rem] max-w-[5rem] aspect-square">
                  <Image
                    alt="image"
                    src={getProductImageSorce(product.image)}
                    className="rounded-md "
                    fill
                  ></Image>
                </div>
                <div className="flex flex-col gap-y-1 text-sm font-semibold w-[45%] lg:w-[60%]">
                  <div className="flex gap-x-1 items-center">
                    <Link href={`/products/${product.productId as string}`} className="truncate sm:max-w-44 grow">
                      {" "}
                      <h2 className="truncate">{product.title}</h2>
                    </Link>
                    <h2 className="text-gray-400 text-sm pt-1">
                      {product.qty}X
                    </h2>
                  </div>
                  <h2>{product.price} تومان </h2>
                </div>
                <button onClick={() => removeProduct(product.productId as string)}>
                  <MdDelete className="size-7 lg:size-8 text-black_app" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
