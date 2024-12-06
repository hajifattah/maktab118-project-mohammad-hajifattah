import { OrderMenu } from "@/components/admin/orders/orderMenu";
import { OrdersList } from "@/containers/admin/orders/ordersList";
import { Suspense } from "react";

const OrdersPage: React.FC<INextSearchParams> = async ({ searchParams }) => {
  const params = await searchParams;

  return (
    <div className="bg-blue_app h-[calc(100vh-7.75rem)] overflow-y-auto rounded-md">
      <OrderMenu limit={params.limit} />
      <Suspense fallback={<h2 className="p-6">is loading...</h2>}>
        <OrdersList {...params} />
      </Suspense>
    </div>
  );
};
export default OrdersPage;
