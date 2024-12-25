import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IShoppingState {
  list: IShopping[];
  deliveryDate: string;
}
const initialState: IShoppingState = {
  list: [],
  deliveryDate: "",
};
export const shoppingSlice = createSlice({
  name: "shopping",
  initialState,
  reducers: {
    addToCard: (state, action: PayloadAction<IShopping>) => {
      state.list.push(action.payload);
    },
    removeOfCard: (state, action: PayloadAction<string>) => {
      state.list = state.list.filter((item) => item.id !== action.payload);
    },
    changeQuantity: (
      state,
      action: PayloadAction<{ id: string; qty: number }>
    ) => {
      state.list = state.list.map((item) =>
        item.id === action.payload.id
          ? {
              ...item,
              qty: action.payload.qty,
              total: action.payload.qty * item.price,
            }
          : item
      );
    },
    setDeliveryDate: (state, action: PayloadAction<string>) => {
      state.deliveryDate = action.payload;
    },
    removeAll: (state) => {
      state.list = [];
      state.deliveryDate = "";
    },
  },
});

export const ShoppingAction = shoppingSlice.actions;
export const ShoppingReducer = shoppingSlice.reducer;
