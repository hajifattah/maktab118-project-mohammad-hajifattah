import { axiosInstance } from "../instance";
import { urls } from "../urls";

type IFetchSubCatByIdService = (id: string) => Promise<ISubCategoryResDto>;
export const fetchSubCatByIdService: IFetchSubCatByIdService = async (id) => {
  const instance = axiosInstance();
  const response = await instance.get(urls.subCategory.byId(id));
  return response.data;
};

type IFetchSubCatListService = () => Promise<ISubCategory[][]>;
export const fetchSubCatListService: IFetchSubCatListService = async () => {
  const instance = axiosInstance();
  const allResponse = await Promise.all(
    [1,2].map((page) => {
      return instance.get(urls.subCategory.list, {
        params: { page },
      })
    })
  );
  const response : ISubCategory[][] = []
  for (const item of allResponse) {
    response.push(item.data.data.subcategories);
  }
  return response
};
