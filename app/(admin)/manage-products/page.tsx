import { ProductsList } from "@/containers/admin/manageProduct/ProductsList";

const ManageProductsPage: React.FC = () => {
  return (
    <div className="bg-blue_app h-[calc(100vh-7.75rem)] overflow-y-auto rounded-md">
      <div className="flex justify-between border-b-2 py-2 min-h-[4.25rem] px-2 sm:px-3 font-semibold bg-blue_app_menu">
        <h2 className="py-3 px-2 sm:px-3 rounded-t-md">مدیریت کالاها</h2>
        <button className="py-3 px-2 sm:px-3 rounded-t-md font-medium text-blue-500 hover:text-blue-300 hover:bg-slate-500 hover:border-b-2 ">
          افزودن کالا
        </button>
      </div>
      <ProductsList />
    </div>
  );
};
export default ManageProductsPage;
