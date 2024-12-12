interface IProduct {
  _id: string;
  category: string;
  subcategory: string;
  name: string;
  price: number;
  quantity: number;
  brand: string;
  description: string;
  thumbnail: string;
  images: string[];
  slugname: string;
}

interface IProductsDto extends IResDto {
  data: { products: IProduct[] };
}

interface IProductForm {
  name: string;
  category: string;
  subCategory: string;
  description: string;
  quantity: string;
  price: string;
  images: File[];
  brand: string;
}

interface IQuantityPriceForm {
  quantity: string;
  price: string;
}

interface IPairIDs {
  pair: IQuantityPriceForm;
  id: string;
  name: string;
}

interface ISingleProduct {
  rating: {
    rate: number;
    count: number;
  };
  _id: string;
  category: {
    _id: string;
    name: string;
    icon: string;
    createdAt: string;
    updatedAt: string;
    slugname: string;
    __v: number;
  };
  subcategory: {
    _id: string;
    category: string;
    name: string;
    createdAt: string;
    updatedAt: string;
    slugname: string;
    __v: number;
  };
  name: string;
  price: number;
  quantity: number;
  brand: "4";
  description: string;
  thumbnail: string;
  images: string[];
  createdAt: string;
  updatedAt: string;
  slugname: string;
  __v: number;
}

interface ISingleProductDto {
  status: string;
  data: { product: ISingleProduct };
}
