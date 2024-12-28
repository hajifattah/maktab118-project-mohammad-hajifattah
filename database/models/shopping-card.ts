import mongoose, { ObjectId } from "mongoose";

export interface IShoppingMongo extends Omit<IShopping, "id"> {
  _id: ObjectId;
}

const shoppingCardSchema = new mongoose.Schema<IShoppingMongo>({
  title: String,
  price: Number,
  image: String,
  qty: Number,
  maxQty: Number,
  total: Number,
});

export const ShoppingModel = mongoose.model("ShoppingCard",shoppingCardSchema);