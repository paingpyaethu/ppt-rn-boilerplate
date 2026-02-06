import React from "react";
import { Text as RNText, TextStyle, StyleProp } from "react-native";
import { useTheme } from "@/theme";
import { FontSizesKeys } from "@/theme/types/fonts";
import { fontLanguageMapping } from "@/theme/_config";
import { Language } from "@/hooks/language/schema";

export interface TextProps {
  /**
   * Text content to display
   */
  children: React.ReactNode;

  /**
   * Font size variant
   */
  size?: FontSizesKeys;

  /**
   * Font weight variant
   */
  weight?: "regular" | "medium" | "semiBold" | "bold";

  /**
   * Force a specific language font family ("en" or "mm").
   * When set, overrides the current language-based font
   * while respecting the weight prop.
   */
  fontFamily?: Language;

  /**
   * Text color variant
   */
  color?: keyof ReturnType<typeof useTheme>["colors"];

  /**
   * Text alignment
   */
  align?: "left" | "center" | "right" | "justify";

  /**
   * Text transformation
   */
  transform?: "none" | "capitalize" | "uppercase" | "lowercase";

  /**
   * Number of lines to display
   */
  numberOfLines?: number;

  /**
   * Additional styles
   */
  style?: StyleProp<TextStyle>;

  /**
   * Test ID for testing
   */
  testID?: string;

  /**
   * Callback when text is pressed
   */
  onPress?: () => void;

  /**
   * Whether text is selectable
   */
  selectable?: boolean;
}

export const Text: React.FC<TextProps> = ({
  children,
  size = "size_16",
  weight = "regular",
  fontFamily,
  color,
  align = "left",
  transform = "none",
  numberOfLines,
  style,
  testID,
  onPress,
  selectable = false,
}) => {
  const { fonts, colors } = useTheme();

  const fontWeightStyle = React.useMemo(() => {
    switch (weight) {
      case "bold":
        return fonts.fontBold;
      case "medium":
        return fonts.fontMedium;
      case "semiBold":
        return fonts.fontSemiBold;
      case "regular":
      default:
        return fonts.fontRegular;
    }
  }, [weight, fonts]);

  const fontFamilyOverride: TextStyle | undefined = React.useMemo(() => {
    if (!fontFamily) return undefined;
    const mapping = fontLanguageMapping[fontFamily];
    return { fontFamily: mapping[weight] };
  }, [fontFamily, weight]);

  const textColorStyle: TextStyle = React.useMemo(() => {
    if (color) {
      return { color: colors[color] };
    }
    return { color: colors.gray800 };
  }, [color, colors]);

  const textAlignStyle: TextStyle = React.useMemo(() => {
    return { textAlign: align };
  }, [align]);

  const textTransformStyle: TextStyle = React.useMemo(() => {
    if (transform === "none") {
      return {};
    }
    return { textTransform: transform };
  }, [transform]);

  return (
    <RNText
      style={[
        fonts[size],
        fontWeightStyle,
        fontFamilyOverride,
        textColorStyle,
        textAlignStyle,
        textTransformStyle,
        style,
      ]}
      numberOfLines={numberOfLines}
      testID={testID}
      onPress={onPress}
      selectable={selectable}
    >
      {children}
    </RNText>
  );
};
