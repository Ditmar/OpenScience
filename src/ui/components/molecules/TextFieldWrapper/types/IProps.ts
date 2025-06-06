import React from 'react';
import type { TextFieldProps } from '@mui/material';

export interface TextFieldWrapperProps {
  id: string;
  label: string;
  value?: string;
  placeholder?: string;
  helperText?: string;
  type?: string;
  hint?: string;
  error?: boolean;
  disabled?: boolean;
  status?: 'success' | 'warning' | 'error' | null;
  size?: TextFieldProps['size']; // Certifique-se que está definido
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}
