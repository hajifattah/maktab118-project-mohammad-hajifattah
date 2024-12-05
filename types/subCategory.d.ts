interface ISingleSubCategory {
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
  name: string;
  createdAt: string;
  updatedAt: string;
  slugname: string;
  __v: number;
}
  
interface ISubCategoryResDto {
  status: string;
  data: { subcategory: ISingleSubCategory };
}

interface ISubCategory {
  _id: string;
  category: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  slugname: string;
}

interface ISubCategoryListDto extends IResDto {
  data: {
    subcategories: ISubCategory[];
  };
}
