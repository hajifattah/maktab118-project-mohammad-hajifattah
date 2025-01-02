import { fetchSingleProductListService } from "@/apis/services/products.service";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

export const OrderProductsList: React.FC<{
  orderProducts: { product: string; count: number; _id: string }[];
}> = ({ orderProducts }) => {
  const [products, setProducts] = useState<
    {
      id: string;
      name: string;
      price: number;
    }[]
  >();
  const callBack = useCallback(async () => {
    const response = await fetchSingleProductListService(
      orderProducts.map((item) => item.product)
    );
    const data = response.map((item) => {
      const product = item.data.product;
      return {
        id: product._id,
        name: product.name,
        price: product.price,
      };
    });
    setProducts(data);
  }, [orderProducts]);

  useEffect(() => {
    callBack();
  }, [orderProducts]);
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
          {!products ? (
            <tr>
              <td className="pr-6 py-2 text-white rtl:text-right">
                {" "}
                درحال دریافت اطلاعات ...
              </td>
            </tr>
          ) : (
            products.map((item) => (
              <tr key={item.id} className="text-slate-100 font-semibold">
                <td>
                  <Link
                    href={`/products/${item.id}`}
                    className="pxl-2 pr-6 sm:px-6 py-3 w-full inline-block hover:text-green-200 underline"
                  >
                    {item.name}
                  </Link>
                </td>
                <td className="px-2 sm:px-6 py-3">{item.price} تومان</td>
                <td className="px-2 sm:px-6 py-3">
                  {
                    orderProducts.find((item2) => item2.product === item.id)
                      ?.count
                  }{" "}
                  عدد
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </>
  );
};
