import { NavAdmin } from "@/components/admin/navAdmin";
import { SideBarAdmin } from "@/components/admin/sideBarAdmin";
import { AdminGuardProvider } from "@/providers/admin.Guard.Provider";

const AdminLayout: React.FC<IChildren> = ({ children }) => {
  return (
    <AdminGuardProvider>
      <div className="flex ">
        <SideBarAdmin />
        <div className="w-full ">
          <NavAdmin />
          <div className="px-3 sm:px-8 py-4 mx-auto max-w-screen-2xl text-white">
            {children}
          </div>
        </div>
      </div>
    </AdminGuardProvider>
  );
};
export default AdminLayout;
