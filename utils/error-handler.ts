import { AxiosError } from "axios";
import { toast } from "react-toastify";

export const errorHandler = (err : AxiosError)=>{
    toast.error(err.response?.statusText)
}