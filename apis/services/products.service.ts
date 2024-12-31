"use server";
import { axiosInstance } from "../instance";
import { urls } from "../urls";

type FetchProductsService = ({
  sort,
  page,
  limit,
  category,
}: {
  category?: string;
  subcategory?: string;
  sort?: string;
  page?: number;
  limit: string;
}) => Promise<IProductsDto>;
export const fetchProductsService: FetchProductsService = async ({
  sort = "-createdAt",
  page = 1,
  limit,
  category,
  subcategory,
}) => {
  const instance = axiosInstance();
  const response = await instance.get(urls.products.list, {
    params: {
      sort,
      page,
      limit,
      category,
      subcategory,
    },
  });
  return response.data;
};

type FetchSingleProductService = (pId: string) => Promise<ISingleProductDto>;
export const fetchSingleProductService: FetchSingleProductService = async (
  pId
) => {
  const instance = axiosInstance();
  const response = await instance.get(urls.products.getById(pId));
  return response.data;
};

type FetchSingleProductListService = (
  pId: string[]
) => Promise<ISingleProductDto[]>;
export const fetchSingleProductListService: FetchSingleProductListService =
  async (pId) => {
    const instance = axiosInstance();
    const req = pId.map((id) => instance.get(urls.products.getById(id)));
    const allResponse = await Promise.all(req);
    const usableResponses: ISingleProductDto[] = [];
    for (const item of allResponse) {
      usableResponses.push(item.data);
    }
    return usableResponses;
  };
