import { t } from "i18next";
import * as z from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, { error: () => t("auth.loginScreen.emailValidationMessage") })
    .pipe(z.email({ error: () => t("auth.loginScreen.emailInvalidValidationMessage") })),
  password: z
    .string()
    .min(1, { error: () => t("auth.loginScreen.passwordValidationMessage") })
    .min(8, { error: () => t("auth.loginScreen.passwordMinLengthValidationMessage") }),
});

export type LoginFormValues = z.infer<typeof loginSchema>;
