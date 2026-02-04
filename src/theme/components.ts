import type { ImageStyle, TextStyle, ViewStyle } from "react-native";
import {
  InputContainerParams,
  InputTextParams,
} from "@/components/atoms/TextInput/types";
import type { ComponentTheme } from "@/theme/types/theme";

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

  return { ...staticStyles, inputContainer, inputText };
};

export default generateComponentStyles;
