"use client";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { findProduct } from "@/redux/selectors/findProduct";
import { ShoppingAction } from "@/redux/slices/shoppingSlice";
import { useEffect, useState } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { toast } from "react-toastify";
import { ChangeQuantity } from "./changeQuantity";

export const ProductAction: React.FC<{
  productInfo: ISingleProduct;
}> = ({ productInfo }) => {
  const [quantity, setQuantity] = useState<number>(0);
  const [isInShopping, setIsInShopping] = useState<IShopping>();

  const dispatch = useAppDispatch();
  const selectShopping = useAppSelector(findProduct(productInfo._id));

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
    } else {
      setQuantity(qty);
    }
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsInShopping(selectShopping);
    }
  }, [selectShopping]);
  const addOrRemove = () => {
    if (isInShopping) {
      dispatch(ShoppingAction.removeOfCard(productInfo._id));
      setQuantity(0);
    } else {
      if (quantity === 0) return toast.error("لطفا تعداد محصول را وارد کنید");
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
