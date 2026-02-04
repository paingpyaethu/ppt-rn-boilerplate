import type { UnionConfiguration } from "@/theme/types/config";
import type { Gutters } from "@/theme/types/gutters";

import { type ViewStyle } from "react-native";

import { rpx } from "@/utils/responsive";

/**
 * Generates gutter styles from configuration
 * Uses rpx() for responsive values
 */
export const generateGutters = (configuration: UnionConfiguration): Gutters => {
  return configuration.gutters.reduce<Gutters>((accumulator, current) => {
    return Object.assign(accumulator, {
      [`gap_${current}`]: {
        gap: rpx(current),
      },
      [`margin_${current}`]: {
        margin: rpx(current),
      },
      [`marginBottom_${current}`]: {
        marginBottom: rpx(current),
      },
      [`marginHorizontal_${current}`]: {
        marginHorizontal: rpx(current),
      },
      [`marginLeft_${current}`]: {
        marginLeft: rpx(current),
      },
      [`marginRight_${current}`]: {
        marginRight: rpx(current),
      },
      [`marginTop_${current}`]: {
        marginTop: rpx(current),
      },
      [`marginVertical_${current}`]: {
        marginVertical: rpx(current),
      },
      [`padding_${current}`]: {
        padding: rpx(current),
      },
      [`paddingBottom_${current}`]: {
        paddingBottom: rpx(current),
      },
      [`paddingHorizontal_${current}`]: {
        paddingHorizontal: rpx(current),
      },
      [`paddingLeft_${current}`]: {
        paddingLeft: rpx(current),
      },
      [`paddingRight_${current}`]: {
        paddingRight: rpx(current),
      },
      [`paddingTop_${current}`]: {
        paddingTop: rpx(current),
      },
      [`paddingVertical_${current}`]: {
        paddingVertical: rpx(current),
      },
    });
  }, {} as Gutters);
};

export const staticGutterStyles = {} as const satisfies Record<
  string,
  ViewStyle
>;
