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
// status for result page
interface ISearchParams {
  sort:
    | "price"
    | "totalPrice"
    | "createdAt"
    | "name"
    | "category"
    | "quantity"
    | "-createdAt";
  limit: "5" | "10" | "15";
  deliveryStatus?: "true" | "false" | "all";
  page: string | undefined;
  status?: "succeeded" | "failed";
}

interface INextPageParams<T = { slug: string }> {
  searchParams: Promise<ISearchParams>;
  params: Promise<T>;
}

interface IOrderReq {
  user: string;
  products: { product: string; count: number }[];
  deliveryDate: string;
}

interface IOrderResSingle {
  user: string;
  products: {
    product: {
      _id: string;
      price: number;
    };
    count: number;
    _id: string;
  }[];
  totalPrice: number;
  deliveryDate: string;
  deliveryStatus: boolean;
  _id: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
interface IOrderResSingleDto extends IResDto {
  data: { orders: IOrderResSingle[] };
}