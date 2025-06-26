import type { TextFieldProps } from '@mui/material/TextField';
import type { ReactNode } from 'react';

export interface DefaultInputProps extends Omit<TextFieldProps, 'error'> {
  error?: string;
  hint?: string;
  onClear?: () => void;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  value?: string;
  shape?: 'square' | 'rounded' | 'pill';
}
