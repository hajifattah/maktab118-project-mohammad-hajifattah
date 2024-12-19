import instance from "../client.instance";
import { axiosInstance } from "../instance";
import { urls } from "../urls";

type ILoginService = (id: string) => Promise<IUserDto>;
export const fetchUserByIdService: ILoginService = async (id) => {
  const instance = axiosInstance();
  const response = await instance.get(urls.users.byId(id));
  return response.data;
};

type IEditUserService = (data: IUserResINfo) => Promise<IUserDto>;
export const editUserService: IEditUserService = async (data) => {
  const response = await instance.patch(urls.users.details(data.id), {
    firstname: data.firstName,
    lastname: data.lastName,
    address: data.address,
    phoneNumber: data.phone,
  });
  return response.data;
};
