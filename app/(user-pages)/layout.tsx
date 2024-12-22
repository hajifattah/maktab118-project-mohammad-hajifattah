import { MainLayout } from "@/containers/mainLayout";

const RouteLayout: React.FC<IChildren> = ({children}) => {
  return (
    <MainLayout>
      {/* <PageRoute/> */}
      {children}
    </MainLayout>
  );
};
export default RouteLayout;