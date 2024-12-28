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

type EditQuantity = (
  id: string,
  quantity: number
) => Promise<IShoppingMongo | undefined>;
export const updateQuantity: EditQuantity = async (id, quantity) => {
  const item = await ShoppingModel.findById(id);
  if (!item) return;
  item.set({ qty: quantity, total: quantity * item.price });
  return await item.save();
};

type DeleteSingleShoppingItem = (id: string) => Promise<{ message: string }>;
export const deleteSingleShoppingItem: DeleteSingleShoppingItem = async (
  id
) => {
  const result = await ShoppingModel.deleteOne({ _id: id });
  const msg = !!result.deletedCount ? "Delete successfully" : "Delete failed";
  return { message: msg };
};

type DeleteAllShoppingItems = () => Promise<{ message: string }>;
export const deleteAllShoppingItems: DeleteAllShoppingItems = async () => {
  const result = await ShoppingModel.deleteMany();
  const msg = !!result.deletedCount ? "All Items Deleted" : "Delete failed";
  return { message: msg };
};
