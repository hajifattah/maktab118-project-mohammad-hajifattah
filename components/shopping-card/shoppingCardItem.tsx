"use client";
import { getProductImageSorce } from "@/utils/sorce-image";
import Image from "next/image";
import Link from "next/link";
import { MdDelete } from "react-icons/md";
import { ChangeQuantity } from "../product/changeQuantity";
import { useAppDispatch } from "@/redux/hooks";
import { ShoppingAction } from "@/redux/slices/shoppingSlice";
import { toast } from "react-toastify";
import { IShoppingMongo } from "@/database/models/shopping-card";
import { useMutation } from "@tanstack/react-query";
import { changeQuantityShoppingItem, removeSigleShoppingItem } from "@/apis/services/shoppingCard.service";
import { queryClient } from "@/providers/queryclientProvider";

export const ShoppingCardItem: React.FC<IShoppingMongo> = ({
  _id,
  productId,
  image,
  maxQty,
  price,
  qty,
  title,
  total,
}) => {
  const mutationRemove = useMutation({
    mutationKey: ["remove-shopping-item", productId],
    mutationFn: removeSigleShoppingItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["shopping-list"] });
    },
  });

  const mutationQuantity = useMutation({
    mutationKey: ["change-quantity-shopping-item", _id],
    mutationFn: changeQuantityShoppingItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["shopping-list"] });
    },
  });
  const dispatch = useAppDispatch();

  const changeQty = (qty: number) => {
    if (qty > maxQty) {
      return toast.error("حداکثر موجودی");
    } else if (qty === 0) {
      return toast.error("حداقل سفارش یک عدد میباشد");
    }
    // dispatch(
    //   ShoppingAction.changeQuantity({ id: _id as unknown as string, qty: qty })
    // );
    mutationQuantity.mutate({productId:productId,quantity:{qty}})
  };

  const removeProduct = () => {
    mutationRemove.mutate(productId);
    // dispatch(ShoppingAction.removeOfCard(_id as unknown as string));
  };

  return (
    <>
      {" "}
      <div className="relative group-hover:blur-sm w-full sm:w-[18%] sm:max-w-[13rem] sm:min-w-16 lg:max-w-[5rem] xl:max-w-[13rem] aspect-square">
        <Image
          alt="image"
          src={getProductImageSorce(image)}
          className="rounded-md "
          fill
        ></Image>
      </div>
      {/* start to sm screen */}
      <div className="grid sm:hidden w-full px-1">
        <div className="flex items-center justify-between ">
          <Link href={`/products/${_id}`}>
            <h2 className=" font-semibold  max-w-[7.5rem] truncate">{title}</h2>
          </Link>
          <div className="min-w-[6.2rem]">
            <ChangeQuantity changeqty={changeQty} quantity={qty} />
          </div>
        </div>
        <div className="flex justify-between items-center gap-x-3 w-full mt-2 border-b">
          <h2>قیمت</h2>
          <h2>قیمت کل محصول</h2>
          <h2>حذف</h2>
        </div>
        <div className="flex justify-between items-center gap-x-3 w-full mt-1">
          <p className="font font-semibold w-1/4 flex-auto ">
            {price} <span className="sm:text-sm text-gray-600">تومان</span>
          </p>
          <p className="font-semibold w-1/4 flex-auto">
            {total} <span className="sm:text-sm text-gray-600">تومان</span>
          </p>
          <button onClick={removeProduct}>
            <MdDelete className="size-8" />
          </button>
        </div>
      </div>
      {/* after sm screen */}
      <Link
        href={`/products/${_id}`}
        className="w-[18%] hidden sm:block sm:text-sm xl:text-base xl:mr-2"
      >
        <h2 className="text-sm font-semibold hidden max-w-[14rem] truncate sm:block ">
          {title}
        </h2>
      </Link>
      <p className="font font-semibold w-[18%] hidden sm:block sm:text-sm xl:text-base">
        {price} <span className="sm:text-sm text-gray-600">تومان</span>
      </p>
      <div className="w-[25%] max-w-[6.2rem]  xl:max-w-[8.2rem] md:ml-6 lg:ml-0 xl:ml-20 hidden sm:block">
        <ChangeQuantity changeqty={changeQty} quantity={qty} />
      </div>
      <p className="font font-semibold w-[18%] hidden sm:block sm:text-sm xl:text-base">
        {total} <span className="sm:text-sm text-gray-600">تومان</span>
      </p>
      <button onClick={removeProduct}>
        <MdDelete className="size-8 hidden sm:block" />
      </button>
    </>
  );
};
