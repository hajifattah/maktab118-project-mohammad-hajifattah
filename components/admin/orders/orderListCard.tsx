import { fetchUserByIdService } from "@/apis/services/users.service";
import { CheckOrder } from "./checkOrder";

export const OrderListCard: React.FC<IOrder> = async ({
  totalPrice,
  createdAt,
  user,
  deliveryStatus,
  products,
  deliveryDate,
}) => {
  const userDtails = await fetchUserByIdService(user);

  const date = new Date(createdAt);
  const createdDate = createdAt.includes("1403")
    ? createdAt.split("T")[0].replaceAll("-", "/")
    : date.toLocaleDateString("fa-IR-u-nu-latn");
  const delDate = new Date(createdAt);
  const delivery = deliveryDate.includes("1403")
    ? deliveryDate.split("T")[0].replaceAll("-", "/")
    : delDate.toLocaleDateString("fa-IR-u-nu-latn");

  return (
    <tr className=" border-b bg-gray-800 border-gray-700 hover:bg-gray-600">
      <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {userDtails.data.user.firstname} {userDtails.data.user.lastname}
      </th>
      <td className="px-6 py-4">{totalPrice} تومان</td>
      <td className="px-6 py-4">{createdDate}</td>
      <td className="px-6 py-4">
        <CheckOrder
          deliveryDate={delivery}
          createdAt={createdDate}
          orderProducts={products}
          userDetails={userDtails.data.user}
          mode={deliveryStatus ? "delivered" : "notDelivered"}
        />
      </td>
    </tr>
  );
};
