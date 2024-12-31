import { fetchUserByIdService } from "@/apis/services/users.service";
import { CheckOrder } from "./checkOrder";

export const OrderListCard: React.FC<IOrder> = async ({
  totalPrice,
  createdAt,
  user,
  deliveryStatus,
}) => {
  const userDtails = await fetchUserByIdService(user);
  return (
    <tr className=" border-b bg-gray-800 border-gray-700 hover:bg-gray-600">
      <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {userDtails.data.user.firstname} {userDtails.data.user.lastname}
      </th>
      <td className="px-6 py-4">{totalPrice} تومان</td>
      <td className="px-6 py-4">{createdAt.split("T")[0]}</td>
      <td className="px-6 py-4">
      <CheckOrder mode={deliveryStatus ? "delivered":"notDelivered"}/>
      </td>
    </tr>
  );
};
