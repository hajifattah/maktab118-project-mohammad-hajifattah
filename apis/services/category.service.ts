import { axiosInstance } from "../instance"
import { urls } from "../urls";

type IFetchCategoryListService = ()=>Promise<ICategoryListDto>
export const fetchCategoryListService : IFetchCategoryListService = async()=>{
    const instance = axiosInstance();
    const response = await instance.get(urls.category.list,{params:{limit:20}})
return response.data
}