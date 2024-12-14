import { SortProducts } from "@/components/products/sortProducts";
import { Categories } from "@/containers/products/categories";
import { ProductsList } from "@/containers/products/productsList";
import { Suspense } from "react";

const SubCategoryPage: React.FC<INextPageParams<{ id: string }>> = async ({
  params,
  searchParams,
}) => {
  const categoryId = (await params).id;
  const query = await searchParams;
  return (
    <div className="flex gap-x-3">
      <Categories catOrSubCatId={categoryId} />
      <div className="w-[65%] sm:w-full">
        <SortProducts {...query} />
        <Suspense fallback={<h2 className="p-6">is loading...</h2>}>
          <ProductsList
            categoryId={categoryId}
            isSubCat={true}
            params={query}
          />
        </Suspense>
      </div>
    </div>
  );
};
export default SubCategoryPage;
