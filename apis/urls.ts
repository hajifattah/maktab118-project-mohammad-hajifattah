
export const urls = {
  auth: {
    login: "/api/auth/login",
    token: "/api/auth/token",
    signup: "/api/auth/signup"
  },
  orders: {
    list: "/api/orders",
  },
  users: {
    byId: (id: string) => `/api/users/${id}`,
    details: (id:string)=>`/api/users/${id}`,
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
  },
  shoppingCard:{
    list: "/api/shoppingCard",
    addItem: "/api/shoppingCard",
    updateQty: (id: string)=>`/api/shoppingCard/${id}`,
    deleteSingleItem: (id:string)=> `/api/shoppingCard/${id}`,
    deleteAllItems: "/api/shoppingCard",
  }
};