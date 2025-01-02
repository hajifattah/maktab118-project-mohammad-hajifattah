import { fetchUserByIdService } from "@/apis/services/users.service";
import { CheckOrder } from "./checkOrder";

export const OrderListCard: React.FC<IOrder> = async ({
  totalPrice,
  createdAt,
  user,
  deliveryStatus,
  products,
  deliveryDate,
  _id,
}) => {
  const userDtails = await fetchUserByIdService(user);

  const date = new Date(createdAt);
  const createdDate = date.toLocaleDateString("fa-IR-u-nu-latn");
  const delivery = deliveryDate.split("T")[0].replaceAll("-", "/");

  return (
    <tr className=" border-b bg-gray-800 border-gray-700 hover:bg-gray-600">
      <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {userDtails.data.user.firstname} {userDtails.data.user.lastname}
      </th>
      <td className="px-6 py-4">{totalPrice} تومان</td>
      <td className="px-6 py-4">{createdDate}</td>
      <td className="px-6 py-4">
        <CheckOrder
          orderId={_id}
          deliveryDate={{ org: deliveryDate, new: delivery }}
          createdAt={createdDate}
          orderProducts={products}
          userDetails={userDtails.data.user}
          mode={deliveryStatus ? "delivered" : "notDelivered"}
        />
      </td>
    </tr>
  );
};
