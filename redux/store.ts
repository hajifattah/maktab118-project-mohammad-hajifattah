import { configureStore } from "@reduxjs/toolkit";
import { ShoppingReducer } from "./slices/shoppingSlice";

export const reduxStore = configureStore({
  reducer: { shopping: ShoppingReducer },
});

export type RootState = ReturnType<typeof reduxStore.getState>;
export type AppDispatch = typeof reduxStore.dispatch;
