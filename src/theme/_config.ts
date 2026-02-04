import { SupportedLanguages } from "@/hooks/language/schema";
import type { ThemeConfiguration } from "@/theme/types/config";

import { DarkTheme, DefaultTheme } from "@react-navigation/native";

export const enum Variant {
  DARK = "dark",
}

const colorsLight = {
  background: "#FFFFFF",
  gray100: "#DFDFDF",
  gray200: "#A1A1A1",
  gray400: "#4D4D4D",
  gray50: "#EFEFEF",
  gray800: "#303030",
  purple100: "#E1E1EF",
  purple50: "#1B1A23",
  purple500: "#44427D",
  red500: "#C13333",
  skeleton: "#A1A1A1",
} as const;

const colorsDark = {
  background: "#000000",
  gray100: "#000000",
  gray200: "#BABABA",
  gray400: "#969696",
  gray50: "#EFEFEF",
  gray800: "#E0E0E0",
  purple100: "#252732",
  purple50: "#1B1A23",
  purple500: "#A6A4F0",
  red500: "#C13333",
  skeleton: "#303030",
} as const;

// rpx() applied in fonts.ts and gutters.ts generators
const sizes = [12, 14, 16, 18, 20, 24, 28, 32, 40, 64, 80] as const;

export const fontFamilies = {
  pyidaungsu: "Pyidaungsu",
  pyidaungsuBold: "Pyidaungsu-Bold",
  spaceGrotesk: "SpaceGrotesk-Regular",
  spaceGroteskBold: "SpaceGrotesk-Bold",
  spaceGroteskMedium: "SpaceGrotesk-Medium",
  spaceGroteskSemiBold: "SpaceGrotesk-SemiBold",
} as const;

export const fontLanguageMapping = {
  [SupportedLanguages.EN_EN]: {
    regular: fontFamilies.spaceGrotesk,
    bold: fontFamilies.spaceGroteskBold,
    medium: fontFamilies.spaceGroteskMedium,
    semiBold: fontFamilies.spaceGroteskSemiBold,
  },
  [SupportedLanguages.MM_MM]: {
    regular: fontFamilies.pyidaungsu,
    bold: fontFamilies.pyidaungsuBold,
    medium: fontFamilies.pyidaungsuBold,
    semiBold: fontFamilies.pyidaungsuBold,
  },
} as const;

export const config = {
  backgrounds: colorsLight,
  borders: {
    colors: colorsLight,
    radius: [4, 16], // rpx() applied in borders.ts generators
    widths: [1, 2], // rpx() applied in borders.ts generators
  },
  colors: colorsLight,
  fonts: {
    colors: colorsLight,
    families: fontFamilies,
    sizes,
  },
  gutters: sizes,
  navigationColors: {
    ...DefaultTheme.colors,
    background: colorsLight.gray50,
    card: colorsLight.gray50,
  },
  variants: {
    dark: {
      backgrounds: colorsDark,
      borders: {
        colors: colorsDark,
      },
      colors: colorsDark,
      fonts: {
        colors: colorsDark,
      },
      navigationColors: {
        ...DarkTheme.colors,
        background: colorsDark.purple50,
        card: colorsDark.purple50,
      },
    },
  },
} as const satisfies ThemeConfiguration;
