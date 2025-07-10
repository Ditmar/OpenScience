import React from 'react';

export interface UserTextStatProps {
  title: string;
  mainValue: string | number;
  subValue?: string;
  description?: string;
  variant?: 'default' | 'success' | 'warning' | 'error';
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
  avatarUrl?: string;
  showCheckbox?: boolean;
  styleVariant?: 'white' | 'lavender' | 'gray';
}
