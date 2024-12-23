import { UserOrdersList } from "@/containers/user_orders/ordersList";

const UserOrdersPage: React.FC = () => {
  return (
    <div className="min-h-[calc(100vh-28.2rem)] md:min-h-[calc(100vh-26rem)] lg:md:min-h-[calc(100vh-20rem)] mt-6">
      <UserOrdersList />
    </div>
  );
};
export default UserOrdersPage;
