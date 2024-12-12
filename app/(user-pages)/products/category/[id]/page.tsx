import { Categories } from "@/containers/products/categories";
import { ProductsList } from "@/containers/products/productsList";
import { Suspense } from "react";

const CategoryPage: React.FC<INextPageParams<{ id: string }>> = async ({
  params,
  searchParams,
}) => {
  const categoryId = (await params).id;
  const query = await searchParams;
  return (
    <div className="flex gap-x-3">
      <Categories catOrSubCatId={categoryId} />
      <div className="w-[65%] sm:w-full">
        <h2 className="font-semibold md:text-lg py-2 border-b-2 text-center">
          محصولات براساس دسته بندی ها
        </h2>
        <Suspense fallback={<h2 className="p-6">is loading...</h2>}>
          <ProductsList categoryId={categoryId} params={query} />
        </Suspense>
      </div>
    </div>
  );
};
export default CategoryPage;
