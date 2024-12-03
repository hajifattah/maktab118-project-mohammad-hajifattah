import { OrderListCard } from "@/components/admin/orders/orderListCard";
import { Pagination } from "@/components/admin/orders/pagination";

export const OrdersList: React.FC = () => {
  return (
    <div className="px-6 py-4 min-h-[calc(100%-5.75rem)] grid content-between">
      <div className="overflow-x-auto shadow-md sm:rounded-lg ">
        <table className="w-full text-sm text-left rtl:text-right text-gray-400">
          <thead className="text-xs bg-gray-700 text-gray-400">
            <tr>
              <th className="px-6 py-3">نام کاربر</th>
              <th className="px-6 py-3">مبلغ کل سفارش</th>
              <th className="px-6 py-3">زمان سفارش</th>
              <th className="px-6 py-3">اطلاعات سفارش</th>
            </tr>
          </thead>
          <tbody>
            <OrderListCard />
            <OrderListCard />
            <OrderListCard />
          </tbody>
        </table>
      </div>
        <Pagination />
    </div>
  );
};
