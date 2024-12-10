import { Feature } from "@/containers/home/feature";
import { HeroSection } from "@/containers/home/heroSection";
import { HomeProductsList } from "@/containers/home/productsList";
import { MainLayout } from "@/containers/mainLayout";

export default function Home() {
  return (
    <MainLayout>
      <div className="min-h-[calc(100vh-13rem)] py-4 grid gap-y-4">
        <HeroSection />
        <Feature />
        <HomeProductsList text="جدیدترین محصولات" />
        {/* <ProductsList /> */}
      </div>
    </MainLayout>
  );
}
