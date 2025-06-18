import type { ReactNode, ChangeEvent } from 'react';
import type { TextFieldProps } from '@mui/material';

export interface IProps extends Omit<TextFieldProps, 'variant' | 'onChange'> {
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  hint?: string;
  errorMsg?: string;
  disabled?: boolean;
}
