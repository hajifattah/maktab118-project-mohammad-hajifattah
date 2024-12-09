"use client";

import { updateProductPairsService } from "@/apis/services/productsClient.service";
import { CancelButton } from "@/components/cancelButton";
import { PairStockContext } from "@/providers/stockPage.provider";
import { errorHandler } from "@/utils/error-handler";
import { AxiosError } from "axios";
import { FormEventHandler, useContext, useState } from "react";
import { MdChangeCircle, MdDelete } from "react-icons/md";
import { toast } from "react-toastify";

export const StoreStockChanges: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const { removePair, pairs, removeAll } = useContext(PairStockContext);

  const storeChanges: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    try {
      await updateProductPairsService(pairs);
      toast.success("تغییرات با موفقیت ذخیره شد");
      removeAll();
      setShowModal(false);
    } catch (error) {
      errorHandler(error as AxiosError);
    }
  };
  return (
    <div>
      <button
        onClick={() => setShowModal(true)}
        className="py-3 px-2 sm:px-3 rounded-t-md font-medium text-blue-500 hover:text-blue-300 hover:bg-slate-500 hover:border-b-2 "
      >
        ذخیره
      </button>
      {/* modal */}
      <div
        className={`relative z-10 ${
          showModal && pairs.length !== 0 ? "block" : "hidden"
        }`}
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
              onSubmit={storeChanges}
              className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all mx-2 sm:m-20 sm:w-full sm:max-w-screen-sm"
            >
              <div className="bg-sky-500 px-4 pb-4 pt-5 sm:p-6 sm:pb-4 ">
                <div className="sm:flex sm:flex-col sm:gap-y-5 ">
                  <div className="flex gap-x-1  items-center justify-center rounded-md bg-blue_app px-2 ">
                    <h3
                      className="text-base text-center sm:text-lg font-semibold text-slate-100"
                      id="modal-title"
                    >
                      ذخیره تغییرات
                    </h3>
                    <div className=" flex flex-shrink-0 w-14 h-14 items-center justify-center ">
                      <MdChangeCircle className="size-9 text-slate-200" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-y-3 my-3 text-center sm:my-0 sm:text-start text-black/70 font-semibold">
                    پس از تایید، محصولات زیر آپدیت خواهند شد :
                  </div>
                  <div className="overflow-x-auto">
                    <table className="gap-y-4 rounded-md rtl:text-right w-full bg-blue_app ">
                      <tr className="p-2">
                        <th className="px-6 py-3">نام محصول</th>
                        <th className="px-6 py-3">قیمت</th>
                        <th className="px-6 py-3">تعداد</th>
                        <th className="px-6 py-3">عملیات</th>
                      </tr>
                      {pairs.map((item) => (
                        <tr key={item.id} className="text-slate-200">
                          <td className="px-6 py-3">{item.name}</td>
                          <td className="px-6 py-3">{item.pair.price}</td>
                          <td className="px-6 py-3">{item.pair.quantity}</td>
                          <td className="font-bold px-6 py-3">
                            <button
                              onClick={() => removePair(item.id)}
                              className="text-red-500 hover:text-red-300 p-2 "
                            >
                              حذف
                            </button>
                          </td>
                        </tr>
                      ))}
                    </table>
                  </div>
                </div>
              </div>
              <div className="bg-sky-500 border-t-2 border-white px-4 py-4 sm:flex  sm:px-6">
                <button
                  type="submit"
                  className="disabled:bg-gray-400 inline-flex w-full justify-center rounded-md bg-blue_app px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue_app/80 sm:ml-3"
                >
                  آپدیت
                </button>
                <div className="w-full sm:w-40">
                  <CancelButton showMoadl={() => setShowModal(false)} />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* modal 2 */}
      <div
        className={`relative z-10 ${
          showModal && pairs.length === 0 ? "block" : "hidden"
        }`}
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
            <div className="bg-sky-500 px-4 pb-4 pt-5 sm:p-6 sm:pb-4 rounded-md">
              <div className="sm:flex sm:flex-col min-h-32 min-w-72 sm:gap-y-5 ">
                <div className="flex gap-x-1  items-center justify-center rounded-md bg-blue_app px-2">
                  <h3
                    className="text-base text-center sm:text-lg font-semibold text-slate-100"
                    id="modal-title"
                  >
                    ذخیره تغییرات
                  </h3>
                  <div className=" flex flex-shrink-0 w-14 h-14 items-center justify-center ">
                    <MdChangeCircle className="size-9 text-slate-200" />
                  </div>
                </div>{" "}
                <div className="flex flex-col gap-y-3 my-3 text-center sm:my-0 sm:text-start text-black/70 font-semibold">
                  محصولی برای آپدیت وجود ندارد
                </div>
              </div>
              <div className="bg-sky-500 border-t-2 border-white px-4 py-4 sm:flex  sm:px-6">
                <button
                  onClick={() => setShowModal(false)}
                  className="disabled:bg-gray-400 inline-flex w-fit justify-center rounded-md bg-blue_app px-10 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue_app/80 sm:ml-3"
                >
                  بازگشت
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
