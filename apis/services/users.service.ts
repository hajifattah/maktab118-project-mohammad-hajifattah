import { axiosInstance } from "../instance";
import { urls } from "../urls";

type ILoginService = (id : string)=> Promise<IUserDto>
export const fetchUserByIdService : ILoginService = async(id)=>{
    const instance = axiosInstance();
    const response = await instance.get(urls.users.byId(id))
    return response.data;
}