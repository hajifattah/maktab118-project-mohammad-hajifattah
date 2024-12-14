import { ordersService } from "@/apis/services/orders.service";
import { LimitInPage } from "@/components/admin/limitPage";
import { OrderListCard } from "@/components/admin/orders/orderListCard";
import { Pagination } from "@/components/admin/orders/pagination";
import Link from "next/link";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

export const OrdersList: React.FC<ISearchParams> = async ({
  deliveryStatus,
  page,
  sort,
  limit,
}) => {
  const params = {
    deliveryStatus:
      deliveryStatus === "true"
        ? true
        : deliveryStatus === "false"
        ? false
        : undefined,
    page: Number(page) || 1,
    sort: sort || "-createdAt",
    limit: limit || "5",
  };
  let response = await ordersService(params);
  return (
    <div className="px-3 xs_app:px-6 py-4  xs_app:h-[calc(100vh-12.5rem)] min-h-[calc(100vh-15rem)] grid gap-y-3 content-between">
      <div className="overflow-x-auto shadow-md sm:rounded-lg ">
        <table className="w-full text-sm text-left rtl:text-right text-gray-400">
          <thead className="text-xs bg-gray-700 text-gray-400">
            <tr>
              <th className="px-6 py-3">نام کاربر</th>
              <th className="px-6 py-3">
                <Link
                  href={`?${new URLSearchParams({
                    deliveryStatus: deliveryStatus || "all",
                    sort: "totalPrice",
                    limit: limit || "5",
                  })}`}
                  className="flex gap-x-3 items-center hover:text-white"
                >
                  <MdOutlineKeyboardArrowUp className="size-5 sm:size-7 shrink-0  " />
                  مبلغ کل سفارش{" "}
                </Link>
              </th>
              <th className="px-6 py-3">
                <Link
                  href={`?${new URLSearchParams({
                    deliveryStatus: deliveryStatus || "all",
                    sort: "createdAt",
                    limit: limit || "5",
                  })}`}
                  className="flex gap-x-3 items-center hover:text-white"
                >
                  <MdOutlineKeyboardArrowUp className="size-5 sm:size-7 shrink-0  " />
                  زمان سفارش{" "}
                </Link>
              </th>
              <th className="px-6 py-3">اطلاعات سفارش</th>
            </tr>
          </thead>
          <tbody>
            {response.data.orders.map((item) => (
              <OrderListCard key={item._id} {...item} />
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex flex-wrap items-start xs_app:items-end gap-x-3 gap-y-2 b-2 overflow-x-auto">
        <Pagination
          totalPage={response.total_pages}
          params={{
            ...params,
            deliveryStatus: deliveryStatus || "all",
            page: page || "1",
          }}
        />
        <LimitInPage
          params={{
            ...params,
            deliveryStatus: deliveryStatus || "all",
            page: page || "1",
          }}
        />
      </div>
    </div>
  );
};
