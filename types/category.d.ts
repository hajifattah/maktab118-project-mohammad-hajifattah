interface ICategoryListDto extends IResDto {
  data: { categories: ICategory[] };
}

interface ICategory {
  _id: string;
  name: string;
  icon: string;
  createdAt: string;
  updatedAt: string;
  slugname: string;
}
