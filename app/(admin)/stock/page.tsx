import { StoreStockChanges } from "@/components/admin/stock/stockChanges";
import { StockProductList } from "@/containers/admin/stock/stockProductList";
import { PairStockProvider } from "@/providers/stockPage.provider";
import { Suspense } from "react";

const StockProductPage: React.FC<INextPageParams> = async ({
  searchParams,
}) => {
  const params = await searchParams;
  return (
    <div className="bg-blue_app h-[calc(100vh-7.75rem)] overflow-y-auto rounded-md">
      <PairStockProvider>
        <div className="flex justify-between border-b-2 py-2 min-h-[4.25rem] px-2 sm:px-3 font-semibold bg-blue_app_menu">
          <h2 className="py-3 px-2 sm:px-3 rounded-t-md">
            مدیریت موجودی و قیمت ها
          </h2>
          <StoreStockChanges />
        </div>
        <Suspense fallback={<h2 className="p-6">is loading...</h2>}>
          <StockProductList {...params} />
        </Suspense>
      </PairStockProvider>
    </div>
  );
};
export default StockProductPage;
