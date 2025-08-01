import type { ReactNode, ElementType } from 'react';

export interface TypographyProps {
  children: ReactNode;
  variant?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'subtitle1'
    | 'subtitle2'
    | 'body1'
    | 'body2'
    | 'caption'
    | 'button'
    | 'overline';
  className?: string;
  component?: ElementType;
  fontWeight?: 'normal' | 'medium' | 'bold';
  color?: string;
}
