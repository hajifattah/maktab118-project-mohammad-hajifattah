import { z } from "zod";

const imagesType = ["image/png", "image/jpeg", "image/jpg"];
const maxFileSize = 5000000; // 5MB
export const ProductSchema = z.object({
  name: z.string().min(4, "نام کالا نباید کمتر از 4 کاراکتر باشد"),
  category: z.string().refine((val) => val != "", "دسته اصلی را انتخاب کنید"),
  subCategory: z.string().refine((val) => val != "", "زیر دسته را انتخاب کنید"),
  description: z.string().min(20, "توضیحات محصول باید حداقل 20 کاراکتر باشد"),
  quantity: z
    .string()
    .refine(
      (val) => val != "" && !isNaN(Number(val)),
      "تعداد محصول را به عدد وارد کنید"
    ),
  price: z
    .string()
    .refine(
      (val) => val != "" && !isNaN(Number(val)),
      "قیمت محصول را به عدد وارد کنید"
    ),
  images: z
    .any()
    .refine((file: File[]) => file.length !== 0, "حداقل یک عکس انتخاب کنید")
    .refine((files: File[]) => {
      const find = files.find((item) => !imagesType.includes(item.type));
      return !find;
    }, "عکس باید ازنوع jpg. یا jpeg. یا png. باشد")
    .refine((file: File[]) => {
      const size = file.reduce((acc, item) => (acc += item.size), 0);
      return size <= maxFileSize;
    }, "حجم فایل زیاد می باشد، حداکثر 5 مگابایت"),
  brand: z.string().refine((val) => val != "", " برند محصول را انتخاب کنید"),
});

export const QuantityPriceSchema = z.object({
  quantity: z
    .string()
    .refine(
      (val) => val != "" && !isNaN(Number(val)),
      "تعداد محصول را به عدد وارد کنید"
    ),
  price: z
    .string()
    .refine(
      (val) => val != "" && !isNaN(Number(val)),
      "قیمت محصول را به عدد وارد کنید"
    ),
});
