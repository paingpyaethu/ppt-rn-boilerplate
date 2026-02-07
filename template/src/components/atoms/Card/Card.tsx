import React, { useMemo } from "react";
import { TouchableOpacity, View, ViewStyle, StyleProp } from "react-native";
import { useTheme } from "@/theme";
import type { CardVariant } from "./types";

export interface CardProps {
  /**
   * Card content
   */
  children: React.ReactNode;

  /**
   * Card variant style
   * @default "elevated"
   */
  variant?: CardVariant;

  /**
   * Optional header content
   */
  header?: React.ReactNode;

  /**
   * Optional footer content
   */
  footer?: React.ReactNode;

  /**
   * Whether the card is pressable
   * @default false
   */
  pressable?: boolean;

  /**
   * Callback when card is pressed (requires pressable=true)
   */
  onPress?: () => void;

  /**
   * Whether the card is disabled
   * @default false
   */
  disabled?: boolean;

  /**
   * Additional styles for the card container
   */
  style?: StyleProp<ViewStyle>;

  /**
   * Additional styles for the card content area
   */
  contentStyle?: StyleProp<ViewStyle>;

  /**
   * Additional styles for the header area
   */
  headerStyle?: StyleProp<ViewStyle>;

  /**
   * Additional styles for the footer area
   */
  footerStyle?: StyleProp<ViewStyle>;

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

const Card = ({
  children,
  variant = "elevated",
  header,
  footer,
  pressable = false,
  onPress,
  disabled = false,
  style,
  contentStyle,
  headerStyle,
  footerStyle,
  testID,
  accessibilityLabel,
  activeOpacity = 0.7,
}: CardProps) => {
  const { components } = useTheme();

  const containerStyle = useMemo(
    () =>
      components.cardContainer({
        variant,
        disabled,
      }),
    [components, variant, disabled]
  );

  const cardContent = (
    <>
      {header && (
        <View
          style={[components.cardHeaderStyle, headerStyle]}
          testID={`${testID}-header`}
        >
          {header}
        </View>
      )}
      <View style={[contentStyle]} testID={`${testID}-content`}>
        {children}
      </View>
      {footer && (
        <View
          style={[components.cardFooterStyle, footerStyle]}
          testID={`${testID}-footer`}
        >
          {footer}
        </View>
      )}
    </>
  );

  if (pressable) {
    return (
      <TouchableOpacity
        style={[containerStyle, style]}
        onPress={onPress}
        disabled={disabled}
        activeOpacity={activeOpacity}
        testID={testID}
        accessibilityLabel={accessibilityLabel}
        accessibilityRole="button"
        accessibilityState={{ disabled }}
      >
        {cardContent}
      </TouchableOpacity>
    );
  }

  return (
    <View
      style={[containerStyle, style]}
      testID={testID}
      accessibilityLabel={accessibilityLabel}
    >
      {cardContent}
    </View>
  );
};

export default Card;
