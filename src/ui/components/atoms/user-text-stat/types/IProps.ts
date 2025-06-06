import React from 'react';

export interface UserTextStatProps {
  title: string;
  mainValue: string | number;
  subValue?: string;
  description?: string;
  variant?: 'default' | 'success' | 'warning' | 'error';
  size?: 'small' | 'medium' | 'large';
  icon?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  avatarUrl?: string;
  showCheckbox?: boolean;
  styleVariant?: 'white' | 'lavender' | 'gray';
}
