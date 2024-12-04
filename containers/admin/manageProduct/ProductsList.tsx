import { ProductListCard } from "@/components/admin/manageProduct/productListCard";
import { Pagination } from "@/components/admin/orders/pagination";

export const ProductsList: React.FC = () => {
  return (
    <div className="px-6 py-4 min-h-[calc(100%-5.75rem)] grid content-between">
      <div className="overflow-x-auto shadow-md sm:rounded-lg ">
        <table className="w-full text-sm text-left rtl:text-right text-gray-400">
          <thead className="text-xs bg-gray-700 text-gray-400">
            <tr>
              <th className="px-6 py-3">تصویر</th>
              <th className="px-6 py-3">نام کالا</th>
              <th className="px-6 py-3">دسته بندی</th>
              <th className="px-6 py-3 text-center">عملیات</th>
            </tr>
          </thead>
          <tbody>
            <ProductListCard />
          </tbody>
        </table>
      </div>
      <Pagination totalPage={5} params={{ page: "2" }} />
    </div>
  );
};
