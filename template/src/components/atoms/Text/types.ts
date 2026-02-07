/**
 * Text Components Type Definitions
 * 
 * This file re-exports all type definitions for Text components
 * for easier importing in your application.
 * 
 * Usage:
 * import type { TextProps, HeadingProps } from '@/components/atoms/Text/types';
 */

import type { TextProps } from './Text';
import type { HeadingProps } from './Heading';
import type { CaptionProps } from './Caption';
import type { LabelProps } from './Label';
import type { ErrorTextProps } from './ErrorText';
import type { LinkProps } from './Link';

export type { TextProps } from './Text';
export type { HeadingProps } from './Heading';
export type { CaptionProps } from './Caption';
export type { LabelProps } from './Label';
export type { ErrorTextProps } from './ErrorText';
export type { LinkProps } from './Link';

/**
 * Union type of all text component props
 */
export type AnyTextComponentProps = 
  | TextProps 
  | HeadingProps 
  | CaptionProps 
  | LabelProps 
  | ErrorTextProps 
  | LinkProps;

/**
 * Font size variants available in the theme
 */
export type FontSize = 'size_12' | 'size_16' | 'size_24' | 'size_32' | 'size_40' | 'size_80';

/**
 * Font weight variants
 */
export type FontWeight = 'regular' | 'medium' | 'semiBold' | 'bold';

/**
 * Text alignment options
 */
export type TextAlign = 'left' | 'center' | 'right' | 'justify';

/**
 * Text transformation options
 */
export type TextTransform = 'none' | 'capitalize' | 'uppercase' | 'lowercase';

/**
 * Heading level options
 */
export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;
