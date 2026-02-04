/**
 * TextInput Components Type Definitions
 *
 * This file re-exports all type definitions for TextInput components
 * for easier importing in your application.
 *
 * Usage:
 * import type { TextInputProps, TextInputVariant } from '@/components/atoms/TextInput/types';
 */

export type { TextInputProps, TextInputVariant } from "./TextInput";

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
