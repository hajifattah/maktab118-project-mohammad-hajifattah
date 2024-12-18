import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { ShoppingReducer } from "./slices/shoppingSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
const persistConfig = {
  key: "root",
  storage,
};
const reducer = combineReducers({
  shopping: persistReducer(persistConfig, ShoppingReducer),
});
export const reduxStore = configureStore({ reducer });
export const persistor = persistStore(reduxStore)

export type RootState = ReturnType<typeof reduxStore.getState>;
export type AppDispatch = typeof reduxStore.dispatch;
