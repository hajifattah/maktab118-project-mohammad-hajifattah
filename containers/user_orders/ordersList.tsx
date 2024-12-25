"use client";
import { ordersService } from "@/apis/services/orders.service";
import { LimitInPage } from "@/components/admin/limitPage";
import { Pagination } from "@/components/admin/orders/pagination";
import { UserOrdersItem } from "@/components/user_orders/orderItem";
import { errorHandler } from "@/utils/error-handler";
import { getUserInfo } from "@/utils/session-manager";
import { AxiosError } from "axios";
import { useCallback, useEffect, useMemo, useState } from "react";

export const UserOrdersList: React.FC<ISearchParams> = ({ limit, page }) => {
  const [userOrders, setUserOrders] = useState<IOrdersResDto>();
  const user = useMemo(() => {
    return getUserInfo();
  }, []);
  const params = {
    limit: limit || "5",
    page: Number(page) || 1,
    sort: "-createdAt",
    user: user?.id,
  };
  const callback = useCallback(async () => {
    try {
      const response = await ordersService(params);
      setUserOrders(response);
    } catch (error) {
      errorHandler(error as AxiosError);
    }
  }, [limit, page]);
  useEffect(() => {
    callback();
  }, [limit, page]);
  return (
    <div className="grid gap-y-4 sm:justify-center">
      <h2
        className={`${
          !userOrders?.data.orders.length ? "block" : "hidden"
        } font-semibold text-xl text-center text-gray-600`}
      >
        تاکنون سفارشی انجام نداده اید.
      </h2>
      <div className="grid gap-y-4 w-full h-full  min-h-[calc(100vh-28.2rem)] md:min-h-[calc(100vh-26rem)] lg:md:min-h-[calc(100vh-20rem)] max-h-[calc(100vh-10rem)] overflow-auto">
        {!!userOrders &&
          userOrders.data.orders.map((item) => (
            <UserOrdersItem key={item._id} {...item} />
          ))}
      </div>

      {!!userOrders?.total_pages && (
        <div className="flex flex-wrap items-start xs_app:items-end gap-x-3 gap-y-2 b-2 overflow-x-auto self-end">
          <Pagination
            totalPage={userOrders!.total_pages}
            params={{
              limit: limit || "5",
              page: page || "1",
              sort: "-createdAt",
            }}
            inAdmin={false}
          />
          <LimitInPage
            params={{
              ...params,
              limit: limit || "5",
              page: page || "1",
              sort: "-createdAt",
            }}
            inAdmin={false}
          />
        </div>
      )}
    </div>
  );
};
