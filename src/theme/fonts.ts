import type { UnionConfiguration } from "@/theme/types/config";
import type { FontColors, FontFamilies, FontSizes } from "@/theme/types/fonts";
import type { TextStyle } from "react-native";

import { config } from "@/theme/_config";

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

export const generateFontSizes = () => {
  return config.fonts.sizes.reduce<FontSizes>((accumulator, size) => {
    return Object.assign(accumulator, {
      [`size_${size}`]: {
        fontSize: size,
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
