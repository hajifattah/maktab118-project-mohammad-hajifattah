import { UserOrdersList } from "@/containers/user_orders/ordersList";

const UserOrdersPage: React.FC<INextPageParams> = async({searchParams}) => {
    const params = await searchParams;
  return (
    <div className="min-h-[calc(100vh-28.2rem)] md:min-h-[calc(100vh-26rem)] lg:md:min-h-[calc(100vh-20rem)] mt-6">
      <UserOrdersList {...params}/>
    </div>
  );
};
export default UserOrdersPage;
