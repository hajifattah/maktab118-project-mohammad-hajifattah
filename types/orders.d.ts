interface IOrder {
  _id: string;
  user: string;
  products: [
    {
      product: string;
      count: number;
      _id: string;
    }
  ];
  totalPrice: number;
  deliveryDate: string;
  deliveryStatus: boolean;
  createdAt: string;
  updatedAt: string;
}

interface IOrdersResDto extends IResDto {
  data: { orders: IOrder[] };
}

interface ISearchParams {
  sort: "price" | "name" | "category" | "createdAt";
  deliveryStatus?: "true" | "false" | "all";
  page: string | undefined;
}
interface INextSearchParams {
  searchParams: Promise<OrdersParams>;
}
