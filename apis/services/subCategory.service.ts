import { axiosInstance } from "../instance";
import { urls } from "../urls";

type IFetchSubCatByIdService = (id: string) => Promise<ISubCategoryResDto>;
export const fetchSubCatByIdService: IFetchSubCatByIdService = async (
  id
) => {
  const instance = axiosInstance();
  const response = await instance.get(urls.subCategory.byId(id));
  return response.data;
};