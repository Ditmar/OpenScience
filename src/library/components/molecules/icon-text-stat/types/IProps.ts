import type React from 'react';

export interface IProps {
  title: string;
  mainValue: string | number;
  subValue?: string | number;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'success' | 'warning' | 'error';
  size?: 'small' | 'medium' | 'large';
  border?: 'sharp' | 'soft';
  icon?: React.ReactNode;
  description?: string;
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
}
