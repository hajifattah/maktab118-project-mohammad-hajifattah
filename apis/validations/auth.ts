import z from "zod"
export const LoginFormSchema = z.object({
    username: z.string().min(4,"value should be 4 char or more"),
    password: z
      .string()
      .refine(
        (val) =>
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
            val
          ),
        "min value should be 8 char and icludes lowercase,uppercase,number and sign"
      ),
  });
  