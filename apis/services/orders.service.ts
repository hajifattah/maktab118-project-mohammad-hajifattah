import { axiosInstance } from "../instance";
import { urls } from "../urls";

type OrdersService = ({
  deliveryStatus,
  page,
  sort,
  limit,
}: {
  deliveryStatus?: boolean;
  page?: number;
  sort: string;
  limit: string;
  user?: string;
}) => Promise<IOrdersResDto>;
export const ordersService: OrdersService = async ({
  deliveryStatus,
  page = 1,
  sort,
  limit,
  user,
}) => {
  const params =
    deliveryStatus !== undefined
      ? { deliveryStatus, page, sort, limit, user }
      : { page, sort, limit, user };
  const instance = axiosInstance();
  const response = await instance.get(urls.orders.list, { params });
  return response.data;
};

type CreateOrderService = (body: IOrderReq) => Promise<IOrderResSingleDto>;
export const createOrderService: CreateOrderService = async (body) => {
  const instance = axiosInstance();
  const response = await instance.post(urls.orders.add, body);
  return response.data;
};

type DeliveryOrderService = (
  id: string,
  body: {
    deliveryDate: string;
  }
) => Promise<IOrderResSingleDto>;
export const deliveryOrderService: DeliveryOrderService = async (id, body) => {
  const instance = axiosInstance();
  const response = await instance.patch(urls.orders.edit(id), {
    ...body,
    deliveryStatus: true,
  });
  return response.data;
};
