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
import { toast } from "react-toastify";
import { useRouter, useSearchParams } from "next/navigation";
import {
  addProductService,
  updateProductService,
} from "@/apis/services/productsClient.service";
export const ProductForm: React.FC<{ data?: IProduct }> = ({ data }) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const search = useSearchParams();
  const params = Object.fromEntries(search.entries());
  const searchParams = new URLSearchParams(params);
  const { push } = useRouter();

  const {
    handleSubmit,
    control,
    setValue,
    reset,
    formState: { isValid, isDirty },
  } = useForm<IProductForm>({
    mode: "all",
    resolver: zodResolver(ProductSchema),
  });
  const submitForm = async (values: IProductForm) => {
    const formData = new FormData();
    formData.set("category", values.category);
    formData.set("subcategory", values.subCategory);
    formData.set("name", values.name);
    formData.set("price", values.price);
    formData.set("quantity", values.quantity);
    formData.set("brand", values.brand);
    formData.set("description", values.description);
    values.images.forEach((image) => formData.append("images", image));
    try {
      data
        ? await updateProductService(data._id, formData)
        : await addProductService(formData);

      setShowModal(false);
      reset();
      toast.success("محصول باموفقیت اضافه شد");

      push(`?${searchParams}`);
    } catch (error) {
      errorHandler(error as AxiosError);
      if (
        ((error as AxiosError).response?.data as string).includes(
          "jwt malformed"
        )
      )
        push("/");
    }
  };
  return (
    <div>
      <button
        onClick={() => setShowModal(true)}
        className={`${
          data
            ? "font-medium text-blue-500 hover:text-blue-300"
            : "py-3 px-2 sm:px-3 rounded-t-md font-medium text-blue-500 hover:text-blue-300 hover:bg-slate-500 hover:border-b-2 "
        } `}
      >
        {data ? "ویرایش " : "افزودن کالا"}
      </button>
      {/* modal */}
      {showModal && (
        <div
          className="relative z-10"
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
                        <GiNotebook className="size-10 text-slate-200" />
                      </div>
                      <h3
                        className="text-base text-center sm:text-lg font-semibold text-slate-100"
                        id="modal-title"
                      >
                        {data ? "ویرایش محصول" : "افزودن محصول جدید"}
                      </h3>
                    </div>
                    <div className="flex flex-col gap-y-3 mt-3 text-center sm:mt-0 sm:text-start">
                      <div className="flex flex-col sm:flex-row gap-x-4 gap-y-3">
                        <Controller
                          control={control}
                          name="name"
                          defaultValue={data ? data.name : undefined}
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
                          defaultValue={data ? data.brand : undefined}
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
                        twoDefault={
                          data
                            ? {
                                defCategory: data?.category,
                                defSubCategoy: data?.subcategory,
                              }
                            : {
                                defCategory: undefined,
                                defSubCategoy: undefined,
                              }
                        }
                        setValue={setValue}
                        control={control}
                      />
                      <div className="flex flex-col sm:flex-row gap-x-4 gap-y-3">
                        <Controller
                          control={control}
                          name="quantity"
                          defaultValue={
                            data ? String(data.quantity) : undefined
                          }
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
                          defaultValue={data ? String(data?.price) : undefined}
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
                        defaultValue={data ? data.description : undefined}
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

                      <FileInput
                        defaultImage={data?.images}
                        name="images"
                        control={control}
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
                    {data ? "ویرایش محصول" : "افزودن محصول"}
                  </button>
                  <div className="w-full sm:w-40">
                    <CancelButton
                      showMoadl={() => {
                        setShowModal(false);
                        !data &&
                          reset({
                            category: "",
                            subCategory: "",
                            description: "",
                            name: "",
                            price: "",
                            quantity: "",
                            images: [],
                            brand: "",
                          });
                      }}
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
