import type { ReactNode } from 'react';

export interface ITextFieldProps {
  label?: string;
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
  error?: boolean;
  helperText?: string;
  disabled?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  size?: 'small' | 'medium' | 'large';
  className?: string;
  type?: 'text' | 'email' | 'password' | 'number';
  name?: string;
  required?: boolean;
  autoComplete?: string;
}
