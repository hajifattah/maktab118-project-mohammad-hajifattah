interface IUser {
  _id: string;
  firstname: string;
  lastname: string;
  username: string;
  phoneNumber: string;
  address: string;
  role: string;
  createdAt: "2024-12-02T21:06:52.866Z";
  updatedAt: string;
  __v: number;
}
interface IUserDto {
  data: { user: IUser };
}
