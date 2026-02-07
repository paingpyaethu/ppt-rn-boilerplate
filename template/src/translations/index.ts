import "intl-pluralrules";

import i18n, { LanguageDetectorAsyncModule } from "i18next";
import { initReactI18next } from "react-i18next";

import * as locales from "@/translations/locales";
import { Language } from "@/hooks/language/schema";
import {
  getStoredLanguage,
  setStoredLanguage,
} from "@/storages/languageStorage";

export const defaultNS = "translations";

export const resources = {
  en: { translations: locales.en },
  mm: { translations: locales.mm },
} as const satisfies Record<Language, unknown>;

type Supported = keyof typeof resources;
const FALLBACK: Supported = "en";

const detector: LanguageDetectorAsyncModule = {
  type: "languageDetector",
  async: true,
  init: () => {},
  detect: cb => {
    cb(getStoredLanguage() as Supported);
  },
  cacheUserLanguage: lng => {
    setStoredLanguage(lng as Language);
  },
};

/**
 * Initialize i18next with the JSON-based resources.
 */
void i18n
  .use(detector)
  .use(initReactI18next)
  .init({
    defaultNS,
    resources,
    fallbackLng: FALLBACK,
    interpolation: { escapeValue: false },
    react: { useSuspense: false },
  });

/**
 * Persist the chosen language on any runtime language change.
 * This is a safety net in case `cacheUserLanguage` is not invoked.
 */
// i18n.on("languageChanged", (lng) => {
//   const chosen = normalizeLang(lng)
//   storage.set(KEY, chosen)
// })

export default i18n;
