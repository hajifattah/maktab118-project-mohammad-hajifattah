import { UserOrdersItem } from "@/components/user_orders/orderItem";

export const UserOrdersList: React.FC = () => {
  return (
    <div className="grid gap-y-4 w-full">
     {[1,2,3,4].map(item=> <UserOrdersItem key={item}/>)}
    </div>
  );
};
