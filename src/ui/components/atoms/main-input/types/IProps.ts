import type { ReactNode, ChangeEventHandler } from 'react';
import type { TextFieldProps } from '@mui/material';

export interface IProps extends Omit<TextFieldProps, 'variant' | 'onChange'> {
  label: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  hint?: string;
  errorMsg?: string;
  disabled?: boolean;
  type?: string;
  id?: string;
}
