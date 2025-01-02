import { connectToDataBase } from "@/database/connection";
import { IShoppingMongo, ShoppingModel } from "@/database/models/shopping-card";

connectToDataBase();

type FetchShoppingList = (
  _userId: string
) => Promise<{ list: IShoppingMongo[] }>;
export const fetchShoppingList: FetchShoppingList = async (_userId) => {
  const response = await ShoppingModel.find({ userId:_userId });
  return { list: response };
};

type AddToShoppingCard = (
  body: Omit<IShopping, "id"> & { productId: string; userId: string }
) => Promise<IShoppingMongo>;
export const addToShoppingCard: AddToShoppingCard = async (body) => {
  const newItem = new ShoppingModel(body);
  return await newItem.save();
};

type EditQuantity = (
  id: string,
  quantity: number,
  _userId: string
) => Promise<IShoppingMongo | undefined>;
export const updateQuantity: EditQuantity = async (id, quantity,_userId) => {
  const item = await ShoppingModel.findOne({ productId: id,userId:_userId });
  if (!item) return;
  item.set({ qty: quantity, total: quantity * item.price });
  return await item.save();
};

type DeleteSingleShoppingItem = (id: string,_userId:string) => Promise<{ message: string }>;
export const deleteSingleShoppingItem: DeleteSingleShoppingItem = async (
  id,_userId
) => {
  const result = await ShoppingModel.deleteOne({ productId: id ,userId:_userId});
  const msg = !!result.deletedCount ? "Delete successfully" : "Delete failed";
  return { message: msg };
};

type DeleteAllShoppingItems = (_userId:string) => Promise<{ message: string }>;
export const deleteAllShoppingItems: DeleteAllShoppingItems = async (_userId) => {
  const result = await ShoppingModel.deleteMany({userId:_userId});
  const msg = !!result.deletedCount ? "All Items Deleted" : "Delete failed";
  return { message: msg };
};
