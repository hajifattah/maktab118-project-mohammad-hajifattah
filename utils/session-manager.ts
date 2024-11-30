
export const setToken = (token : string)=>{
    localStorage.setItem(process.env.NEXT_PUBLIC_TOKEN_NAME!,token)
}

export const getToken = ()=>{
   return localStorage.getItem(process.env.NEXT_PUBLIC_TOKEN_NAME!)
}

export const deleteToken = ()=>{
    localStorage.removeItem(process.env.NEXT_PUBLIC_TOKEN_NAME!)
}