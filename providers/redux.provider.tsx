import { reduxStore } from "@/redux/store";
import { Provider } from "react-redux";

export const ReduxToolkitProvider: React.FC<IChildren> = ({ children }) => {
  return <Provider store={reduxStore}>{children}</Provider>;
};
