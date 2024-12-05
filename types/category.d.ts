interface ICategoryListDto extends IResDto {
    data: {
      categories: {
        _id: string;
        name: string;
        icon: string;
        createdAt: string;
        updatedAt: string;
        slugname: string;
      }[];
    };
  }
  