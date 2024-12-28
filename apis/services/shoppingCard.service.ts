import { IShoppingMongo } from "@/database/models/shopping-card";
import shoppingInstance from "../shoppingInstance"
import { urls } from "../urls";

type AddShoppingItemService = (body:IShopping)=>Promise<IShoppingMongo>
export const addShoppingItemService : AddShoppingItemService = async (body)=>{
    const instance= shoppingInstance;
    const response = await instance.post(urls.shoppingCard.addItem,body)
    return response.data;
}