import { PurchaseGuardProvider } from "@/providers/purchase.provider";

const FinalizePurchaseLayout: React.FC<IChildren> = ({ children }) => {
  return <PurchaseGuardProvider>{children}</PurchaseGuardProvider>;
};
export default FinalizePurchaseLayout;
