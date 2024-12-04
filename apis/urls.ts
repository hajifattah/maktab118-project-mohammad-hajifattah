import { Category } from "@/components/header/category";

export const urls = {
  auth: {
    login: "/api/auth/login",
  },
  orders: {
    list: "/api/orders",
  },
  users: {
    byId: (id: string) => `/api/users/${id}`,
  },
  products: {
    list: "/api/products",
    image: (title: string) => `/images/products/images/${title}`,
  },
  subCategory:{
    byId: (id:string)=> `/api/subcategories/${id}`
  }
};
