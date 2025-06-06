import type { ChangeEvent, FocusEvent, ReactNode } from 'react';

export interface IInputProps {
  id?: string;
  placeholder?: string;
  type?: 'text' | 'email' | 'password' ;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  error?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
}
