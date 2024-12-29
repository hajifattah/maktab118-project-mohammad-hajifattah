import {
  deleteSingleShoppingItem,
  updateQuantity,
} from "@/servers/services_shopping_card/shoppingCard.service";

// update quantity and totalprice
export async function PATCH(
  request: Request,
  nextParams: INextPageParams<{ id: string }>
) {
  let quantity: { qty: number };
  let id = "";
  const searchParams = await nextParams.searchParams;
  if (!searchParams.userId)
    return new Response("enter userId Param", { status: 404 });
  try {
    quantity = await request.json();
    id = (await nextParams.params).id;
  } catch (error) {
    return new Response((error as Error).message, { status: 400 });
  }
  if (isNaN(quantity.qty))
    return new Response("تعداد صحیح نمی باشد", { status: 404 });
  const result = await updateQuantity(id, quantity.qty, searchParams.userId);
  if (!result) return new Response("محصول یافت نشد", { status: 404 });
  return Response.json(result);
}

export async function DELETE(
  request: Request,
  nextParams: INextPageParams<{ id: string }>
) {
  const searchParams = await nextParams.searchParams;
  if (!searchParams.userId)
    return new Response("enter userId Param", { status: 404 });
  try {
    const id = (await nextParams.params).id;
    return Response.json(
      await deleteSingleShoppingItem(id, searchParams.userId)
    );
  } catch (error) {
    return new Response((error as Error).message, { status: 400 });
  }
}
