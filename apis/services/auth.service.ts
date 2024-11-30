import { axiosInstance } from "../instance"
import { urls } from "../urls";

type ILoginService = (body : ILoginReqDto)=> Promise<ILoginResDto>
export const loginService : ILoginService = async(body)=>{
    const instance = axiosInstance();
    const response = await instance.post(urls.auth.login,body)
    console.log(response.data)
    return response.data;
}