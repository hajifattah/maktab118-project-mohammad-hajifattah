import { Category } from "@/components/header/category";

export const urls = {
  auth: {
    login: "/api/auth/login",
    token: "/api/auth/token"
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
    addProduct: "/api/products",
    deleteProduct: (id:string)=> `/api/products/${id}`,
    updateProduct: (id: string)=>`/api/products/${id}`,
    getById : (id : string)=>`/api/products/${id}`
  },
  subCategory:{
    byId: (id:string)=> `/api/subcategories/${id}`,
    list : `/api/subcategories`
  },
  category:{
    list : `/api/categories`,
    image: (title: string) => `/images/categories/icons/${title}`,
  }
};
