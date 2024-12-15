"use client";
import { persistor, reduxStore } from "@/redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

export const ReduxToolkitProvider: React.FC<IChildren> = ({ children }) => {
  return (
    <Provider store={reduxStore}>
      <PersistGate loading={null} persistor={persistor}></PersistGate>
      {children}
    </Provider>
  );
};
