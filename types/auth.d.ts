interface ILoginReqDto {
  username: string;
  password: string;
}
interface ILoginResDto {
  status: string;
  token: {
    accessToken: string;
    refreshToken: string;
  };
  data: {
    user: {
      _id: string;
      firstname: string;
      lastname: string;
      username: string;
      password: string;
      phoneNumber: string;
      address: string;
      role: "USER" | "ADMIN";
      createdAt: string;
      updatedAt: string;
      __v: 0;
      refreshToken: string;
    };
  };
}

interface ISignupReqDto  {
  firstname:string;
  lastname: string;
  username: string;
  password: string;
  phoneNumber: string;
  address: string;
}
