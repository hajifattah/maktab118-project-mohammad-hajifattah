import z from "zod"
export const LoginFormSchema = z.object({
    username: z.string().min(4," نام کاربری حداقل باید 4 کاراکتر یا بیشتر باشد "),
    password: z
      .string()
      .refine(
        (val) =>
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
            val
          ),
        "حداقل کلمه عبور 8 کاراکتر و شامل حروف کوچک و بزرگ واعداد و علائم باشد"
      ),
  });
  