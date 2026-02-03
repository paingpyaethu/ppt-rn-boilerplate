import React from "react";
import { Text, TextProps } from "./Text";

export interface CaptionProps extends Omit<TextProps, "size"> {
  /**
   * Caption size variant
   */
  size?: "small" | "medium";
}

/**
 * Caption component for small descriptive text
 */
export const Caption: React.FC<CaptionProps> = ({ 
  size = "small", 
  weight = "regular",
  color,
  ...rest 
}) => {
  const captionSize = size === "small" ? "size_12" : "size_16";
  const captionColor = color ?? "gray400";

  return (
    <Text 
      {...rest} 
      size={captionSize} 
      weight={weight}
      color={captionColor}
    />
  );
};
