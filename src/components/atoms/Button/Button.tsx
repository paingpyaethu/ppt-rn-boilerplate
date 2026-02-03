import React from "react";
import {
  TouchableOpacity,
  ActivityIndicator,
  ViewStyle,
  TextStyle,
  StyleProp,
  View,
} from "react-native";
import { useTheme } from "@/theme";
import { Text } from "../Text";
import { FontSizesKeys } from "@/theme/types/fonts";
import { rpx } from "@/utils/responsive";

/**
 * Button variant types
 */
export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";

/**
 * Button size types
 */
export type ButtonSize = "small" | "medium" | "large";

export interface ButtonProps {
  /**
   * Button label text
   */
  children: React.ReactNode;

  /**
   * Button variant style
   * @default "primary"
   */
  variant?: ButtonVariant;

  /**
   * Button size
   * @default "medium"
   */
  size?: ButtonSize;

  /**
   * Callback when button is pressed
   */
  onPress?: () => void;

  /**
   * Whether the button is disabled
   * @default false
   */
  disabled?: boolean;

  /**
   * Whether to show loading indicator
   * @default false
   */
  loading?: boolean;

  /**
   * Icon component to render on the left
   */
  leftIcon?: React.ReactNode;

  /**
   * Icon component to render on the right
   */
  rightIcon?: React.ReactNode;

  /**
   * Whether the button should take full width
   * @default false
   */
  fullWidth?: boolean;

  /**
   * Additional styles for the button container
   */
  style?: StyleProp<ViewStyle>;

  /**
   * Additional styles for the button text
   */
  textStyle?: StyleProp<TextStyle>;

  /**
   * Text size variant
   */
  textSize?: FontSizesKeys;

  /**
   * Test ID for testing
   */
  testID?: string;

  /**
   * Accessibility label
   */
  accessibilityLabel?: string;

  /**
   * Active opacity when pressed
   * @default 0.7
   */
  activeOpacity?: number;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "medium",
  onPress,
  disabled = false,
  loading = false,
  leftIcon,
  rightIcon,
  fullWidth = false,
  style,
  textStyle,
  textSize = "size_16",
  testID,
  accessibilityLabel,
  activeOpacity = 0.7,
}) => {
  const { colors, layout } = useTheme();

  const isDisabled = disabled || loading;

  // Get button container styles based on variant
  const getVariantStyles = React.useMemo((): ViewStyle => {
    const baseStyle: ViewStyle = {
      ...layout.row,
      ...layout.justifyCenter,
      ...layout.itemsCenter,
    };

    switch (variant) {
      case "primary":
        return {
          ...baseStyle,
          backgroundColor: isDisabled ? colors.gray200 : colors.purple500,
        };
      case "secondary":
        return {
          ...baseStyle,
          backgroundColor: isDisabled ? colors.gray100 : colors.purple100,
        };
      case "outline":
        return {
          ...baseStyle,
          backgroundColor: "transparent",
          borderWidth: 1,
          borderColor: isDisabled ? colors.gray200 : colors.purple500,
        };
      case "ghost":
        return {
          ...baseStyle,
          backgroundColor: "transparent",
        };
      default:
        return baseStyle;
    }
  }, [variant, isDisabled, colors, layout]);

  // Get text color based on variant
  const getTextColor = React.useMemo((): keyof typeof colors => {
    if (isDisabled) {
      return variant === "primary" ? "gray50" : "gray400";
    }

    switch (variant) {
      case "primary":
        return "gray50";
      case "secondary":
        return "purple500";
      case "outline":
        return "purple500";
      case "ghost":
        return "purple500";
      default:
        return "gray50";
    }
  }, [variant, isDisabled]);

  // Get loading indicator color
  const getLoaderColor = React.useMemo((): string => {
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
  }, [variant, colors]);

  const containerStyle: ViewStyle = {
    ...getVariantStyles,
    height: 56,
    ...(fullWidth && { width: "100%" }),
    opacity: isDisabled && !loading ? 0.6 : 1,
  };

  return (
    <TouchableOpacity
      style={[containerStyle, style]}
      onPress={onPress}
      disabled={isDisabled}
      activeOpacity={activeOpacity}
      testID={testID}
      accessibilityLabel={accessibilityLabel}
      accessibilityRole="button"
      accessibilityState={{ disabled: isDisabled }}
    >
      {loading ? (
        <ActivityIndicator
          size="small"
          color={getLoaderColor}
          testID={`${testID}-loader`}
        />
      ) : (
        <>
          {leftIcon && (
            <View style={{ marginRight: rpx(6) }} testID={`${testID}-left-icon`}>
              {leftIcon}
            </View>
          )}
          {typeof children === "string" ? (
            <Text
              size={textSize}
              weight="semiBold"
              color={getTextColor}
              style={textStyle}
              testID={`${testID}-text`}
            >
              {children}
            </Text>
          ) : (
            children
          )}
          {rightIcon && (
            <View style={{ marginLeft: rpx(6) }} testID={`${testID}-right-icon`}>
              {rightIcon}
            </View>
          )}
        </>
      )}
    </TouchableOpacity>
  );
};
