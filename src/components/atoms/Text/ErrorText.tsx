import React from "react";
import { Text, TextProps } from "./Text";

export interface ErrorTextProps extends Omit<TextProps, "size" | "color"> {
  /**
   * Whether to show the error
   */
  visible?: boolean;
}

/**
 * ErrorText component for displaying error messages
 */
export const ErrorText: React.FC<ErrorTextProps> = ({ 
  visible = true,
  weight = "regular",
  ...rest 
}) => {
  if (!visible) {
    return null;
  }

  return (
    <Text 
      {...rest} 
      size="size_12" 
      weight={weight}
      color="red500"
    />
  );
};
