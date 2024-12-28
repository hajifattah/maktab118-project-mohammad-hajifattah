import axios from "axios";

const shoppingInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_FRONT_SERVER_URL_SHOPPINGCARD,
});
export default shoppingInstance
