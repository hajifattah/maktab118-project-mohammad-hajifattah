import { AddProductForm } from "@/containers/admin/manageProduct/productForm";
import { ProductsList } from "@/containers/admin/manageProduct/ProductsList";
import { Suspense } from "react";

const ManageProductsPage: React.FC<INextSearchParams> = async ({
  searchParams,
}) => {
  const params = await searchParams;
  return (
    <div className="bg-blue_app h-[calc(100vh-7.75rem)] overflow-y-auto rounded-md">
      <div className="flex justify-between border-b-2 py-2 min-h-[4.25rem] px-2 sm:px-3 font-semibold bg-blue_app_menu">
        <h2 className="py-3 px-2 sm:px-3 rounded-t-md">مدیریت کالاها</h2>
        <AddProductForm/>
      </div>
      <Suspense fallback={<h2 className="p-6">is loading...</h2>}>
        <ProductsList {...params} />
      </Suspense>
    </div>
  );
};
export default ManageProductsPage;
