import React from 'react';

export interface TextFieldWrapperProps {
  id: string;
  label: string;
  value?: string;
  placeholder?: string;
  helperText?: string;
  type?: 'text' | 'email' | 'password';
  hint?: string;
  error?: boolean;
  disabled?: boolean;
  status?: 'error' | 'success' | null;
  size?: 'small' | 'medium' | 'large';
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}
