import type { ImageStyle, TextStyle, ViewStyle } from "react-native";
import {
  InputContainerParams,
  InputTextParams,
} from "@/components/atoms/TextInput/types";
import type {
  ButtonSize,
  ButtonContainerParams,
  ButtonTextParams,
  ButtonLoaderParams,
  ButtonIconParams,
} from "@/components/atoms/Button/types";
import type { CardContainerParams } from "@/components/atoms/Card/types";
import type {
  RadioOuterCircleParams,
  RadioInnerCircleParams,
  RadioItemContainerParams,
} from "@/components/atoms/RadioButton/types";
import type { ComponentTheme } from "@/theme/types/theme";
import { rpx } from "@/utils/responsive";

const generateComponentStyles = ({
  backgrounds,
  borders,
  colors,
  fonts,
  gutters,
  layout,
}: ComponentTheme) => {
  const staticStyles = {
    tabBar: { ...backgrounds.background } as ViewStyle,
    tabBarLabel: { ...fonts.size_12, ...fonts.fontBold } as TextStyle,
    buttonCircle: {
      ...layout.justifyCenter,
      ...layout.itemsCenter,
      ...backgrounds.purple100,
      ...fonts.gray400,
      borderRadius: 35,
      height: 64,
      width: 64,
    } as ViewStyle,
    circle250: { borderRadius: 140, height: 250, width: 250 } as ImageStyle,
    cardHeaderStyle: {
      ...borders.wBottom_1,
      ...borders.gray200,
    } as ViewStyle,
    cardFooterStyle: {
      ...gutters.paddingTop_12,
      ...borders.wTop_1,
      ...borders.gray200,
    } as ViewStyle,
  };

  const inputContainer = ({
    variant,
    hasError,
    disabled,
  }: InputContainerParams): ViewStyle => {
    const base: ViewStyle = {
      ...layout.row,
      ...layout.itemsCenter,
      ...layout.minHeight48,
      ...gutters.paddingHorizontal_12,
      ...borders.rounded_8,
    };
    const getBorderColor = () => {
      if (hasError) return colors.red500;
      if (disabled) return colors.gray200;
      return colors.gray400;
    };

    if (variant === "default") {
      return {
        ...base,
        ...borders.wBottom_1,
        borderBottomColor: getBorderColor(),
      };
    }
    if (variant === "filled") {
      return {
        ...base,
        ...(disabled ? backgrounds.gray100 : backgrounds.gray50),
        ...(hasError ? borders.w_1 : {}),
        ...(hasError ? borders.red500 : borders.transparent),
      };
    }
    return {
      ...base,
      ...borders.w_1,
      ...(disabled ? backgrounds.gray100 : backgrounds.transparent),
      borderColor: getBorderColor(),
    };
  };

  const inputText = ({ disabled, hasIcon }: InputTextParams): TextStyle => ({
    ...layout.flex_1,
    ...fonts.size_14,
    ...fonts.fontRegular,
    ...gutters.paddingVertical_10,
    ...(disabled ? fonts.gray400 : fonts.gray800),
    ...(hasIcon ? gutters.paddingHorizontal_8 : {}),
  });

  // Button styles
  const buttonContainer = ({
    variant,
    size,
    isDisabled,
    fullWidth,
  }: ButtonContainerParams): ViewStyle => {
    const baseStyle: ViewStyle = {
      ...layout.row,
      ...layout.justifyCenter,
      ...layout.itemsCenter,
    };

    // Variant styles
    const getVariantStyle = (): ViewStyle => {
      switch (variant) {
        case "primary":
          return {
            backgroundColor: isDisabled ? colors.gray200 : colors.purple500,
          };
        case "secondary":
          return {
            backgroundColor: isDisabled ? colors.gray100 : colors.purple100,
          };
        case "outline":
          return {
            backgroundColor: "transparent",
            borderWidth: 1,
            borderColor: isDisabled ? colors.gray200 : colors.purple500,
          };
        case "ghost":
          return {
            backgroundColor: "transparent",
          };
        default:
          return {};
      }
    };

    // Size styles
    const getSizeStyle = (): ViewStyle => {
      switch (size) {
        case "small":
          return {
            ...gutters.paddingHorizontal_12,
            ...gutters.paddingVertical_8,
            ...borders.rounded_4,
          };
        case "large":
          return {
            ...gutters.paddingHorizontal_24,
            ...gutters.paddingVertical_16,
            ...borders.rounded_16,
          };
        case "medium":
        default:
          return {
            ...gutters.paddingHorizontal_16,
            ...gutters.paddingVertical_12,
            ...borders.rounded_8,
          };
      }
    };

    return {
      ...baseStyle,
      ...getVariantStyle(),
      ...getSizeStyle(),
      ...(fullWidth && { width: "100%" }),
      opacity: isDisabled ? 0.6 : 1,
    };
  };

  const buttonTextColor = ({
    variant,
    isDisabled,
  }: ButtonTextParams): keyof typeof colors => {
    if (isDisabled) {
      return variant === "primary" ? "gray50" : "gray400";
    }

    switch (variant) {
      case "primary":
        return "gray50";
      case "secondary":
      case "outline":
      case "ghost":
        return "purple500";
      default:
        return "gray50";
    }
  };

  const buttonTextSize = (size: ButtonSize): "size_12" | "size_16" => {
    return size === "small" ? "size_12" : "size_16";
  };

  const buttonLoaderColor = ({ variant }: ButtonLoaderParams): string => {
    switch (variant) {
      case "primary":
        return colors.gray50;
      case "secondary":
      case "outline":
      case "ghost":
        return colors.purple500;
      default:
        return colors.gray50;
    }
  };

  const buttonIconContainer = ({
    size,
    position,
  }: ButtonIconParams): ViewStyle => {
    const spacing = size === "small" ? rpx(6) : rpx(8);
    return position === "left"
      ? { marginRight: spacing }
      : { marginLeft: spacing };
  };

  // Card styles
  const cardContainer = ({
    variant,
    disabled,
  }: CardContainerParams): ViewStyle => {
    const baseStyle: ViewStyle = {
      ...borders.rounded_8,
      overflow: "hidden",
    };

    // Variant styles
    const getVariantStyle = (): ViewStyle => {
      switch (variant) {
        case "elevated":
          return {
            backgroundColor: colors.background,
            shadowColor: colors.gray800,
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 4,
            elevation: 3,
          };
        case "outlined":
          return {
            ...backgrounds.transparent,
            ...borders.w_1,
            ...borders.gray200,
          };
        case "filled":
          return {
            ...backgrounds.gray50,
          };
        case "flat":
        default:
          return {
            ...backgrounds.background,
          };
      }
    };

    return {
      ...baseStyle,
      ...gutters.padding_16,
      ...getVariantStyle(),
      opacity: disabled ? 0.5 : 1,
    };
  };

  // RadioButton styles
  const getRadioBorderColor = (isDisabled: boolean, isSelected: boolean) => {
    if (isDisabled) return colors.gray200;
    if (isSelected) return colors.purple500;
    return colors.gray400;
  };

  const radioOuterCircle = ({
    isSelected,
    isDisabled,
  }: RadioOuterCircleParams): ViewStyle => ({
    width: rpx(22),
    height: rpx(22),
    borderRadius: rpx(11),
    borderWidth: rpx(2),
    borderColor: getRadioBorderColor(isDisabled, isSelected),
    ...layout.justifyCenter,
    ...layout.itemsCenter,
  });

  const radioInnerCircle = ({
    isSelected,
  }: RadioInnerCircleParams): ViewStyle => ({
    width: rpx(12),
    height: rpx(12),
    borderRadius: rpx(6),
    backgroundColor: isSelected ? colors.purple500 : "transparent",
  });

  const radioItemContainer = ({
    isSelected,
    isDisabled,
  }: RadioItemContainerParams): ViewStyle => ({
    ...layout.row,
    ...layout.itemsCenter,
    ...gutters.gap_12,
    ...gutters.padding_16,
    ...borders.rounded_8,
    ...(isSelected
      ? {
          backgroundColor: colors.purple100,
          borderWidth: rpx(1.5),
          borderColor: colors.purple500,
        }
      : {
          ...borders.w_1,
          ...borders.gray200,
        }),
    opacity: isDisabled ? 0.5 : 1,
  });

  return {
    ...staticStyles,
    inputContainer,
    inputText,
    buttonContainer,
    buttonTextColor,
    buttonTextSize,
    buttonLoaderColor,
    buttonIconContainer,
    cardContainer,
    radioOuterCircle,
    radioInnerCircle,
    radioItemContainer,
  };
};

export default generateComponentStyles;
