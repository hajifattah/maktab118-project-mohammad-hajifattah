import instance from "../client.instance";
import { urls } from "../urls";

type CreateOrderService = (body: IOrderReq) => Promise<IOrderResSingleDto>;
export const createOrderService: CreateOrderService = async (body) => {
  const response = await instance.post(urls.orders.add, body);
  return response.data;
};
