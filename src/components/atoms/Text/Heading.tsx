import React from "react";
import { Text, TextProps } from "./Text";

export interface HeadingProps extends Omit<TextProps, "size"> {
  /**
   * Heading level (h1-h6)
   */
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

/**
 * Heading component for titles and section headers
 */
export const Heading: React.FC<HeadingProps> = ({ level = 1, weight, ...rest }) => {
  const headingConfig = React.useMemo(() => {
    switch (level) {
      case 1:
        return { size: "size_40" as const, weight: weight ?? ("bold" as const) };
      case 2:
        return { size: "size_32" as const, weight: weight ?? ("bold" as const) };
      case 3:
        return { size: "size_24" as const, weight: weight ?? ("semiBold" as const) };
      case 4:
        return { size: "size_24" as const, weight: weight ?? ("medium" as const) };
      case 5:
        return { size: "size_16" as const, weight: weight ?? ("semiBold" as const) };
      case 6:
        return { size: "size_16" as const, weight: weight ?? ("medium" as const) };
      default:
        return { size: "size_24" as const, weight: weight ?? ("bold" as const) };
    }
  }, [level, weight]);

  return <Text {...rest} size={headingConfig.size} weight={headingConfig.weight} />;
};
