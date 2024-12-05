import { urls } from "@/apis/urls";

type IGetProductImageSorce = (title: string) => string;
export const getProductImageSorce: IGetProductImageSorce = (title) => {
  const ImageSrc =
    process.env.NEXT_PUBLIC_BASE_URL + urls.products.image(title);
  return ImageSrc;
};

type IGetCategoryImageSorce = (title: string) => string;
export const getCategoryImageSorce: IGetCategoryImageSorce = (title) => {
  const ImageSrc =
    process.env.NEXT_PUBLIC_BASE_URL + urls.category.image(title);
  return ImageSrc;
};
