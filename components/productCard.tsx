"use client";
import {
  addShoppingItemService,
  fetchAllShoppingItemsService,
  removeSigleShoppingItem,
} from "@/apis/services/shoppingCard.service";
import { IShoppingMongo } from "@/database/models/shopping-card";
import { queryClient } from "@/providers/queryclientProvider";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { findProduct } from "@/redux/selectors/findProduct";
import { ShoppingAction } from "@/redux/slices/shoppingSlice";
import { getUserInfo } from "@/utils/session-manager";
import { getProductImageSorce } from "@/utils/sorce-image";
import { useMutation, useQuery } from "@tanstack/react-query";
import { revalidateTag } from "next/cache";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { MdFavoriteBorder } from "react-icons/md";

export const ProductCardCSR = dynamic(() => Promise.resolve(ProductCard), {
  ssr: false,
});
const ProductCard: React.FC<IProduct & { isHome?: boolean }> = ({
  isHome = true,
  _id,
  price,
  quantity,
  name,
  images,
}) => {
  const mutation = useMutation({
    mutationKey: ["add-shopping-item", _id],
    mutationFn: addShoppingItemService,
  });
  const mutationRemove = useMutation({
    mutationKey: ["remove-shopping-item", _id],
    mutationFn: removeSigleShoppingItem,
  });
  const userId = useMemo(()=>{return getUserInfo()?.id;},[]);
  const isInShopping = useAppSelector(findProduct(_id));
  const dispatch = useAppDispatch();
  const clickhandler = async () => {
    if (!!isInShopping) {
      dispatch(ShoppingAction.removeOfCard(_id));
      if (userId) mutationRemove.mutate(_id);
    } else {
      if(userId) mutation.mutate({
        id: _id,
        image: images[0],
        maxQty: quantity,
        price: price,
        qty: 1,
        title: name,
        total: price,
      });

      dispatch(
        ShoppingAction.addToCard({
          id: _id,
          image: images[0],
          maxQty: quantity,
          price: price,
          qty: 1,
          title: name,
          total: price,
        })
      );
    }
  };
  return (
    <div
      className={`flex flex-col gap-y-2 border shadow-lg bg-slate-50 ${
        isHome ? "" : "rounded-md"
      } ${!!isInShopping ? "border-green_app" : "border-gray-300"}`}
    >
      <div
        className={`group relative bg-white p-1 ${isHome ? "" : "rounded-md"}`}
      >
        <div className="relative group-hover:blur-sm mx-auto w-full aspect-square">
          <Image
            alt="image"
            src={getProductImageSorce(images[0])}
            className="rounded-md "
            fill
          ></Image>
        </div>
        <Link
          href={`/products/${_id}`}
          className="absolute left-[78%] top-[18%] invisible text-gray-300 p-1 hover:text-slate-500 hover:cursor-pointer group-hover:visible z-20"
        >
          <FaRegEye className="size-6" />
        </Link>
        <div className="absolute left-[78%] top-[4%] invisible text-gray-300 p-1 hover:text-slate-500 hover:cursor-pointer group-hover:visible z-20">
          <MdFavoriteBorder className="size-6" />
        </div>
      </div>
      <div className="flex items-center justify-between px-3 py-2 ">
        <div className="text-sm xs_app:max-w-[75%]">
          <h2 className="font-semibold text-gray-800 truncate max-w-[31vw]">
            {name}
          </h2>
          <h2 className="text-gray-500 font-semibold">
            {quantity > 0 ? "موجود در انبار" : "کالا موجود نیست"}
          </h2>
          <h2 className="font-semibold">{price} تومان</h2>
        </div>
        <button
          disabled={quantity <= 0}
          onClick={clickhandler}
          className={` rounded-full hover:border p-1 hover:border-green_app disabled:bg-gray-500 disabled:hover:border-none ${
            !!isInShopping && quantity !== 0
              ? "bg-green_app text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          <HiOutlineShoppingBag className="size-8 p-1 " />
        </button>
      </div>
    </div>
  );
};
