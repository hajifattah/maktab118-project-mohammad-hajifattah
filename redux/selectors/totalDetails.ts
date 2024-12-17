import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

const shoppingList = (state: RootState) => state.shopping.list;
export const getTotalDetails = createSelector(shoppingList, (list) =>
  list.reduce(
    (acc, item) => {
      acc.totalQty += item.qty;
      acc.totalPrice += item.total;
      return acc;
    },
    { totalQty: 0, totalPrice: 0 }
  )
);
