"use server"
import { axiosInstance } from "../instance";
import { urls } from "../urls";

type FetchProductsService = ({
  sort,
  page,
  limit,
  category
}: {
  category?: string;
  sort?: string;
  page?: number;
  limit: string;
}) => Promise<IProductsDto>;
export const fetchProductsService: FetchProductsService = async ({
  sort = "-createAt",
  page = 1,
  limit,
  category
}) => {
  const instance = axiosInstance();
  const response = await instance.get(urls.products.list, {
    params: { sort, page, limit, category },
  });
  return response.data;
};

