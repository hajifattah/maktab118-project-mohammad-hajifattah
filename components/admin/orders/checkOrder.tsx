"use client";
import { deliveryOrderService } from "@/apis/services/orders.service";
import { CancelButton } from "@/components/cancelButton";
import { OrderProductsList } from "@/containers/admin/orders/orderProducsList";
import { errorHandler } from "@/utils/error-handler";
import { AxiosError } from "axios";
import { useRouter} from "next/navigation";
import { FormEventHandler,useState } from "react";
import { FaCircleInfo } from "react-icons/fa6";

export const CheckOrder: React.FC<{
  mode: "delivered" | "notDelivered";
  orderProducts: { product: string; count: number; _id: string }[];
  userDetails: IUser;
  createdAt: string;
  deliveryDate: {org:string;new:string};
  orderId: string;
}> = ({
  mode,
  orderProducts,
  userDetails,
  createdAt,
  deliveryDate,
  orderId,
}) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const { push } = useRouter();
  const delivered: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const date = new Date();
    const faDate = date.toLocaleString("fa-IR-u-nu-latn");
    try {
    await deliveryOrderService(orderId,{deliveryDate:faDate})
   } catch (error) {
    errorHandler(error as AxiosError)
   }
    setShowModal(false);
    push("/orders")
  };

  return (
    <>
      <div>
        <button
          onClick={() => setShowModal(true)}
          className="font-medium text-blue-500 hover:text-blue-300"
        >
          {mode === "delivered" ? "مشاهده جزئیات" : "بررسی سفارش"}
        </button>
        {/* modal */}
        {!showModal ? (
          <></>
        ) : (
          <div
            className={`relative z-30`}
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
          >
            <div
              className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
              aria-hidden="true"
            ></div>

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
              <div className="flex min-h-full justify-center p-4 text-center items-center sm:p-0">
                <form
                  onSubmit={delivered}
                  className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all mx-2 sm:m-20 sm:w-full sm:max-w-screen-sm"
                >
                  <div className="bg-sky-500 px-4 pb-4 pt-5 sm:p-6 sm:pb-4 ">
                    <div className="flex flex-col gap-y-5 ">
                      <div className="flex gap-x-1  items-center justify-center rounded-md bg-blue_app px-2 ">
                        <h3
                          className="text-base text-center sm:text-lg font-semibold text-slate-100"
                          id="modal-title"
                        >
                          جزئیات سفارش
                        </h3>
                        <div className=" flex flex-shrink-0 w-14 h-14 items-center justify-center ">
                          <FaCircleInfo className="size-9 text-slate-200" />
                        </div>
                      </div>
                      <div className="gap-y-4 rounded-md rtl:text-right w-full bg-blue_app ">
                        <ul className="text-slate-200 px-6 py-4 grid gap-y-2">
                          <li className="flex gap-x-4 ">
                            <h2 className="w-1/3 text-slate-300">نام مشتری:</h2>
                            <h2 className="font-semibold">
                              {userDetails.firstname} {userDetails.lastname}
                            </h2>
                          </li>
                          <li className="flex gap-x-4 ">
                            <h2 className="w-1/3 text-slate-300">آدرس:</h2>
                            <h2 className="font-semibold">
                              {userDetails.address}
                            </h2>
                          </li>
                          <li className="flex gap-x-4 ">
                            <h2 className="w-1/3 text-slate-300">تلفن:</h2>
                            <h2 className="font-semibold">
                              {userDetails.phoneNumber}
                            </h2>
                          </li>
                          <li className="flex gap-x-4 ">
                            <h2 className="w-1/3 text-slate-300">
                              زمان سفارش:
                            </h2>
                            <h2 className="font-semibold">{createdAt}</h2>
                          </li>
                          <li className="flex gap-x-4 ">
                            <h2 className="w-1/3 text-slate-300">
                              زمان تحویل:
                            </h2>
                            <h2 className="font-semibold">{deliveryDate.new}</h2>
                          </li>
                        </ul>
                      </div>
                      <div className="overflow-auto max-h-[40vh]">
                        <OrderProductsList orderProducts={orderProducts} />
                      </div>
                      {mode === "delivered" ? (
                        <div className="flex justify-between gap-y-4 rounded-md rtl:text-right w-full bg-blue_app px-6 py-3">
                          <h2 className="text-green-300 font-semibold ">
                            تحویل شد:
                          </h2>
                          <h2 className="text-green-300 font-semibold">
                            {deliveryDate.org}
                          </h2>
                        </div>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                  <div className="bg-sky-500 border-t-2 border-white px-4 py-4 sm:flex  sm:px-6">
                    {mode === "delivered" ? (
                      <button
                        onClick={() => setShowModal(false)}
                        type="button"
                        className="disabled:bg-gray-400 inline-flex w-full justify-center rounded-md bg-blue_app px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue_app/80 sm:ml-3"
                      >
                        باشه
                      </button>
                    ) : (
                      <button
                        type="submit"
                        className="disabled:bg-gray-400 inline-flex w-full justify-center rounded-md bg-blue_app px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue_app/80 sm:ml-3"
                      >
                        تحویل شد
                      </button>
                    )}
                    <div className={`${mode === "delivered" && "hidden"}`}>
                      <CancelButton showMoadl={() => setShowModal(false)} />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
