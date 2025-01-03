import { fetchCategoryListService } from "@/apis/services/category.service";
import { fetchProductsService } from "@/apis/services/products.service";
import { ProductCardCSR } from "@/components/productCard";
import Link from "next/link";
import { CgArrowLeft } from "react-icons/cg";

export const HomeProductsList: React.FC<{ text: string }> = async ({
  text,
}) => {
  const response = await fetchCategoryListService();
  const category = response.data.categories.find((item) => item.name === text);
  const responseProducts = await fetchProductsService({
    limit: "6",
    category: text === "همه محصولات" ? undefined : category?._id,
    sort: "-createdAt"
  });
  return (
    <>
      <div className="flex justify-between items-center mt-4">
        <h2 className="font-semibold text-lg sm:text-2xl">{text}</h2>
        <Link href={`/products/${category? "category/"+category._id : "category/all"}`}>
          <button className="font-semibold text-xs sm:text-sm text-green_app">
            مشاهده همه
            <CgArrowLeft className="inline-block size-4 sm:size-6 mr-1" />
          </button>
        </Link>
      </div>
      <div className="px-6 ">
        <div className="grid xs_app:grid-cols-2 md:!grid-cols-4 xl:!grid-cols-6 border bg-white">
          {responseProducts.data.products.map((item) => (
            <ProductCardCSR key={item._id} {...item} />
          ))}
        </div>
      </div>
    </>
  );
};
