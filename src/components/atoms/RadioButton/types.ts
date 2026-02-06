/**
 * RadioButton Components Type Definitions
 */

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
