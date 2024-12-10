import { ProductCard } from "@/components/productCard";
import { CgArrowLeft } from "react-icons/cg";

export const HomeProductsList: React.FC<{ text: string }> = ({ text }) => {
  return (
    <>
      <div className="flex justify-between items-center">
        <h2 className="font-semibold text-lg sm:text-2xl">{text}</h2>
        <button className="font-semibold text-xs sm:text-sm text-green_app">
          مشاهده همه
          <CgArrowLeft className="inline-block size-4 sm:size-6 mr-1" />
        </button>
      </div>

      <div className="grid xs_app:grid-cols-2 md:!grid-cols-4 xl:!grid-cols-6 border">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <ProductCard key={item} />
        ))}
      </div>
    </>
  );
};
