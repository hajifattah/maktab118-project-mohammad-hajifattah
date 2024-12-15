import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

const shoppingList = (state:RootState)=>state.shopping.list;
export const findProduct = (id:string)=> createSelector(shoppingList,(list)=> list.find(item=>item.id === id))