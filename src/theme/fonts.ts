import type { UnionConfiguration } from "@/theme/types/config";
import type {
  FontColors,
  FontFamilies,
  FontSizes,
  FontWeights,
} from "@/theme/types/fonts";
import type { TextStyle } from "react-native";

import { config, fontLanguageMapping } from "@/theme/_config";
import { Language } from "@/hooks/language/schema";
import { rpx } from "@/utils/responsive";

export const generateFontColors = (configuration: UnionConfiguration) => {
  return Object.entries(configuration.fonts.colors).reduce<FontColors>(
    (accumulator, [key, value]) => {
      return Object.assign(accumulator, {
        [key]: {
          color: value,
        },
      });
    },
    {} as FontColors,
  );
};

/**
 * Generates font size styles from configuration
 * Uses rpx() for responsive values
 */
export const generateFontSizes = () => {
  return config.fonts.sizes.reduce<FontSizes>((accumulator, size) => {
    return Object.assign(accumulator, {
      [`size_${size}`]: {
        fontSize: rpx(size),
      },
    });
  }, {} as FontSizes);
};

export const generateFontFamilies = () => {
  return Object.entries(config.fonts.families ?? {}).reduce<FontFamilies>(
    (accumulator, [key, value]) => {
      return Object.assign(accumulator, {
        [key]: {
          fontFamily: value,
        },
      });
    },
    {} as FontFamilies,
  );
};

export const generateFontWeights = (language: Language) => {
  const languageFonts =
    fontLanguageMapping[language] ?? fontLanguageMapping["en"];

  return {
    fontRegular: {
      fontFamily: languageFonts.regular,
    },
    fontBold: {
      fontFamily: languageFonts.bold,
    },
    fontMedium: {
      fontFamily: languageFonts.medium,
    },
    fontSemiBold: {
      fontFamily: languageFonts.semiBold,
    },
  } as const satisfies FontWeights;
};

export const staticFontStyles = {
  alignCenter: {
    textAlign: "center",
  },
  bold: {
    fontWeight: "bold",
  },
  capitalize: {
    textTransform: "capitalize",
  },
  uppercase: {
    textTransform: "uppercase",
  },
} as const satisfies Record<string, TextStyle>;
