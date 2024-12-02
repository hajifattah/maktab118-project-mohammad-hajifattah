import { SideBarAdmin } from "@/components/admin/sideBarAdmin";

const AdminLayout: React.FC<IChildren> = ({ children }) => {
  return (
    <div className="flex">
      <SideBarAdmin />
      <div className="w-full ">{children}</div>
    </div>
  );
};
export default AdminLayout;
