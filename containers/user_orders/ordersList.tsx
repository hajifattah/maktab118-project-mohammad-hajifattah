"use client";
import { ordersService } from "@/apis/services/orders.service";
import { UserOrdersItem } from "@/components/user_orders/orderItem";
import { errorHandler } from "@/utils/error-handler";
import { getUserInfo } from "@/utils/session-manager";
import { AxiosError } from "axios";
import { useCallback, useEffect, useMemo, useState } from "react";

export const UserOrdersList: React.FC = () => {
  const [userOrders, setUserOrders] = useState<IOrder[]>([]);
  const user = useMemo(() => {
    return getUserInfo();
  }, []);
  const callback = useCallback(async () => {
    try {
      const response = await ordersService({
        limit: "10",
        sort: "-createdAt",
        user: user?.id,
      });
      setUserOrders(response.data.orders);
    } catch (error) {
      errorHandler(error as AxiosError);
    }
  }, []);
  useEffect(() => {
    callback();
  }, []);
  return (
    <div className="grid gap-y-4 w-full">
      <h2
        className={`${
          !userOrders ? "block" : "hidden"
        } font-semibold text-xl text-center text-gray-600`}
      >
        تاکنون سفارشی انجام نداده اید.
      </h2>
      {userOrders &&
        userOrders.map((item) => <UserOrdersItem key={item._id} {...item} />)}
    </div>
  );
};
