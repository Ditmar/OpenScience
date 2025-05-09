import React from 'react';

export interface IToggleProps {
  checked: boolean;
  onChange: (value: boolean) => void;
  disabled?: boolean;
  variant?:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'success'
    | 'error'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark';
  size?: 'small' | 'medium' | 'large';
  className?: string;
  'data-testid'?: string;
  style?: React.CSSProperties;
  dimensions?: {
    width: number;
    height: number;
    padding: number;
    circleSize: number;
  };
  // Nuevas propiedades añadidas
  id?: string;
  'aria-label'?: string;
  'aria-labelledby'?: string;
  'aria-checked'?: boolean;
}
