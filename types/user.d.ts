interface IUser {
  _id: string;
  firstname: string;
  lastname: string;
  username: string;
  phoneNumber: string;
  address: string;
  role: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
interface IUserDto {
  data: { user: IUser };
}

interface IUserInfoForm{
  firstName:string;
  lastName: string;
  phone: string;
  address: string;
  dateOfDelivery: string;
}

interface IUserResINfo{
  id:string;
  firstName:string;
  lastName: string;
  phone: string;
  address: string;
}