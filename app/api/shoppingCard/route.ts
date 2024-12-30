"use server";

import { fetchSingleProductService } from "@/apis/services/products.service";
import {
  addToShoppingCard,
  deleteAllShoppingItems,
  fetchShoppingList,
} from "@/servers/services_shopping_card/shoppingCard.service";
import { NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
) {
  const searchParams = request.nextUrl.searchParams;
  const userId = searchParams.get("userId");
  if (!userId)
    return new Response("enter userId Param", { status: 404 });
  return Response.json(await fetchShoppingList(userId));
}

export async function POST(request: Request) {
  let body: IShopping & { userId: string };
  try {
    body = await request.json();
    await fetchSingleProductService(body.id);
  } catch (error) {
    return new Response((error as Error).message, { status: 400 });
  }
  const { id, ...newBody } = body;
  return Response.json(await addToShoppingCard({ ...newBody, productId: id }));
}

export async function DELETE(
  request: NextRequest,
) {
  const searchParams = request.nextUrl.searchParams;
  const userId = searchParams.get("userId");
  if (!userId)
    return new Response("enter userId Param", { status: 404 });
  try {
    return Response.json(await deleteAllShoppingItems(userId));
  } catch (error) {
    return new Response((error as Error).message, { status: 400 });
  }
}
