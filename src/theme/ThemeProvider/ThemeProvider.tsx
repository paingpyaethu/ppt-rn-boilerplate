import type {
  FulfilledThemeConfiguration,
  Variant,
} from "@/theme/types/config";
import type { ComponentTheme, Theme } from "@/theme/types/theme";
import type { PropsWithChildren } from "react";
import type { MMKV } from "react-native-mmkv";

import { DarkTheme, DefaultTheme } from "@react-navigation/native";
import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  generateBackgrounds,
  staticBackgroundStyles,
} from "@/theme/backgrounds";
import {
  generateBorderColors,
  generateBorderRadius,
  generateBorderWidths,
  staticBorderStyles,
} from "@/theme/borders";
import componentsGenerator from "@/theme/components";
import {
  generateFontColors,
  generateFontFamilies,
  generateFontSizes,
  generateFontWeights,
  staticFontStyles,
} from "@/theme/fonts";
import { generateGutters, staticGutterStyles } from "@/theme/gutters";
import layout from "@/theme/layout";
import generateConfig from "@/theme/ThemeProvider/generateConfig";
import { useTranslation } from "react-i18next";
import { Language } from "@/hooks/language/schema";

type Context = {
  changeTheme: (variant: Variant) => void;
} & Theme;

export const ThemeContext = createContext<Context | undefined>(undefined);

type Properties = PropsWithChildren<{
  readonly storage: MMKV;
}>;

function ThemeProvider({ children = false, storage }: Properties) {
  // Current theme variant
  const [variant, setVariant] = useState(
    (storage.getString("theme") ?? "default") as Variant,
  );

  const { i18n } = useTranslation();

  // Initialize theme at default if not defined
  useEffect(() => {
    const appHasThemeDefined = storage.contains("theme");
    if (!appHasThemeDefined) {
      storage.set("theme", "default");
      setVariant("default");
    }
  }, [storage]);

  const changeTheme = useCallback(
    (nextVariant: Variant) => {
      setVariant(nextVariant);
      storage.set("theme", nextVariant);
    },
    [storage],
  );

  const language = useMemo(() => {
    return i18n.language as Language;
  }, [i18n.language]);

  // Flatten config with current variant
  const fullConfig = useMemo(() => {
    return generateConfig(variant) satisfies FulfilledThemeConfiguration;
  }, [variant]);

  const fonts = useMemo(() => {
    return {
      ...generateFontSizes(),
      ...generateFontColors(fullConfig),
      ...generateFontFamilies(),
      ...generateFontWeights(language),
      ...staticFontStyles,
    };
  }, [fullConfig, language]);

  const backgrounds = useMemo(() => {
    return {
      ...generateBackgrounds(fullConfig),
      ...staticBackgroundStyles,
    };
  }, [fullConfig]);

  const gutters = useMemo(() => {
    return {
      ...generateGutters(fullConfig),
      ...staticGutterStyles,
    };
  }, [fullConfig]);

  const borders = useMemo(() => {
    return {
      ...generateBorderColors(fullConfig),
      ...generateBorderRadius(),
      ...generateBorderWidths(),
      ...staticBorderStyles,
    };
  }, [fullConfig]);

  const navigationTheme = useMemo(() => {
    if (variant === "dark") {
      return {
        ...DarkTheme,
        colors: fullConfig.navigationColors,
        dark: true,
      };
    }
    return {
      ...DefaultTheme,
      colors: fullConfig.navigationColors,
      dark: false,
    };
  }, [variant, fullConfig.navigationColors]);

  const theme = useMemo(() => {
    return {
      backgrounds,
      borders,
      colors: fullConfig.colors,
      fonts,
      gutters,
      layout,
      variant,
    } satisfies ComponentTheme;
  }, [variant, fonts, backgrounds, borders, fullConfig.colors, gutters]);

  const components = useMemo(() => {
    return componentsGenerator(theme);
  }, [theme]);

  const value = useMemo(() => {
    return { ...theme, changeTheme, components, navigationTheme };
  }, [theme, components, navigationTheme, changeTheme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export default ThemeProvider;
