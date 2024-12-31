"use server";
import { IShoppingMongo } from "@/database/models/shopping-card";
import shoppingInstance from "../shoppingInstance";
import { urls } from "../urls";

type AddShoppingItemService = (
  body: IShopping & { userId: string }
) => Promise<IShoppingMongo>;
export const addShoppingItemService: AddShoppingItemService = async (body) => {
  const response = await shoppingInstance.post(urls.shoppingCard.addItem, body);
  return response.data;
};
type FetchAllShoppingItemsService = (params: {
  userId: string;
}) => Promise<{ list: IShoppingMongo[] }>;
export const fetchAllShoppingItemsService: FetchAllShoppingItemsService =
  async (params) => {
    const response = await shoppingInstance.get(urls.shoppingCard.list, {
      params,
    });
    return response.data;
  };

type RemoveSigleShoppingItem = ({
  productId,
  params,
}: {
  productId: string;
  params: { userId: string };
}) => Promise<{ message: string }>;
export const removeSigleShoppingItem: RemoveSigleShoppingItem = async ({
  productId,
  params,
}) => {
  const response = await shoppingInstance.delete(
    urls.shoppingCard.deleteSingleItem(productId),
    { params }
  );
  return response.data;
};

type ChangeQuantityShoppingItem = ({
  productId,
  quantity,
  params,
}: {
  productId: string;
  quantity: { qty: number };
  params: { userId: string };
}) => Promise<IShoppingMongo>;
export const changeQuantityShoppingItem: ChangeQuantityShoppingItem = async ({
  productId,
  quantity,
  params,
}) => {
  const response = await shoppingInstance.patch(
    urls.shoppingCard.updateQty(productId),
    quantity,
    { params }
  );
  return response.data;
};

type RemoveShoppingListService = (
  userId: string
) => Promise<{ message: string }>;
export const removeShoppingListService : RemoveShoppingListService = async (userId) => {
  const response = await shoppingInstance.delete(
    urls.shoppingCard.deleteAllItems,
    { params: { userId } }
  );
  return response.data;
};
