import mongoose from "mongoose";

let loaded = false;
export const connectToDataBase = async()=>{
    if(loaded) return;
    await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_ATLAS_DATABASE_URL!)
    loaded = true;
}