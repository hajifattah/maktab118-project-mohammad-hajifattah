import { OrderMenu } from "@/components/admin/orders/orderMenu";
import { OrdersList } from "@/containers/admin/orders/ordersList";

const OrdersPage: React.FC = () => {
  return (
    <div className="bg-blue_app h-[calc(100vh-7.75rem)] overflow-y-auto rounded-md">
        <OrderMenu/>
      <OrdersList />
    </div>
  );
};
export default OrdersPage;
