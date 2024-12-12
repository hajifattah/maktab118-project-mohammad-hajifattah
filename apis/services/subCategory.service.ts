import { axiosInstance } from "../instance";
import { urls } from "../urls";

type IFetchSubCatByIdService = (id: string) => Promise<ISubCategoryResDto>;
export const fetchSubCatByIdService: IFetchSubCatByIdService = async (id) => {
  const instance = axiosInstance();
  const response = await instance.get(urls.subCategory.byId(id));
  return response.data;
};

type IFetchSubCatListService = () => Promise<ISubCategoryListDto>;
export const fetchSubCatListService: IFetchSubCatListService = async () => {
  const instance = axiosInstance();
  const response = await instance.get(urls.subCategory.list, {
    params: { limit: 50 },
  });
  return response.data;
};
