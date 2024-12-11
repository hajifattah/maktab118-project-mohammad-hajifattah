import { fetchProductsService } from "@/apis/services/products.service";
import { ProductCard } from "@/components/productCard";

export const ProductsList: React.FC<{
  params: ISearchParams;
  categoryId: string;
  isSubCat?: boolean;
}> = async ({ params, categoryId, isSubCat = false }) => {
  const paramsApi = isSubCat
    ? {
        limit: params.limit,
        subcategory: categoryId,
        page: Number(params.page),
        sort: params.sort,
      }
    : {
        limit: params.limit,
        category: categoryId,
        page: Number(params.page),
        sort: params.sort,
      };
  const response = await fetchProductsService(paramsApi);
  return (
    <div className="grid sm:!grid-cols-2 lg:!grid-cols-3 2xl:!grid-cols-4 gap-6 mt-2">
      {response.data.products.map((item) => (
        <ProductCard key={item._id} {...item} isHome={false} />
      ))}
    </div>
  );
};
