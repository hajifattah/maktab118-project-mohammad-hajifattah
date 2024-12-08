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

  interface IProductForm{
    name : string;
    category : string;
    subCategory : string;
    description : string;
    quantity : string;
    price : string;
    images : File[];
    brand:string
  }