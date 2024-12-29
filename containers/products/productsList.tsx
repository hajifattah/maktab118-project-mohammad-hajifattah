import { fetchProductsService } from "@/apis/services/products.service";
import { fetchAllShoppingItemsService, fetchAllShoppingItemsServiceFetch } from "@/apis/services/shoppingCard.service";
import { LimitInPage } from "@/components/admin/limitPage";
import { Pagination } from "@/components/admin/orders/pagination";
import { ProductCardCSR } from "@/components/productCard";

export const ProductsList: React.FC<{
  params: ISearchParams;
  categoryId: string;
  isSubCat?: boolean;
}> = async ({ params, categoryId, isSubCat = false }) => {
  const paramsApi = isSubCat
    ? {
        limit: params.limit || "10",
        subcategory: categoryId === "all" ? undefined : categoryId,
        page: Number(params.page),
        sort: params.sort,
      }
    : {
        limit: params.limit || "10",
        category: categoryId === "all" ? undefined : categoryId,
        page: Number(params.page),
        sort: params.sort,
      };
  const response = await fetchProductsService(paramsApi);
  return (
    <div className=" min-h-[calc(100%-5.75rem)] h-[calc(100vh-6rem)] lg:h-[calc(100vh-4rem)] grid gap-y-3 content-between">
      <div className="grid sm:!grid-cols-2 lg:!grid-cols-3 2xl:!grid-cols-4 gap-6 mt-3 overflow-auto">
        {response.data.products.map((item) => (
          <ProductCardCSR key={item._id} {...item} isHome={false} />
        ))}
      </div>
      <div className="flex flex-wrap items-start xs_app:items-end gap-x-3 gap-y-2 b-2 overflow-x-auto">
        <Pagination
          totalPage={response.total_pages}
          params={{
            ...params,
            limit: params.limit || "10",
            page: params.page || "1",
            sort: !params.sort ? "-createdAt" : params.sort,
          }}
          inAdmin={false}
        />
        <LimitInPage
          params={{
            ...params,
            limit: params.limit || "10",
            page: params.page || "1",
            sort: !params.sort ? "-createdAt" : params.sort,
          }}
          inAdmin={false}
        />
      </div>
    </div>
  );
};
