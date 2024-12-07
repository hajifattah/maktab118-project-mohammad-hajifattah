import { z } from "zod";

export const ProductSchema = z.object({
  name: z.string().min(4, "نام کالا نباید کمتر از 4 کاراکتر باشد"),
  category: z.string().refine((val) => val != "", "دسته اصلی را انتخاب کنید"),
  subCategory: z.string().refine((val) => val != "", "زیر دسته را انتخاب کنید"),
  description: z
    .string()
    .min(10, "توضیحات محصول باید حداقل 10 کاراکتر باشد"),
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
