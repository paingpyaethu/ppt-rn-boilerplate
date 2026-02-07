import "i18next";
import type { SupportedLanguages } from "@/hooks/language/schema";
import { defaultNS, resources } from "@/translations";

/**
 * Translation key type for our default namespace.
 * Example: "bottomtabs.home"
 */
type DefaultLang = (typeof resources)[SupportedLanguages.EN_EN];
type DefaultTranslations = DefaultLang[typeof defaultNS];

type Join<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

type RecursiveKeys<T> = T extends object
  ? {
      [K in keyof T & (string | number)]: T[K] extends object
        ? Join<K, RecursiveKeys<T[K]>>
        : K;
    }[keyof T & (string | number)]
  : never;

export type TxKeyPath = RecursiveKeys<DefaultTranslations>;

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS;
    resources: DefaultLang;
  }
}
