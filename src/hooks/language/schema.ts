import * as z from "zod";

export const enum SupportedLanguages {
  EN_EN = "en",
  MM_MM = "mm",
}

export const languageSchema = z.enum([
  SupportedLanguages.EN_EN,
  SupportedLanguages.MM_MM,
]);

export type Language = z.infer<typeof languageSchema>;
