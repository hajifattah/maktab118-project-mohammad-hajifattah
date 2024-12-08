"use client";
import { deleteProductService } from "@/apis/services/productsClient.service";
import { CancelButton } from "@/components/cancelButton";
import { errorHandler } from "@/utils/error-handler";
import { AxiosError } from "axios";
import { useState } from "react";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";

export const DeleteProduct: React.FC<{ id: string; name: string }> = ({
  id,
  name,
}) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const deleteProduct = async () => {
    try {
      await deleteProductService(id);
      toast.success("محصول باموفقیت حذف شد");
    } catch (error) {
      errorHandler(error as AxiosError);
    }
  };
  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="font-semibold text-base text-red-600 hover:text-red-400"
      >
        حذف
      </button>
      <div
        className={`relative z-10 ${showModal ? "block" : "hidden"}`}
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
              onSubmit={deleteProduct}
              className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all mx-2 sm:m-20 sm:w-full sm:max-w-screen-sm"
            >
              <div className="bg-sky-500 px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:flex-col  sm:gap-y-5 ">
                  <div className="flex gap-x-1  items-center justify-center rounded-md bg-blue_app px-2">
                    <h3
                      className="text-base text-center sm:text-lg font-semibold text-slate-100"
                      id="modal-title"
                    >
                      حذف محصول
                    </h3>
                    <div className=" flex flex-shrink-0 w-14 h-14 items-center justify-center ">
                      <MdDelete className="size-9 text-slate-100" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-y-3 mt-3 text-center sm:mt-0 sm:text-start text-black/70 font-semibold">
                    {`آیا از حذف محصول "${name}" اطمینان دارید؟`}
                  </div>
                </div>
              </div>
              <div
                className="bg-sky-500 border-t-2 border-white px-4 py-4 sm:flex  sm:px-6"
              >
                <button
                  type="submit"
                  className="disabled:bg-gray-400 inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3"
                >
                  حذف
                </button>
                <div className="w-full sm:w-40">
                  <CancelButton showMoadl={() => setShowModal(false)} />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
