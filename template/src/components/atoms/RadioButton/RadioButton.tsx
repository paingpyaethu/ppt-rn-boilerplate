import React from "react";
import { View, StyleProp, ViewStyle, Pressable } from "react-native";
import {
  useController,
  UseControllerProps,
  FieldValues,
} from "react-hook-form";
import { Label, ErrorText, Text } from "@/components/atoms/Text";
import { useTheme } from "@/theme";
import type { RadioButtonOption } from "./types";

const getTextColor = (
  isDisabled: boolean,
  isSelected: boolean,
): "gray400" | "purple500" | "gray800" => {
  if (isDisabled) return "gray400";
  if (isSelected) return "purple500";
  return "gray800";
};

export interface RadioButtonProps<T extends FieldValues = FieldValues>
  extends UseControllerProps<T> {
  /**
   * Label text displayed above the radio group
   */
  label?: string;

  /**
   * Array of options to display
   */
  options: RadioButtonOption[];

  /**
   * Whether the entire radio group is disabled
   * @default false
   */
  disabled?: boolean;

  /**
   * Additional styles for the outer container
   */
  containerStyle?: StyleProp<ViewStyle>;

  /**
   * Test ID for testing
   */
  testID?: string;
}

const RadioButton = <T extends FieldValues = FieldValues>({
  name,
  control,
  rules,
  defaultValue,
  label,
  options,
  disabled = false,
  containerStyle,
  testID,
}: Readonly<RadioButtonProps<T>>) => {
  const { components, gutters } = useTheme();

  const {
    field: { onChange, value },
    fieldState: { error },
  } = useController({
    name,
    control,
    rules,
    defaultValue,
  });

  return (
    <View style={containerStyle} testID={testID}>
      {label && (
        <Label style={[gutters.marginBottom_10]} testID={`${testID}-label`}>
          {label}
        </Label>
      )}

      <View style={[gutters.gap_12]}>
        {options.map((option) => {
          const isSelected = value === option.value;
          const isDisabled = disabled || !!option.disabled;

          return (
            <Pressable
              key={option.value}
              onPress={() => {
                if (!isDisabled) {
                  onChange(option.value);
                }
              }}
              style={[
                components.radioItemContainer({ isSelected, isDisabled }),
              ]}
              disabled={isDisabled}
              testID={`${testID}-option-${option.value}`}
              accessibilityRole="radio"
              accessibilityState={{ selected: isSelected, disabled: isDisabled }}
              accessibilityLabel={option.label}
            >
              <View
                style={[
                  components.radioOuterCircle({ isSelected, isDisabled }),
                ]}
              >
                {isSelected && (
                  <View
                    style={[
                      components.radioInnerCircle({ isSelected }),
                    ]}
                  />
                )}
              </View>

              {option.leftElement && (
                <View testID={`${testID}-option-${option.value}-left`}>
                  {option.leftElement}
                </View>
              )}

              <View style={[{ flex: 1 }]}>
                <Text
                  size="size_16"
                  weight={isSelected ? "semiBold" : "medium"}
                  color={getTextColor(isDisabled, isSelected)}
                  fontFamily={option.labelFontFamily}
                >
                  {option.label}
                </Text>
                {option.description && (
                  <Text
                    size="size_12"
                    color="gray400"
                    fontFamily={option.descriptionFontFamily}
                  >
                    {option.description}
                  </Text>
                )}
              </View>
            </Pressable>
          );
        })}
      </View>

      {error?.message && (
        <ErrorText style={[gutters.marginTop_4]} testID={`${testID}-error`}>
          {error.message}
        </ErrorText>
      )}
    </View>
  );
};

export default RadioButton;
