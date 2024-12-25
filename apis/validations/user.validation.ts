import { z } from "zod";

export const userDetailsSchema = z.object({
  firstName: z.string().min(4, "نام حداقل 4 کاراکتر میباشد"),
  lastName: z.string().min(4, "نام خانوادگی حداقل 4 کاراکتر میباشد"),
  address: z.string().min(10, "آدرس حداقل 10 کاراکتر میباشد"),
  phone: z
    .string()
    .refine((val) => !isNaN(Number(val)), "لطفا عدد وارد کنید")
    .refine(
      (val) => /(09)[0-9]{9}/.test(val) && val.length === 11,
      "شماره وارد شده صحیح نمی باشد، مثال: 09122400000"
    ),
  dateOfDelivery: z
    .string()
    .refine((val) => val !== "", "زمان تحویل نمیتواند خالی باشد"),
});

export const userProfileSchema = z.object({
  firstName: z.string().min(4, "نام حداقل 4 کاراکتر میباشد"),
  lastName: z.string().min(4, "نام خانوادگی حداقل 4 کاراکتر میباشد"),
  userName: z
    .string({ message: "مقدار را وارد کنید" })
    .min(4, "یوزرنیم حداقل باید 4 کاراکتر باشد"),
  password: z
    .string({ message: "مقدار را وارد کنید" })
    .refine(
      (val) =>
        val &&
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
          val
        ),
      "حداقل کلمه عبور 8 کاراکتر و شامل حروف کوچک و بزرگ واعداد و علائم باشد"
    )
    .optional().or(z.literal('')),
  address: z.string().min(10, "آدرس حداقل 10 کاراکتر میباشد"),
  phone: z
    .string()
    .refine((val) => !isNaN(Number(val)), "لطفا عدد وارد کنید")
    .refine(
      (val) => /(09)[0-9]{9}/.test(val) && val.length === 11,
      "شماره وارد شده صحیح نمی باشد، مثال: 09122400000"
    ),
});
