import {
  deleteRefToken,
  deleteToken,
  getRefToken,
  getToken,
  setToken,
} from "@/utils/session-manager";
import axios from "axios";
import { urls } from "./urls";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});
export default instance;

instance.interceptors.request.use((config) => {
  if (config.url !== "/api/auth/token") {
    const token = getToken()?.split("");
    token?.splice(20, 3);
    config.headers.Authorization = "Bearer " + token?.join("");
  }
  return config;
});

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    if (
      error.status === 500 &&
      error.config.url !== "/api/auth/token" &&
      error.config.url !== "/api/auth/login"
    ) {
      const refToken = getRefToken();
      const response = await instance.post(urls.auth.token, {
        refreshToken: refToken,
      });

      if (response.status === 200) {
        const accessToken = response.data.token.accessToken;
        const newToken = accessToken.split("");
        newToken.splice(20, 0, "i", "a", "d");
        const token = newToken.join("");
        setToken(token);
        error.config.headers.Authorization = "Bearer " + accessToken;
        return instance(error.config);
      } else {
        deleteToken();
        deleteRefToken();
      }
      return Promise.reject(error);
    } else if (
      error.config.url === "/api/auth/token" &&
      error.config.url !== "/api/auth/login"
    ) {
      deleteToken();
      deleteRefToken();

    }
    return Promise.reject(error);
  }
);
