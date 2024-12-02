import { NavAdmin } from "@/components/admin/navAdmin";
import { SideBarAdmin } from "@/components/admin/sideBarAdmin";

const AdminLayout: React.FC<IChildren> = ({ children }) => {
  return (
    <div className="flex ">
      <SideBarAdmin />
      <div className="w-full ">
        <NavAdmin />
        <div className="px-3 sm:px-8 py-4 mx-auto max-w-screen-2xl">
        {children}
        </div>
      </div>
    </div>
  );
};
export default AdminLayout;
