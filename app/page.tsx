import { HeroSection } from "@/containers/home/heroSection";
import { MainLayout } from "@/containers/mainLayout";
import { ProductsList } from "@/containers/products/productsList";
import Image from "next/image";

export default function Home() {
  return (
    <MainLayout>
      <div className="min-h-[calc(100vh-13rem)] py-4 grid gap-y-4">
        <HeroSection/>
        <ProductsList />
      </div>
    </MainLayout>
  );
}
