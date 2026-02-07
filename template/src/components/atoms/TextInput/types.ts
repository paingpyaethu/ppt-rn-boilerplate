/**
 * TextInput Components Type Definitions
 *
 * This file re-exports all type definitions for TextInput components
 * for easier importing in your application.
 *
 * Usage:
 * import type { TextInputProps } from '@/components/atoms/TextInput/types';
 */
export type { TextInputProps } from "./TextInput";

/**
 * TextInput variant types
 */
export type TextInputVariant = "default" | "outline" | "filled";

/**
 * TextInput variant options
 * - default: Underline-only style with bottom border
 * - outline: Full border around the input (default)
 * - filled: Solid background with subtle styling
 */
export type TextInputVariantDescription = {
  default: "Underline-only style with bottom border";
  outline: "Full border around the input";
  filled: "Solid background with subtle styling";
};

/**
 * Input container parameters
 * @param variant - TextInput variant
 * @param hasError - Whether the input has an error
 * @param disabled - Whether the input is disabled
 */
export type InputContainerParams = {
  variant: TextInputVariant;
  hasError: boolean;
  disabled: boolean;
};

/**
 * Input text parameters
 * @param disabled - Whether the input is disabled
 * @param hasIcon - Whether the input has an icon
 */
export type InputTextParams = {
  disabled: boolean;
  hasIcon: boolean;
};