import React from "react";
import Text, { TextProps } from "./Text";

export interface LinkProps extends TextProps {
  /**
   * Whether the link is underlined
   */
  underline?: boolean;

  /**
   * Whether the link is disabled
   */
  disabled?: boolean;
}

/**
 * Link component for clickable text
 */
const Link: React.FC<LinkProps> = ({ 
  underline = false,
  disabled = false,
  color,
  style,
  onPress,
  ...rest 
}) => {
  const linkColor = disabled ? "gray400" : (color ?? "purple500");

  const linkStyle = React.useMemo(() => {
    return underline ? { textDecorationLine: "underline" as const } : undefined;
  }, [underline]);

  const handlePress = React.useCallback(() => {
    if (!disabled && onPress) {
      onPress();
    }
  }, [disabled, onPress]);

  return (
    <Text 
      {...rest} 
      color={linkColor}
      style={[linkStyle, style]}
      onPress={handlePress}
    />
  );
};

export default Link;
