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
    image: (title: string) => `/images/products/images/${title}`,
  },
};
