import { fetchProductsService } from "@/apis/services/products.service";
import { Pagination } from "@/components/admin/orders/pagination";
import { StockProductCard } from "@/components/admin/stock/stockProductCard";
import Link from "next/link";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

export const StockProductList: React.FC<ISearchParams> = async ({
  page,
  sort,
}) => {
  const params = { page: Number(page) || 1, sort: sort || "createdAt" };
  const productsList = await fetchProductsService(params);
  return (
    <div className="px-3 xs_app:px-6 py-4 min-h-[calc(100%-5.75rem)] h-[calc(100vh-12rem)] grid content-between">
      <div className="overflow-x-auto shadow-md sm:rounded-lg ">
        <table className="w-full text-sm text-left rtl:text-right text-gray-400">
          <thead className="text-xs bg-gray-700 text-gray-400">
            <tr>
              <th className="px-6 py-3">تصویر</th>
              <th className="px-6 py-3">
                <Link
                  href={`?${new URLSearchParams({
                    sort: "name",
                  })}`}
                  className="flex gap-x-3 items-center hover:text-white"
                >
                  <MdOutlineKeyboardArrowUp className="size-5 sm:size-7 shrink-0  " />
                  نام کالا{" "}
                </Link>
              </th>
              <th className="px-6 py-3">
                <Link
                  href={`?${new URLSearchParams({
                    sort: "price",
                  })}`}
                  className="flex gap-x-3 items-center hover:text-white"
                >
                  <MdOutlineKeyboardArrowUp className="size-5 sm:size-7 shrink-0  " />
                  قیمت{" "}
                </Link>
              </th>
              <th className="px-6 py-3">
                <Link
                  href={`?${new URLSearchParams({
                    sort: "quantity",
                  })}`}
                  className="flex gap-x-3 items-center hover:text-white"
                >
                  <MdOutlineKeyboardArrowUp className="size-5 sm:size-7 shrink-0  " />
                  موجودی{" "}
                </Link>
              </th>
            </tr>
          </thead>
          <tbody>
            {productsList.data.products.map((item) => {
              return <StockProductCard key={item._id} {...item} />;
            })}
          </tbody>
        </table>
      </div>
      <Pagination
        totalPage={productsList.total_pages}
        params={{ page: page || "1", sort: sort || "createdAt" }}
      />
    </div>
  );
};
