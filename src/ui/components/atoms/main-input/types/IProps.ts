import type { ReactNode, ChangeEvent } from 'react';
import type { TextFieldProps } from '@mui/material';

export interface IProps extends Omit<TextFieldProps, 'variant' | 'onChange'> {
  label: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  hint?: string;
  errorMsg?: string;
  disabled?: boolean;
  type?: string;
  id?: string;
}
