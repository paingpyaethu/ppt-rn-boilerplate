import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { SupportedLanguages } from "./schema";

const changeLanguage = (lang: SupportedLanguages) => {
  void i18next.changeLanguage(lang);
};

const toggleLanguage = () => {
  void i18next.changeLanguage(
    i18next.language === (SupportedLanguages.EN_EN as string)
      ? SupportedLanguages.MM_MM
      : SupportedLanguages.EN_EN,
  );
};

const useI18n = () => {
  const { i18n } = useTranslation();

  return {
    language: i18n.language as
      | SupportedLanguages.MM_MM
      | SupportedLanguages.EN_EN,
    changeLanguage,
    toggleLanguage,
  };
};

export default useI18n;
