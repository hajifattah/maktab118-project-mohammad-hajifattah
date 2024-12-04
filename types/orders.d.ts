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
// totalPrice, createdAt for orders page
// price, createAt, name, category for products_manager page
interface ISearchParams {
  sort: "price" | "totalPrice" | "createdAt" | "name" | "category";
  deliveryStatus?: "true" | "false" | "all";
  page: string | undefined;
}
interface INextSearchParams {
  searchParams: Promise<OrdersParams>;
}
