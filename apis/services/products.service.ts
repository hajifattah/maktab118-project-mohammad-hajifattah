import { clientAxiosInstance } from "../client.instance";
import { axiosInstance } from "../instance";
import { urls } from "../urls";

type FetchProductsService = ({
  sort,
  page,
  limit,
}: {
  sort?: string;
  page?: number;
  limit: string;
}) => Promise<IProductsDto>;
export const fetchProductsService: FetchProductsService = async ({
  sort = "createAt",
  page = 1,
  limit,
}) => {
  const instance = axiosInstance();
  const response = await instance.get(urls.products.list, {
    params: { sort, page, limit },
  });
  return response.data;
};

type AddProductService = (values: FormData) => Promise<{ status: string }>;
export const addProductService: AddProductService = async (values) => {
  const instance = clientAxiosInstance();
  const response = await instance.post(urls.products.addProduct, values);
  return response.data;
};
