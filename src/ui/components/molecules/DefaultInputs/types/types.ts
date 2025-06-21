import type React from 'react';

export interface DefaultInputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClear?: () => void;
  hint?: string;
  error?: string;
  disabled?: boolean;
  required?: boolean;
  type?: string;
  name?: string;
  id?: string;
  autoComplete?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  shape?: 'square' | 'rounded' | 'pill';
  autoFocus?: boolean;
}
