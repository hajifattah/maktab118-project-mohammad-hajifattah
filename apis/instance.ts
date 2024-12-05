import axios from "axios"

export const axiosInstance  = ()=>{
    return axios.create({baseURL : process.env.NEXT_PUBLIC_BASE_URL})
    
}