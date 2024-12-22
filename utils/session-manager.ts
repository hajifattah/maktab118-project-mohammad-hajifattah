"use client";
// token
export const setToken = (token: string) => {
  localStorage.setItem(process.env.NEXT_PUBLIC_TOKEN_NAME!, token);
};

export const getToken = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem(process.env.NEXT_PUBLIC_TOKEN_NAME!);
  } else return null;
};

export const deleteToken = () => {
  if (typeof window !== "undefined")
  localStorage.removeItem(process.env.NEXT_PUBLIC_TOKEN_NAME!);
};
// refresh torkn
export const setRefToken = (refToken: string) => {
  localStorage.setItem(process.env.NEXT_PUBLIC_REFRESH_TOKEN_NAME!, refToken);
};

export const getRefToken = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem(process.env.NEXT_PUBLIC_REFRESH_TOKEN_NAME!);
  } else return null;
};

export const deleteRefToken = () => {
  localStorage.removeItem(process.env.NEXT_PUBLIC_REFRESH_TOKEN_NAME!);
};
// user informaton
export const setUserInfo = (userInfo: IUserResINfo) => {
  localStorage.setItem(
    process.env.NEXT_PUBLIC_USER_INFORMATIN!,
    JSON.stringify(userInfo)
  );
};

export const getUserInfo = () => {
  if (typeof window !== "undefined") {
    const info = localStorage.getItem(process.env.NEXT_PUBLIC_USER_INFORMATIN!);
    return JSON.parse(info!) as IUserResINfo;
  } else return null;
};

export const deleteUserInfo = () => {
  localStorage.removeItem(process.env.NEXT_PUBLIC_USER_INFORMATIN!);
};
