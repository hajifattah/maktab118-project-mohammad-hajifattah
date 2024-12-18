// token
export const setToken = (token : string)=>{
    localStorage.setItem(process.env.NEXT_PUBLIC_TOKEN_NAME!,token)
}

export const getToken = ()=>{
   return localStorage.getItem(process.env.NEXT_PUBLIC_TOKEN_NAME!)
}

export const deleteToken = ()=>{
    localStorage.removeItem(process.env.NEXT_PUBLIC_TOKEN_NAME!)
}
// refresh torkn
export const setRefToken = (refToken:string)=>{
    localStorage.setItem(process.env.NEXT_PUBLIC_REFRESH_TOKEN_NAME!,refToken)
}

export const getRefToken = ()=>{
   return localStorage.getItem(process.env.NEXT_PUBLIC_REFRESH_TOKEN_NAME!)
}

export const deleteRefToken = ()=>{
    localStorage.removeItem(process.env.NEXT_PUBLIC_REFRESH_TOKEN_NAME!)
}
// user informaton
export const setUserInfo = (userInfo:IUserResINfo)=>{
    localStorage.setItem(process.env.NEXT_PUBLIC_USER_INFORMATIN!,JSON.stringify(userInfo))
}

export const getUserInfo = ()=>{
   const info = localStorage.getItem(process.env.NEXT_PUBLIC_USER_INFORMATIN!)
   return JSON.parse(info!) as IUserResINfo;
}

export const deleteUserInfo = ()=>{
    localStorage.removeItem(process.env.NEXT_PUBLIC_USER_INFORMATIN!)
}