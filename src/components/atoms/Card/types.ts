/**
 * Card Components Type Definitions
 *
 * This file contains all type definitions for Card components
 * for easier importing in your application.
 *
 * Usage:
 * import type { CardProps, CardVariant, CardSize } from '@/components/atoms/Card/types';
 */

export type { CardProps } from "./Card";

/**
 * Card variant types
 */
export type CardVariant = "elevated" | "outlined" | "filled" | "flat";

/**
 * Card variant options
 * - elevated: Card with shadow/elevation effect
 * - outlined: Card with border and transparent background
 * - filled: Card with subtle background color
 * - flat: Plain card without border or shadow
 */
export type CardVariantDescription = {
  elevated: "Card with shadow/elevation effect";
  outlined: "Card with border and transparent background";
  filled: "Card with subtle background color";
  flat: "Plain card without border or shadow";
};

/**
 * Card size options
 * - small: Compact card with minimal padding
 * - medium: Standard card size (default)
 * - large: Spacious card with more padding
 */
export type CardSizeDescription = {
  small: "Compact card with minimal padding";
  medium: "Standard card size (default)";
  large: "Spacious card with more padding";
};

/**
 * Card container parameters
 * @param variant - Card variant
 * @param disabled - Whether the card is disabled
 */
export type CardContainerParams = {
  variant: CardVariant;
  disabled: boolean;
};
