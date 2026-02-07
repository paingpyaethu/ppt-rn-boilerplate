import { t } from "i18next";
import * as z from "zod";

export const loginSchema = z.object({
  name: z
    .string()
    .min(1, { error: () => t("auth.loginScreen.nameValidationMessage") }),
  phone: z
    .string()
    .min(1, { error: () => t("auth.loginScreen.phoneValidationMessage") })
    .regex(/^[0-9]{10}$/, {
      error: () => t("auth.loginScreen.phoneInvalidValidationMessage"),
    }),
  email: z
    .string()
    .min(1, { error: () => t("auth.loginScreen.emailValidationMessage") })
    .pipe(
      z.email({
        error: () => t("auth.loginScreen.emailInvalidValidationMessage"),
      }),
    ),
  password: z
    .string()
    .min(1, { error: () => t("auth.loginScreen.passwordValidationMessage") })
    .min(8, {
      error: () => t("auth.loginScreen.passwordMinLengthValidationMessage"),
    }),
});

export type LoginFormValues = z.infer<typeof loginSchema>;
