import { ordersService } from "@/apis/services/orders.service";
import { OrderListCard } from "@/components/admin/orders/orderListCard";
import { Pagination } from "@/components/admin/orders/pagination";
import Link from "next/link";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

export const OrdersList: React.FC<ISearchParams> = async ({
  deliveryStatus,
  page,
  sort,
}) => {
  const params = {
    deliveryStatus:
      deliveryStatus === "true"
        ? true
        : deliveryStatus === "false"
        ? false
        : undefined,
    page: Number(page) || 1,
    sort: sort || "createdAt",
  };
  let response = await ordersService(params);
  return (
    <div className="px-3 xs_app:px-6 py-4 min-h-[calc(100%-5.75rem)] grid content-between">
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
                  })}`}className="flex gap-x-3 items-center hover:text-white"
                >
                  <MdOutlineKeyboardArrowUp className="size-5 sm:size-7 shrink-0  "/>
                  مبلغ کل سفارش{" "}
                </Link>
              </th>
              <th className="px-6 py-3">
                <Link
                  href={`?${new URLSearchParams({
                    deliveryStatus: deliveryStatus || "all",
                    sort: "createdAt",
                  })}`}className="flex gap-x-3 items-center hover:text-white"
                >
                  <MdOutlineKeyboardArrowUp className="size-5 sm:size-7 shrink-0  "/>
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
      <Pagination
        totalPage={response.total_pages}
        params={{
          deliveryStatus: deliveryStatus || "all",
          page: page || "1",
          sort: sort || "createdAt",
        }}
      />
    </div>
  );
};
