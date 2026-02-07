/**
 * Button Components Type Definitions
 *
 * This file re-exports all type definitions for Button components
 * for easier importing in your application.
 *
 * Usage:
 * import type { ButtonProps, ButtonVariant, ButtonSize } from '@/components/atoms/Button/types';
 */

export type { ButtonProps } from "./Button";

/**
 * Button variant types
 */
export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";

/**
 * Button size types
 */
export type ButtonSize = "small" | "medium" | "large";

/**
 * Button variant options
 * - primary: Main action button with filled background
 * - secondary: Alternative action with subtle background
 * - outline: Button with border and transparent background
 * - ghost: Text-only button without background or border
 */
export type ButtonVariantDescription = {
  primary: "Main action button with filled background";
  secondary: "Alternative action with subtle background";
  outline: "Button with border and transparent background";
  ghost: "Text-only button without background or border";
};

/**
 * Button size options
 * - small: Compact button for tight spaces
 * - medium: Standard button size (default)
 * - large: Prominent button for important actions
 */
export type ButtonSizeDescription = {
  small: "Compact button for tight spaces";
  medium: "Standard button size (default)";
  large: "Prominent button for important actions";
};


/**
 * Button container parameters
 * @param variant - Button variant
 * @param size - Button size
 * @param isDisabled - Whether the button is disabled
 * @param fullWidth - Whether the button should take full width
 */
export type ButtonContainerParams = {
  variant: ButtonVariant;
  size: ButtonSize;
  isDisabled: boolean;
  fullWidth: boolean;
};

/**
 * Button text parameters
 * @param variant - Button variant
 * @param isDisabled - Whether the button is disabled
 */
export type ButtonTextParams = {
  variant: ButtonVariant;
  isDisabled: boolean;
};

/**
 * Button loader parameters
 * @param variant - Button variant
 */
export type ButtonLoaderParams = {
  variant: ButtonVariant;
};

/**
 * Button icon parameters
 * @param size - Button size
 * @param position - Position of the icon
 */
export type ButtonIconParams = {
  size: ButtonSize;
  position: "left" | "right";
};