import { PageRoute } from "@/components/header/pageRoute";
import { MainLayout } from "@/containers/mainLayout";

const RouteLayout: React.FC = () => {
  return (
    <MainLayout>
      <PageRoute/>
      <h2>route layout page</h2>
    </MainLayout>
  );
};
export default RouteLayout;