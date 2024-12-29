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
// totalPrice, createdAt, limit for orders page
// createAt, name, category, limit for products_manager page
// createAt, name, price,quantity, limit for products_manager page
// userId for routeHandler for shoppingCard
interface ISearchParams {
  sort: "price" | "totalPrice" | "createdAt" | "name" | "category" | "quantity" | "-createdAt";
  limit: "5" | "10" | "15";
  deliveryStatus?: "true" | "false" | "all";
  page: string | undefined;
  userId?: string;
}

interface INextPageParams<T={slug:string}> {
  searchParams: Promise<ISearchParams>;
  params: Promise<T>;
}
