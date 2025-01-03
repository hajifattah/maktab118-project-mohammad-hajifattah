import z from "zod";
export const LoginFormSchema = z.object({
  username: z
    .string({ message: "مقدار را وارد کنید" })
    .min(4, " نام کاربری حداقل باید 4 کاراکتر یا بیشتر باشد "),
  password: z
    .string({ message: "مقدار را وارد کنید" })
    .refine(
      (val) =>
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
          val
        ),
      "حداقل کلمه عبور 8 کاراکتر و شامل حروف کوچک و بزرگ واعداد و علائم،علائم مجاز @$!%*?&  باشد"
    ),
});

export const SignupFormSchema = z.object({
  firstname: z
    .string({ message: "مقدار را وارد کنید" })
    .min(4, "نام حداقل 4 کاراکتر میباشد"),
  lastname: z
    .string({ message: "مقدار را وارد کنید" })
    .min(4, "نام خانوادگی حداقل 4 کاراکتر میباشد"),
  username: z
    .string({ message: "مقدار را وارد کنید" })
    .min(4, "یوزرنیم حداقل باید 4 کاراکتر باشد"),
  password: z
    .string({ message: "مقدار را وارد کنید" })
    .refine(
      (val) =>
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
          val
        ),
      "حداقل کلمه عبور 8 کاراکتر و شامل حروف کوچک و بزرگ واعداد و علائم،علائم مجاز @$!%*?&  باشد"
    ),
  address: z
    .string({ message: "مقدار را وارد کنید" })
    .min(10, "آدرس حداقل 10 کاراکتر میباشد"),
  phoneNumber: z
    .string({ message: "مقدار را وارد کنید" })
    .refine((val) => !isNaN(Number(val)), "لطفا عدد وارد کنید")
    .refine(
      (val) => /(09)[0-9]{9}/.test(val) && val.length === 11,
      "شماره وارد شده صحیح نمی باشد، مثال: 09122400000"
    ),
});
