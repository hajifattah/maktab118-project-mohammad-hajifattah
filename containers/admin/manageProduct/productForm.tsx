"use client";

import { CancelButton } from "@/components/cancelButton";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { GiNotebook } from "react-icons/gi";
import { zodResolver } from "@hookform/resolvers/zod";
import { ProductSchema } from "@/apis/validations/product.validation";
import { ProductInput } from "@/components/admin/manageProduct/inputs/productInput";

import { CategoryAndSubCategory } from "@/components/admin/manageProduct/inputs/categoryAndSubcategory";
export const AddProductForm: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const {
    handleSubmit,
    control,
    reset,
    formState: { isValid, isDirty },
  } = useForm<IProductForm>({
    mode: "all",
    resolver: zodResolver(ProductSchema),
  });
  const submitForm = () => {};
  return (
    <div>
      <button
        onClick={() => setShowModal(true)}
        className="py-3 px-2 sm:px-3 rounded-t-md font-medium text-blue-500 hover:text-blue-300 hover:bg-slate-500 hover:border-b-2 "
      >
        افزودن کالا
      </button>
      {/* modal */}
      {
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
                onSubmit={handleSubmit(submitForm)}
                className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-xl"
              >
                <div className="bg-sky-500 px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:flex-col  sm:gap-y-5 ">
                    <div className="flex gap-x-1  items-center justify-center rounded-md bg-blue_app px-2">
                      <div className=" flex flex-shrink-0 w-14 h-14 items-center justify-center ">
                        <GiNotebook className="size-10 " />
                      </div>
                      <h3
                        className="text-base text-center sm:text-lg font-semibold text-slate-100"
                        id="modal-title"
                      >
                        افزودن کالا جدید
                      </h3>
                    </div>
                    <div className="flex flex-col gap-y-3 mt-3 text-center sm:ml-4 sm:mt-0 sm:text-start">
                      <Controller
                        control={control}
                        name="name"
                        render={({ field, fieldState }) => {
                          return (
                            <ProductInput
                              label="نام محصول"
                              {...field}
                              error={fieldState.error?.message}
                            />
                          );
                        }}
                      />
                      <CategoryAndSubCategory control={control} />
                      <div className="flex flex-col sm:flex-row gap-x-4 gap-y-3">
                        <Controller
                          control={control}
                          name="quantity"
                          render={({ field, fieldState }) => {
                            return (
                              <ProductInput
                                label="تعداد"
                                {...field}
                                error={fieldState.error?.message}
                              />
                            );
                          }}
                        />
                        <Controller
                          control={control}
                          name="price"
                          render={({ field, fieldState }) => {
                            return (
                              <ProductInput
                                {...field}
                                label="قیمت"
                                error={fieldState.error?.message}
                              />
                            );
                          }}
                        />
                      </div>
                      <Controller
                        control={control}
                        name="description"
                        render={({ field, fieldState }) => {
                          return (
                            <ProductInput
                              {...field}
                              label="توضیحات"
                              error={fieldState.error?.message}
                            />
                          );
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-sky-500 border-t-2 border-white px-4 py-4 sm:flex  sm:px-6">
                  <button
                    disabled={!isDirty || !isValid}
                    type="submit"
                    className="disabled:bg-gray-400 inline-flex w-full justify-center rounded-md bg-blue_app px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue_app/80 sm:ml-3"
                  >
                    افزودن کالا
                  </button>
                  <div className="w-full sm:w-40">
                    <CancelButton
                      showMoadl={() => {
                        setShowModal(false);
                        reset(undefined, { keepDirtyValues: false });
                      }}
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      }
    </div>
  );
};
