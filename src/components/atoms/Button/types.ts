/**
 * Button Components Type Definitions
 *
 * This file re-exports all type definitions for Button components
 * for easier importing in your application.
 *
 * Usage:
 * import type { ButtonProps, ButtonVariant, ButtonSize } from '@/components/atoms/Button/types';
 */

export type { ButtonProps, ButtonVariant } from "./Button";

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
