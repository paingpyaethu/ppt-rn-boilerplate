import React, { useState } from "react";
import {
  TextInput as RNTextInput,
  View,
  StyleProp,
  ViewStyle,
  TextStyle,
  TextInputProps as RNTextInputProps,
  Pressable,
} from "react-native";
import {
  useController,
  UseControllerProps,
  FieldValues,
} from "react-hook-form";
import IconByVariant from "@/components/atoms/IconByVariant/IconByVariant";
import { Label, ErrorText } from "@/components/atoms/Text";
import { useTheme } from "@/theme";
import { rpx } from "@/utils/responsive";
import { TextInputVariant } from "./types";

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

function TextInput<T extends FieldValues = FieldValues>({
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
  secureTextEntry,
  ...restProps
}: Readonly<TextInputProps<T>>) {
  const { colors, components, fonts, gutters } = useTheme();
  const [securePassword, setSecurePassword] = useState(secureTextEntry);

  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { error },
  } = useController({
    name,
    control,
    rules,
    defaultValue,
  });

  const containerStyles = components.inputContainer({ variant, hasError: !!error, disabled });
  const textStyles = components.inputText({ disabled, hasIcon: !!(leftElement || rightElement) });

  return (
    <View style={containerStyle} testID={testID}>
      {label && (
        <Label style={[gutters.marginVertical_6]} testID={`${testID}-label`}>
          {label}
        </Label>
      )}

      <View style={[containerStyles, inputContainerStyle]}>
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
          style={[textStyles, inputStyle]}
          testID={`${testID}-input`}
          accessibilityLabel={label || placeholder}
          accessibilityState={{ disabled }}
          secureTextEntry={securePassword}
          {...restProps}
        />

        {rightElement && (
          <View testID={`${testID}-right-element`}>{rightElement}</View>
        )}

        {secureTextEntry && (
          <Pressable
            onPress={() => setSecurePassword((prev) => !prev)}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            testID={`${testID}-password-toggle`}
            accessibilityLabel={
              securePassword ? "Hide password" : "Show password"
            }
            accessibilityRole="button"
          >
            <IconByVariant
              path={securePassword ? "eye-off" : "eye"}
              width={rpx(18)}
              height={rpx(18)}
              color={colors.gray400}
            />
          </Pressable>
        )}
      </View>

      {error?.message && (
        <ErrorText style={[gutters.marginTop_4]} testID={`${testID}-error`}>
          {error.message}
        </ErrorText>
      )}

      {!error && helperText && (
        <Label
          style={[gutters.marginTop_4, fonts.gray400]}
          testID={`${testID}-helper`}
        >
          {helperText}
        </Label>
      )}
    </View>
  );
}

export default TextInput;
