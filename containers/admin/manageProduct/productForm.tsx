"use client";

import { CancelButton } from "@/components/cancelButton";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { GiNotebook } from "react-icons/gi";
import { zodResolver } from "@hookform/resolvers/zod";
import { ProductSchema } from "@/apis/validations/product.validation";
import { ProductInput } from "@/components/admin/manageProduct/inputs/productInput";

import { CategoryAndSubCategory } from "@/components/admin/manageProduct/inputs/categoryAndSubcategory";
import { FileInput } from "@/components/admin/manageProduct/inputs/fileInput";
import { TinyMce } from "@/components/admin/manageProduct/mceEditor";
import { errorHandler } from "@/utils/error-handler";
import { AxiosError } from "axios";
import { addProductService } from "@/apis/services/products.service";
import { toast } from "react-toastify";
export const AddProductForm: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const {
    handleSubmit,
    control,
    setValue,
    reset,
    formState: { isValid, isDirty },
  } = useForm<IProductForm>({
    mode: "all",
    resolver: zodResolver(ProductSchema),
    defaultValues: {
      category: "",
      subCategory: "",
      description: "",
      name: "",
      price: "",
      quantity: "",
      images: [],
      brand: "",
    },
  });
  const submitForm = async (values: IProductForm) => {
    const formData = new FormData();
    formData.set("category", values.category);
    formData.set("subcategory", values.subCategory);
    formData.set("name", values.name);
    formData.set("price", values.price);
    formData.set("quantity", values.quantity);
    formData.set("brand", values.quantity);
    formData.set("description", values.description);
    values.images.forEach((image) => formData.append("images", image));
    try {
      await addProductService(formData);
      setShowModal(false);
      reset();
      toast.success("محصول باموفقیت اضافه شد");
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
                className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all mx-2 sm:m-20 sm:w-full sm:max-w-screen-lg"
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
                    <div className="flex flex-col gap-y-3 mt-3 text-center sm:mt-0 sm:text-start">
                      <div className="flex flex-col sm:flex-row gap-x-4 gap-y-3">
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
                        <Controller
                          control={control}
                          name="brand"
                          render={({ field, fieldState }) => {
                            return (
                              <ProductInput
                                label="برند محصول"
                                {...field}
                                error={fieldState.error?.message}
                              />
                            );
                          }}
                        />
                      </div>
                      <CategoryAndSubCategory
                        setValue={setValue}
                        control={control}
                      />
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
                            <TinyMce
                              {...field}
                              label="توضیحات"
                              error={fieldState.error?.message}
                            />
                          );
                        }}
                      />
                      <FileInput name="images" control={control} />
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
                        reset();
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
