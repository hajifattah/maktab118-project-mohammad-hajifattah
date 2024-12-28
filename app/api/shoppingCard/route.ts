"use server";

import { fetchSingleProductService } from "@/apis/services/products.service";
import {
  addToShoppingCard,
  deleteAllShoppingItems,
  fetchShoppingList,
} from "@/servers/services_shopping_card/shoppingCard.service";

export async function GET() {
  return Response.json(await fetchShoppingList());
}

export async function POST(request: Request) {
  let body: IShopping;
  try {
    body = await request.json();
    await fetchSingleProductService(body.id);
  } catch (error) {
    return new Response((error as Error).message, { status: 400 });
  }
  const { id, ...newBody } = body;
  return Response.json(await addToShoppingCard(newBody));
}

export async function DELETE() {
  try {
    return Response.json(await deleteAllShoppingItems());
  } catch (error) {
    return new Response((error as Error).message, { status: 400 });
  }
}
