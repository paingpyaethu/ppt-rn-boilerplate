import { t } from "i18next";
import * as z from "zod";
import { SupportedLanguages } from "@/hooks/language/schema";

export const languageSchema = z.object({
  language: z.enum([SupportedLanguages.EN_EN, SupportedLanguages.MM_MM], {
    error: () => t("common.languageSettings.validationError"),
  }),
});

export type LanguageFormValues = z.infer<typeof languageSchema>;
