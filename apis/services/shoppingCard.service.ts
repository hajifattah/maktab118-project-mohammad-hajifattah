"use server"
import { IShoppingMongo } from "@/database/models/shopping-card";
import shoppingInstance from "../shoppingInstance";
import { urls } from "../urls";
import { revalidateTag } from "next/cache";

type AddShoppingItemService = (body: IShopping) => Promise<IShoppingMongo>;
export const addShoppingItemService: AddShoppingItemService = async (body) => {
  const response = await shoppingInstance.post(urls.shoppingCard.addItem, body);
      revalidateTag("shopping-list-server")
  return response.data;
};
type FetchAllShoppingItemsService = () => Promise<{ list: IShoppingMongo[] }>;
export const fetchAllShoppingItemsService: FetchAllShoppingItemsService =
  async () => {
    const response = await shoppingInstance.get(urls.shoppingCard.list);
    return response.data;
  };
type fetchAllShoppingItemsServiceFetch = () => Promise<{ list: IShoppingMongo[] }>;
export const fetchAllShoppingItemsServiceFetch: fetchAllShoppingItemsServiceFetch =
  async () => {
    const response = await fetch(
      `http://localhost:3000${urls.shoppingCard.list}`,
      { method: "GET", next: { tags: ["shopping-list-server"] } }
    );
    const list = await response.json()
    return list;
  };
type RemoveSigleShoppingItem = (
  productId: string
) => Promise<{ message: string }>;
export const removeSigleShoppingItem: RemoveSigleShoppingItem = async (
  productId
) => {
  const response = await shoppingInstance.delete(
    urls.shoppingCard.deleteSingleItem(productId)
  );
  revalidateTag("shopping-list-server")
  return response.data;
};

type ChangeQuantityShoppingItem = ({
  productId,
  quantity,
}: {
  productId: string;
  quantity: { qty: number };
}) => Promise<IShoppingMongo>;
export const changeQuantityShoppingItem: ChangeQuantityShoppingItem = async ({
  productId,
  quantity,
}) => {
  const response = await shoppingInstance.patch(
    urls.shoppingCard.updateQty(productId),
    quantity
  );
  return response.data;
};
