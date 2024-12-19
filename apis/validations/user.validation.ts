import { z } from "zod";

export const userDetailsSchema = z.object({
    firstName: z.string().min(4,"نام حداقل 4 کاراکتر میباشد"),
    lastName: z.string().min(4,"نام خانوادگی حداقل 4 کاراکتر میباشد"),
    address: z.string().min(10,"آدرس حداقل 10 کاراکتر میباشد"),
    phone: z
    .string()
    .refine((val) => !isNaN(Number(val)), "لطفا عدد وارد کنید")
    .refine(
      (val) => /(09)[0-9]{9}/.test(val) && val.length === 11,
      "شماره وارد شده صحیح نمی باشد، مثال: 09122400000"
    ),
    dateOfDelivery: z.string().refine(val=> val !== "" , "زمان تحویل نمیتواند خالی باشد"),
})