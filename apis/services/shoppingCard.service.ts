import { IShoppingMongo } from "@/database/models/shopping-card";
import shoppingInstance from "../shoppingInstance";
import { urls } from "../urls";

type AddShoppingItemService = (body: IShopping) => Promise<IShoppingMongo>;
export const addShoppingItemService: AddShoppingItemService = async (body) => {
  const response = await shoppingInstance.post(urls.shoppingCard.addItem, body);
  return response.data;
};
type FetchAllShoppingItemsService = () => Promise<{list:IShoppingMongo[]}>;
export const fetchAllShoppingItemsService: FetchAllShoppingItemsService =
  async () => {
    const response = await shoppingInstance.get(urls.shoppingCard.list);
    return response.data;
  };
type RemoveSigleShoppingItem = (id:string)=> Promise<{ message: string }>
  export const removeSigleShoppingItem : RemoveSigleShoppingItem = async(id)=>{
    console.log(id)
    const response = await shoppingInstance.delete(urls.shoppingCard.deleteSingleItem(id));
    return response.data
  }
