import React from "react";
import { Text, TextProps } from "./Text";

export interface LabelProps extends Omit<TextProps, "size"> {
  /**
   * Whether the label is for a required field
   */
  required?: boolean;

  /**
   * Size variant for the label
   */
  size?: "small" | "medium" | "large";
}

/**
 * Label component for form fields and input labels
 */
export const Label: React.FC<LabelProps> = ({ 
  children,
  required = false,
  size = "medium",
  weight = "medium",
  ...rest 
}) => {
  const labelSize = size === "small" ? "size_12" : size === "large" ? "size_24" : "size_16";

  return (
    <Text 
      {...rest} 
      size={labelSize} 
      weight={weight}
    >
      {children}
      {required && (
        <Text size={labelSize} weight={weight} color="red500">
          {" *"}
        </Text>
      )}
    </Text>
  );
};
