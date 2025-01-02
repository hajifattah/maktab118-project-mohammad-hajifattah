import {
  addShoppingItemService,
  changeQuantityShoppingItem,
  fetchAllShoppingItemsService,
} from "@/apis/services/shoppingCard.service";
import { IShoppingMongo } from "@/database/models/shopping-card";
import { ShoppingAction } from "@/redux/slices/shoppingSlice";
import { reduxStore } from "@/redux/store";

export const integrateShoppingStateWithDb = async (params: {
  userId: string;
}) => {
  const shoppinListDb = await fetchAllShoppingItemsService(params);
  shoppingChanges(shoppinListDb.list, params.userId);
};

const shoppingChanges = (listDb: IShoppingMongo[], userId: string) => {
  const listState = reduxStore.getState().shopping.list;
  //   every items is in db and add to state or update
  listDb.forEach(async (item) => {
    // if (item.userId !== userId) return;
    const findItem = listState.find((item2) => item2.id === item?.productId);
    if (!findItem) {
      // exist in db but no in state
      reduxStore.dispatch(
        ShoppingAction.addToCard({
          id: item.productId,
          title: item.title,
          price: item.price,
          image: item.image,
          qty: item.qty,
          maxQty: item.maxQty,
          total: item.total,
        })
      );
    } else {
      // exist in db and state
      await changeQuantityShoppingItem({
        productId: item.productId,
        params: { userId },
        quantity: { qty: item.qty + findItem.qty },
      });
      reduxStore.dispatch(
        ShoppingAction.changeQuantity({
          id: item.productId,
          qty: item.qty + findItem.qty,
        })
      );
    }
  });
  //  every items in state but not in db
  listState.forEach(async (item) => {
    const findItem = listDb.find((item2) => item2.productId === item.id);
    if (!findItem) {
      return await addShoppingItemService({
        id: item.id,
        userId: userId,
        title: item.title,
        price: item.price,
        image: item.image,
        qty: item.qty,
        maxQty: item.maxQty,
        total: item.total,
      });
    }
  });
};
