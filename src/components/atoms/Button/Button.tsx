import React, { useMemo } from "react";
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
import type { ButtonVariant, ButtonSize } from "./types";

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
  testID,
  accessibilityLabel,
  activeOpacity = 0.7,
}) => {
  const { components } = useTheme();

  const isDisabled = disabled || loading;

  // Get styles from theme components
  const containerStyle = useMemo(
    () =>
      components.buttonContainer({
        variant,
        size,
        isDisabled,
        fullWidth,
      }),
    [components, variant, size, isDisabled, fullWidth]
  );

  const textColor = useMemo(
    () => components.buttonTextColor({ variant, isDisabled }),
    [components, variant, isDisabled]
  );

  const textSize = useMemo(
    () => components.buttonTextSize(size),
    [components, size]
  );

  const loaderColor = useMemo(
    () => components.buttonLoaderColor({ variant }),
    [components, variant]
  );

  const leftIconStyle = useMemo(
    () => components.buttonIconContainer({ size, position: "left" }),
    [components, size]
  );

  const rightIconStyle = useMemo(
    () => components.buttonIconContainer({ size, position: "right" }),
    [components, size]
  );

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
          color={loaderColor}
          testID={`${testID}-loader`}
        />
      ) : (
        <>
          {leftIcon && (
            <View style={leftIconStyle} testID={`${testID}-left-icon`}>
              {leftIcon}
            </View>
          )}
          {typeof children === "string" ? (
            <Text
              size={textSize}
              weight="semiBold"
              color={textColor}
              style={textStyle}
              testID={`${testID}-text`}
            >
              {children}
            </Text>
          ) : (
            children
          )}
          {rightIcon && (
            <View style={rightIconStyle} testID={`${testID}-right-icon`}>
              {rightIcon}
            </View>
          )}
        </>
      )}
    </TouchableOpacity>
  );
};
