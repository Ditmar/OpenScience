import type { ReactNode } from 'react';

export interface IProps {
  text: string;
  startIcon?: ReactNode;
  endIcon?: ReactNode;

  borderRadius?: 'normal' | 'semi' | 'circle';
  colorVariant?:
    | 'white'
    | 'black'
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'positive'
    | 'negative'
    | 'warning';
  dark?: boolean;
  disabled?: boolean;
  size?: 'small' | 'medium' | 'large';
  buttonVariant?: 'default' | 'ghost' | 'light' | 'soft' | 'outline';
}

export interface IPropsStorybook {
  text: string;

  borderRadius?: 'normal' | 'semi' | 'circle';
  colorVariant?:
    | 'white'
    | 'black'
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'positive'
    | 'negative'
    | 'warning';
  dark?: boolean;
  disabled?: boolean;
  size?: 'small' | 'medium' | 'large';
  buttonVariant?: 'default' | 'ghost' | 'light' | 'soft' | 'outline';
}
