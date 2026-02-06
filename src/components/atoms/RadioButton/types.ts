/**
 * RadioButton Components Type Definitions
 */

import { Language } from "@/hooks/language/schema";

/**
 * RadioButton option type
 */
export type RadioButtonOption<T extends string = string> = {
  /** Option value */
  value: T;
  /** Display label */
  label: string;
  /** Optional description below the label */
  description?: string;
  /** Force a specific language font family for the label ("en" or "mm") */
  labelFontFamily?: Language;
  /** Force a specific language font family for the description ("en" or "mm") */
  descriptionFontFamily?: Language;
  /** Optional left element (icon, flag, etc.) */
  leftElement?: React.ReactNode;
  /** Whether this option is disabled */
  disabled?: boolean;
};

/**
 * RadioButton outer circle parameters for theme styling
 */
export type RadioOuterCircleParams = {
  isSelected: boolean;
  isDisabled: boolean;
};

/**
 * RadioButton inner circle parameters for theme styling
 */
export type RadioInnerCircleParams = {
  isSelected: boolean;
};

/**
 * RadioButton item container parameters for theme styling
 */
export type RadioItemContainerParams = {
  isSelected: boolean;
  isDisabled: boolean;
};
