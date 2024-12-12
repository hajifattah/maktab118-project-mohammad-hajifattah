import { fetchProductsService } from "@/apis/services/products.service";
import { LimitInPage } from "@/components/admin/limitPage";
import { ProductListCard } from "@/components/admin/manageProduct/productListCard";
import { Pagination } from "@/components/admin/orders/pagination";
import Link from "next/link";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

export const ProductsList: React.FC<ISearchParams> = async ({
  page,
  sort,
  limit,
}) => {
  const params = {
    page: Number(page) || 1,
    sort: sort || "createdAt",
    limit: limit || "5",
  };
  const productsList = await fetchProductsService(params);
  return (
    <div className="px-3 xs_app:px-6 py-4 min-h-[calc(100%-5.75rem)] h-[calc(100vh-12rem)] grid gap-y-3 content-between">
      <div className="overflow-x-auto shadow-md sm:rounded-lg ">
        <table className="w-full text-sm text-left rtl:text-right text-gray-400">
          <thead className="text-xs bg-gray-700 text-gray-400">
            <tr>
              <th className="px-6 py-3">تصویر</th>
              <th className="px-6 py-3">
                <Link
                  href={`?${new URLSearchParams({
                    sort: "name",
                    limit: limit || "5",
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
                    sort: "category",
                    limit: limit || "5",
                  })}`}
                  className="flex gap-x-3 items-center hover:text-white"
                >
                  <MdOutlineKeyboardArrowUp className="size-5 sm:size-7 shrink-0  " />
                  دسته بندی{" "}
                </Link>
              </th>
              <th className="px-6 py-3 text-center md:text-start">عملیات</th>
            </tr>
          </thead>
          <tbody>
            {productsList.data.products.map((item) => {
              return <ProductListCard key={item._id} data={item} />;
            })}
          </tbody>
        </table>
      </div>
      <div className="flex flex-wrap items-start xs_app:items-end gap-x-3 gap-y-2 b-2 overflow-x-auto">
        <Pagination
          totalPage={productsList.total_pages}
          params={{ ...params, page: page || "1" }}
        />
        <LimitInPage params={{ ...params, page: page || "1" }} />
      </div>
    </div>
  );
};
