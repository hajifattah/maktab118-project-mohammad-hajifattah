"use client"

import { clientAxiosInstance } from "../client.instance";
import { urls } from "../urls";

type AddProductService = (values: FormData) => Promise<{ status: string }>;
export const addProductService: AddProductService = async (values) => {
  const instance = clientAxiosInstance();
  const response = await instance.post(urls.products.addProduct, values);
  return response.data;
};

type DeleteProductService = (id: string) => Promise<{ status: string }>;
export const deleteProductService: DeleteProductService = async (id) => {
  const instance = clientAxiosInstance();
  const response = await instance.delete(urls.products.deleteProduct(id));
  return response.data;
};