import { fetchCategoryListService } from "@/apis/services/category.service";
import { fetchSubCatListService } from "@/apis/services/subCategory.service";

export const GetSubCatAndCat = async () => {
  const response = await fetchSubCatListService();
  const subCatList = [...response[0], ...response[1]];
  const responseTwo = await fetchCategoryListService();
  const catList = responseTwo.data.categories;
  return { subCatList, catList };
};
