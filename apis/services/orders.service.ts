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
}) => Promise<IOrdersResDto>;
export const ordersService: OrdersService = async ({
  deliveryStatus,
  page = 1,
  sort,
  limit,
}) => {
  const params =
    deliveryStatus !== undefined
      ? { deliveryStatus, page, sort, limit }
      : { page, sort, limit };
  const instance = axiosInstance();
  const response = await instance.get(urls.orders.list, { params });
  return response.data;
};
