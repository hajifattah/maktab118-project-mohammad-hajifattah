"use client";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { findProduct } from "@/redux/selectors/findProduct";
import { ShoppingAction } from "@/redux/slices/shoppingSlice";
import { useMemo, useState } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { toast } from "react-toastify";
import { ChangeQuantity } from "./changeQuantity";
import dynamic from "next/dynamic";
import {
  addShoppingItemService,
  changeQuantityShoppingItem,
  removeSigleShoppingItem,
} from "@/apis/services/shoppingCard.service";
import { useMutation } from "@tanstack/react-query";
import { getUserInfo } from "@/utils/session-manager";

export const ProductActionCSR = dynamic(() => Promise.resolve(ProductAction), {
  ssr: false,
});
const ProductAction: React.FC<{
  productInfo: ISingleProduct;
}> = ({ productInfo }) => {
  const [quantity, setQuantity] = useState<number>(0);

  const mutationRemove = useMutation({
    mutationKey: ["remove-shopping-item", productInfo._id],
    mutationFn: removeSigleShoppingItem,
  });
  const mutationQuantity = useMutation({
    mutationKey: ["change-quantity-shopping-item", productInfo._id],
    mutationFn: changeQuantityShoppingItem,
  });

  const userId = getUserInfo()?.id;

  const dispatch = useAppDispatch();
  const isInShopping = useAppSelector(findProduct(productInfo._id));

  const mutation = useMutation({
    mutationKey: ["add-shopping-item", productInfo._id],
    mutationFn: addShoppingItemService,
  });

  const changeqty = (qty: number) => {
    if (productInfo.quantity === 0) {
      return toast.error("محصول موجود نمی باشد");
    } else if (qty > productInfo.quantity) {
      return toast.error("حداکثر موجودی");
    } else if (isInShopping && qty === 0) {
      return toast.error("حداقل سفارش یک عدد میباشد");
    } else if (qty < 0) return;
    if (isInShopping) {
      dispatch(
        ShoppingAction.changeQuantity({ id: productInfo._id, qty: qty })
      );
      if (userId)
        mutationQuantity.mutate({
          productId: productInfo._id,
          quantity: { qty },
          params: { userId },
        });
    } else {
      setQuantity(qty);
    }
  };

  const addOrRemove = async () => {
    if (isInShopping) {
      dispatch(ShoppingAction.removeOfCard(productInfo._id));
      if (userId) mutationRemove.mutate({productId:productInfo._id,params:{userId}});
      setQuantity(0);
    } else {
      if (quantity === 0) return toast.error("لطفا تعداد محصول را وارد کنید");
      if (userId)
        mutation.mutate({
          id: productInfo._id,
          userId,
          image: productInfo.images[0],
          maxQty: productInfo.quantity,
          price: productInfo.price,
          qty: quantity,
          title: productInfo.name,
          total: quantity * productInfo.price,
        });
      dispatch(
        ShoppingAction.addToCard({
          id: productInfo._id,
          image: productInfo.images[0],
          maxQty: productInfo.quantity,
          price: productInfo.price,
          qty: quantity,
          title: productInfo.name,
          total: quantity * productInfo.price,
        })
      );
    }
  };

  return (
    <>
      <div className="flex gap-x-2 md:gap-x-5 py-4 border-b">
        <ChangeQuantity
          changeqty={changeqty}
          isInShopping={isInShopping}
          quantity={quantity}
        />
        <button
          onClick={addOrRemove}
          disabled={productInfo.quantity === 0}
          className={`text-white font-semibold w-full rounded-full ${
            !!isInShopping
              ? "bg-red-500 hover:bg-red-400"
              : "bg-green_app hover:bg-green_app/85"
          } disabled:bg-gray-500`}
        >
          {!!isInShopping ? "حذف از سبد" : "افزودن به سبد"}
          <HiOutlineShoppingBag className="size-5 lg:size-7 inline-block mr-1" />
        </button>
      </div>
    </>
  );
};
