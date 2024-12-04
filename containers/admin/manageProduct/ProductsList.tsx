import { fetchProductsService } from "@/apis/services/products.service";
import { ProductListCard } from "@/components/admin/manageProduct/productListCard";
import { Pagination } from "@/components/admin/orders/pagination";

export const ProductsList: React.FC = async () => {
  const productsList = await fetchProductsService({});
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
            {productsList.data.products.map((item) => {
              return <ProductListCard key={item._id} {...item} />;
            })}
          </tbody>
        </table>
      </div>
      <Pagination totalPage={productsList.total_pages} params={{ page: "1",sort: "createdAt"}} />
    </div>
  );
};
