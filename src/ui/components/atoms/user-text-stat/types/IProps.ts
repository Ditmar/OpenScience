import type { ReactNode } from 'react';

export interface UserTextStatProps {
  title: string;
  mainValue: string | number;
  subValue?: string | number;
  variant?: 'default' | 'success' | 'warning' | 'error';
  size?: 'small' | 'medium' | 'large';
  icon?: ReactNode;
  description?: string;
  onClick?: () => void;
  className?: string;
}
