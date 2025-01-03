"use client";

import axios from "axios";
import instance from "../client.instance";
import { urls } from "../urls";

type AddProductService = (values: FormData) => Promise<{ status: string }>;
export const addProductService: AddProductService = async (values) => {
  // const instance = clientAxiosInstance();
  const response = await instance.post(urls.products.addProduct, values);
  return response.data;
};

type DeleteProductService = (id: string) => Promise<{ status: string }>;
export const deleteProductService: DeleteProductService = async (id) => {
  const response = await instance.delete(urls.products.deleteProduct(id));
  return response.data;
};

type UpdateProductService = (
  id: string,
  data: FormData
) => Promise<{ status: string }>;
export const updateProductService: UpdateProductService = async (id, data) => {
  const response = await instance.patch(urls.products.updateProduct(id), data);
  return response.data;
};

type UpdateProductPairsService = (
  pairs: IPairIDs[] | { id: string; body: { quantity: number } }[]
) => Promise<{ status: string }[]>;
export const updateProductPairsService: UpdateProductPairsService = async (
  pairs
) => {
  const reqs = pairs.map((item) =>
    "pair" in item
      ? instance.patch(urls.products.updateProduct(item.id), item.pair)
      : instance.patch(urls.products.updateProduct(item.id), item.body)
  );
  const allResponse = await Promise.all(reqs);
  const usableResponses: { status: string }[] = [];
  for (const item of allResponse) {
    usableResponses.push(item.data);
  }
  return usableResponses;
};

export const convertUrlToFile = async (imageUrl: string[]) => {
  // create fileName
  const imagesNames = imageUrl.map((url) =>
    url.slice(url.lastIndexOf("/") + 1, url.indexOf("."))
  );
  // fetch response
  const reqs = imageUrl.map((url) =>
    axios.get<Blob>(url, { responseType: "blob" })
  );
  const allResponse = await Promise.all(reqs);
  const usableResponses: Blob[] = [];
  for (const item of allResponse) {
    usableResponses.push(item.data);
  }
  // create type
  const mimeTypes = allResponse.map((item) => item.headers[`content-type`]);
  // create files
  const files = usableResponses.map(
    (res, index) =>
      new File([res], imagesNames[index], { type: mimeTypes[index] })
  );

  return files;
};
