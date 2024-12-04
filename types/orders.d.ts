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
// shared pagination for stock, mangement_product and orders page
// totalPrice, createdAt for orders page
// createAt, name, category for products_manager page
// createAt, name, price,quantity for products_manager page
interface ISearchParams {
  sort: "price" | "totalPrice" | "createdAt" | "name" | "category" | "quantity";
  deliveryStatus?: "true" | "false" | "all";
  page: string | undefined;
}
interface INextSearchParams {
  searchParams: Promise<OrdersParams>;
}
