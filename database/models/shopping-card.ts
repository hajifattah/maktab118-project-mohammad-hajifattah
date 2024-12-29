import mongoose, { ObjectId } from "mongoose";

export interface IShoppingMongo extends Omit<IShopping, "id"> {
  _id: ObjectId;
  productId: string;
}

const shoppingCardSchema = new mongoose.Schema<IShoppingMongo>({
  productId: String,
  title: String,
  price: Number,
  image: String,
  qty: Number,
  maxQty: Number,
  total: Number,
});

export const ShoppingModel = mongoose.model("ShoppingCard",shoppingCardSchema);