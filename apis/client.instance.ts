import { getToken } from "@/utils/session-manager";
import axios from "axios";

export const clientAxiosInstance = () => {
  const token = getToken()?.split("");
  token?.splice(20, 3);
  return axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    headers: { Authorization: `Bearer ${token?.join("")}` },
  });
};
