import { StorageKeys } from "@/constants/common";
import { Language, SupportedLanguages } from "@/hooks/language/schema";
import { appStorage } from "@/utils/storage";

const KEY = StorageKeys.appLanguageKey;

export const getStoredLanguage = (): Language => {
  try {
    const saved = appStorage.getString(KEY) as Language | undefined;
    return saved ?? SupportedLanguages.EN_EN;
  } catch {
    return SupportedLanguages.EN_EN;
  }
};

export const setStoredLanguage = (lng: Language): void => {
  try {
    appStorage.set(KEY, lng);
  } catch (error) {
    console.log("🚀 ~ setStoredLanguage ~ error:", error);
  }
};
