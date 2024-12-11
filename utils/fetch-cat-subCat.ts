import { fetchCategoryListService } from "@/apis/services/category.service";
import { fetchSubCatListService } from "@/apis/services/subCategory.service";

export const GetSubCatAndCat = async () => {
  const response = await fetchSubCatListService();
  const subCatList = response.data.subcategories;
  const responseTwo = await fetchCategoryListService();
  const catList = responseTwo.data.categories;
  return { subCatList, catList };
};
