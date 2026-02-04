import type {
  BorderBottomRadius,
  BorderColors,
  BorderRadius,
  BorderTopRadius,
  BorderWidths,
} from "@/theme/types/borders";
import type { UnionConfiguration } from "@/theme/types/config";
import type { ViewStyle } from "react-native";

import { config } from "@/theme/_config";
import { rpx } from "@/utils/responsive";

/**
 * Generates border color styles from configuration
 * @param configuration
 */
export const generateBorderColors = (configuration: UnionConfiguration) => {
  return Object.entries(configuration.borders.colors).reduce<BorderColors>(
    (accumulator, [key, value]) => {
      return Object.assign(accumulator, {
        [key]: {
          borderColor: value,
        },
      });
    },
    {} as BorderColors,
  );
};

/**
 * Generates border radius styles from configuration
 * Uses rpx() for responsive values
 */
export const generateBorderRadius = () => {
  return config.borders.radius.reduce<
    BorderBottomRadius & BorderRadius & BorderTopRadius
  >((accumulator, radius) => {
    return Object.assign(accumulator, {
      [`rounded_${radius}`]: {
        borderRadius: rpx(radius),
      },
      [`roundedBottom_${radius}`]: {
        borderBottomLeftRadius: rpx(radius),
        borderBottomRightRadius: rpx(radius),
      },
      [`roundedBottomRight_${radius}`]: {
        borderBottomRightRadius: rpx(radius),
      },
      [`roundedTop_${radius}`]: {
        borderTopLeftRadius: rpx(radius),
        borderTopRightRadius: rpx(radius),
      },
      [`roundedTopLeft_${radius}`]: {
        borderTopLeftRadius: rpx(radius),
      },
    });
  }, {} as BorderBottomRadius & BorderRadius & BorderTopRadius);
};

/**
 * Generates border width styles from configuration
 * Uses rpx() for responsive values
 */
export const generateBorderWidths = () => {
  return config.borders.widths.reduce<BorderWidths>((accumulator, width) => {
    return Object.assign(accumulator, {
      [`w_${width}`]: {
        borderWidth: rpx(width),
      },
      [`wBottom_${width}`]: {
        borderBottomWidth: rpx(width),
      },
      [`wLeft_${width}`]: {
        borderLeftWidth: rpx(width),
      },
      [`wRight_${width}`]: {
        borderRightWidth: rpx(width),
      },
      [`wTop_${width}`]: {
        borderTopWidth: rpx(width),
      },
    });
  }, {} as BorderWidths);
};

/**
 * Static border styles
 * @desc These styles are not generated from configuration, you can add your own
 */
export const staticBorderStyles = {} as const satisfies Record<
  string,
  ViewStyle
>;
