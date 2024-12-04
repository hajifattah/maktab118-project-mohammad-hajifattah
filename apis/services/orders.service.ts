import { axiosInstance } from "../instance";
import { urls } from "../urls";

type OrdersService = ({
  deliveryStatus,
  page,
}: {
  deliveryStatus?: boolean;
  page?: number;
}) => Promise<IOrdersResDto>;
export const ordersService: OrdersService = async ({
  deliveryStatus,
  page = 1,
}) => {
  const params = deliveryStatus !== undefined ? { deliveryStatus, page } : { page };
  const instance = axiosInstance();
  const response = await instance.get(urls.orders.list, { params });
  return response.data;
};
