import { MainLayout } from "@/containers/mainLayout";
import { ProductsList } from "@/containers/products/productsList";

export default function Home() {
  return (
    <MainLayout>
      <div className="min-h-[calc(100vh-13rem)] py-6">
        <ProductsList/>
      </div>
    </MainLayout>
  );
}
