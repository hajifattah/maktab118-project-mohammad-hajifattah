import { IShoppingMongo } from "@/database/models/shopping-card";

export const calcTotalDetails = (list:IShoppingMongo[])=> list.reduce(
    (acc, item) => {
      acc.totalQty += item.qty;
      acc.totalPrice += item.total;
      return acc;
    },
    { totalQty: 0, totalPrice: 0 }
  )