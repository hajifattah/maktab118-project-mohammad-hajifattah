import { connectToDataBase } from "@/database/connection";
import { IShoppingMongo, ShoppingModel } from "@/database/models/shopping-card";

connectToDataBase();

type FetchShoppingList = () => Promise<{ list: IShoppingMongo[] }>;
export const fetchShoppingList: FetchShoppingList = async () => {
  const response = await ShoppingModel.find();
  return { list: response };
};

type AddToShoppingCard = (
  body: Omit<IShopping, "id">
) => Promise<IShoppingMongo>;
export const addToShoppingCard: AddToShoppingCard = async (body) => {
  const newItem = new ShoppingModel(body);
  return await newItem.save();
};
