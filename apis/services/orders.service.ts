import { axiosInstance } from "../instance";
import { urls } from "../urls";

type OrdersService = ({
  deliveryStatus,
  page,
  sort,
}: {
  deliveryStatus?: boolean;
  page?: number;
  sort: string;
}) => Promise<IOrdersResDto>;
export const ordersService: OrdersService = async ({
  deliveryStatus,
  page = 1,
  sort,
}) => {
  const params =
    deliveryStatus !== undefined
      ? { deliveryStatus, page, sort }
      : { page, sort };
  const instance = axiosInstance();
  const response = await instance.get(urls.orders.list, { params });
  return response.data;
};
