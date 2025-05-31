import React from 'react';

export interface UserTextStatProps {
  title: string;
  mainValue: string | number;
  subValue?: string;
  icon?: React.ReactNode;
  description?: string;
  avatarUrl?: string;
  showCheckbox?: boolean;
  variant?: 'default' | 'success' | 'warning' | 'error';
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
  className?: string;
}
