import type React from 'react';
import type { IconName } from './iconMap';

export interface IProps {
  title: string;
  mainValue: string | number;
  subValue?: string | number;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'success' | 'warning' | 'error';
  size?: 'small' | 'medium' | 'large';
  border?: 'sharp' | 'soft';
  icon?: IconName;
  description?: string;
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
}
