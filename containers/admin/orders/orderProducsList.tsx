import Link from "next/link";

export const OrderProductsList: React.FC = () => {
  return (
    <>
      <table className="gap-y-4 rounded-md rtl:text-right w-full bg-blue_app max-h-[70vh] overflow-y-auto">
        <thead>
          <tr className="p-2 text-slate-300 ">
            <th className="px-6 py-3">نام محصول</th>
            <th className="px-6 py-3">قیمت</th>
            <th className="px-6 py-3">تعداد</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-slate-100 font-semibold">
            <td>
              <Link
                href={""}
                className="px-2 sm:px-6 py-3 w-full inline-block hover:text-green-200 underline"
              >
                شیر کم چرب
              </Link>
            </td>
            <td className="px-2 sm:px-6 py-3">25000 تومان</td>
            <td className="px-2 sm:px-6 py-3">5 عدد</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
