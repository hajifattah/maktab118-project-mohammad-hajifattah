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
  user
}) => {
  const params =
    deliveryStatus !== undefined
      ? { deliveryStatus, page, sort, limit, user }
      : { page, sort, limit, user };
  const instance = axiosInstance();
  const response = await instance.get(urls.orders.list, { params });
  return response.data;
};
