
export const OrderListCard: React.FC = () => {
  return (
    <tr className=" border-b bg-gray-800 border-gray-700 hover:bg-gray-600">
      <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        محمد علی رضایی
      </th>
      <td className="px-6 py-4">285000 تومان</td>
      <td className="px-6 py-4">5/1/1399</td>
      <td className="px-6 py-4">
        <button className="font-medium text-blue-500 hover:text-blue-300">
          بررسی سفارش
        </button>
      </td>
    </tr>
  );
};
