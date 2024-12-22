import { axiosInstance } from "../instance"
import { urls } from "../urls";

type ILoginService = (body : ILoginReqDto)=> Promise<ILoginResDto>
export const loginService : ILoginService = async(body)=>{
    const instance = axiosInstance();
    const response = await instance.post(urls.auth.login,body)
    return response.data;
}


type ISignupService = (body : ISignupReqDto)=> Promise<ILoginResDto>
export const signupService : ISignupService = async(body)=>{
    const instance = axiosInstance();
    const response = await instance.post(urls.auth.signup,body)
    return response.data;
}