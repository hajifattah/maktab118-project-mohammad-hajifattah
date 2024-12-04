import { axiosInstance } from "../instance";
import { urls } from "../urls";

type FetchProductsService = ({
  sort,
  page,
}: {
  sort?: string
  page?: number;
}) => Promise<IProductsDto>;
export const fetchProductsService: FetchProductsService = async ({
  sort = "createAt",
  page = 1,
}) => {
  const instance = axiosInstance();
  const response = await instance.get(urls.products.list, {
    params: { sort, page },
  });
  return response.data;
};
