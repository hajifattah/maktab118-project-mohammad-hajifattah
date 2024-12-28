"use server";

import {
  addToShoppingCard,
  deleteAllShoppingItems,
  fetchShoppingList,
} from "@/servers/services_shopping_card/shoppingCard.service";

export async function GET() {
  return Response.json(await fetchShoppingList());
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    return Response.json(await addToShoppingCard(body));
  } catch (error) {
    return new Response((error as Error).message, { status: 400 });
  }
}

export async function DELETE() {
  try {
    return Response.json(await deleteAllShoppingItems());
  } catch (error) {
    return new Response((error as Error).message, { status: 400 });
  }
}
