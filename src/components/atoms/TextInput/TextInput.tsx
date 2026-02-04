import React, { useMemo } from "react";
import {
  TextInput as RNTextInput,
  View,
  StyleProp,
  ViewStyle,
  TextStyle,
  TextInputProps as RNTextInputProps,
} from "react-native";
import {
  useController,
  UseControllerProps,
  FieldValues,
} from "react-hook-form";
import { useTheme } from "@/theme";
import { Label, ErrorText } from "../Text";
import { rpx } from "@/utils/responsive";

/**
 * TextInput variant types
 */
export type TextInputVariant = "default" | "outline" | "filled";

export interface TextInputProps<T extends FieldValues = FieldValues>
  extends Omit<
      RNTextInputProps,
      "value" | "onChangeText" | "onBlur" | "defaultValue"
    >,
    UseControllerProps<T> {
  /**
   * Label text displayed above the input
   */
  label?: string;

  /**
   * TextInput variant style
   * @default "outline"
   */
  variant?: TextInputVariant;

  /**
   * Whether the input is disabled
   * @default false
   */
  disabled?: boolean;

  /**
   * Left icon/element
   */
  leftElement?: React.ReactNode;

  /**
   * Right icon/element
   */
  rightElement?: React.ReactNode;

  /**
   * Additional styles for the outer container
   */
  containerStyle?: StyleProp<ViewStyle>;

  /**
   * Additional styles for the input container (wraps input + icons)
   */
  inputContainerStyle?: StyleProp<ViewStyle>;

  /**
   * Additional styles for the text input
   */
  inputStyle?: StyleProp<TextStyle>;

  /**
   * Test ID for testing
   */
  testID?: string;

  /**
   * Helper text displayed below the input (when no error)
   */
  helperText?: string;
}

export function TextInput<T extends FieldValues = FieldValues>({
  name,
  control,
  rules,
  defaultValue,
  label,
  variant = "outline",
  disabled = false,
  leftElement,
  rightElement,
  containerStyle,
  inputContainerStyle,
  inputStyle,
  testID,
  helperText,
  placeholder,
  ...restProps
}: Readonly<TextInputProps<T>>) {
  const { colors, fonts, layout } = useTheme();

  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { error },
  } = useController({
    name,
    control,
    rules,
    defaultValue,
  });

  // Get input container styles based on variant and state
  const getInputContainerStyles = useMemo((): ViewStyle => {
    const baseStyle: ViewStyle = {
      ...layout.row,
      ...layout.itemsCenter,
      minHeight: rpx(48),
      paddingHorizontal: rpx(12),
      borderRadius: rpx(8),
    };

    const getBorderColor = () => {
      if (error) return colors.red500;
      if (disabled) return colors.gray200;
      return colors.gray400;
    };

    switch (variant) {
      case "default":
        return {
          ...baseStyle,
          borderBottomWidth: 1,
          borderBottomColor: getBorderColor(),
          borderRadius: 0,
          paddingHorizontal: 0,
        };
      case "filled":
        return {
          ...baseStyle,
          backgroundColor: disabled ? colors.gray100 : colors.gray50,
          borderWidth: error ? 1 : 0,
          borderColor: error ? colors.red500 : "transparent",
        };
      case "outline":
      default:
        return {
          ...baseStyle,
          borderWidth: 1,
          borderColor: getBorderColor(),
          backgroundColor: disabled ? colors.gray100 : "transparent",
        };
    }
  }, [variant, error, disabled, colors, layout]);

  const inputTextStyle: TextStyle = React.useMemo(() => {
    return {
      ...fonts.size_14,
      ...fonts.fontRegular,
      color: disabled ? colors.gray400 : colors.gray800,
      flex: 1,
      paddingVertical: rpx(10),
      paddingHorizontal: leftElement || rightElement ? rpx(8) : 0,
    };
  }, [fonts, colors, disabled, leftElement, rightElement]);

  return (
    <View style={containerStyle} testID={testID}>
      {label && (
        <Label style={{ marginBottom: rpx(6) }} testID={`${testID}-label`}>
          {label}
        </Label>
      )}

      <View style={[getInputContainerStyles, inputContainerStyle]}>
        {leftElement && (
          <View testID={`${testID}-left-element`}>{leftElement}</View>
        )}

        <RNTextInput
          ref={ref}
          value={value}
          onChangeText={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          placeholderTextColor={colors.gray400}
          editable={!disabled}
          style={[inputTextStyle, inputStyle]}
          testID={`${testID}-input`}
          accessibilityLabel={label || placeholder}
          accessibilityState={{ disabled }}
          {...restProps}
        />

        {rightElement && (
          <View testID={`${testID}-right-element`}>{rightElement}</View>
        )}
      </View>

      {error && (
        <ErrorText style={{ marginTop: rpx(4) }} testID={`${testID}-error`}>
          {error.message}
        </ErrorText>
      )}

      {!error && helperText && (
        <Label
          style={{ marginTop: rpx(4), color: colors.gray400 }}
          testID={`${testID}-helper`}
        >
          {helperText}
        </Label>
      )}
    </View>
  );
}
