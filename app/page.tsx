import { MainLayout } from "@/containers/mainLayout";

export default function Home() {
  return (
    <MainLayout>
      <div className="min-h-[calc(100vh-13rem)]">
        <h2 className="text-center py-2 leading-3">صفحه اصلی</h2>
        <h2 className="text-center py-2 leading-3">لیست محصولات</h2>
      </div>
    </MainLayout>
  );
}
