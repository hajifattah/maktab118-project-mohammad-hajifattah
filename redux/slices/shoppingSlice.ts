import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IShoppingState {
  list: IShopping[];
}
const initialState: IShoppingState = {
  list: [],
};
export const shoppingSlice = createSlice({
  name: "shopping",
  initialState,
  reducers: {
    addToCard: (state, action: PayloadAction<IShopping>) => {
      state.list.push(action.payload);
    },
    removeOfCard: (state, action: PayloadAction<string>) => {
      state.list.filter((item) => item.id !== action.payload);
    },
    changeQuantity: (
      state,
      action: PayloadAction<{ id: string; qty: number }>
    ) => {
      state.list.map((item) =>
        item.id === action.payload.id
          ? {
              ...item,
              qty: action.payload.qty,
              total: action.payload.qty * item.price,
            }
          : item
      );
    },
    removeAll: (state) => {
      state.list = [];
    },
  },
});

export const ShoppingAction = shoppingSlice.actions;
export const ShoppingReducer = shoppingSlice.reducer;
