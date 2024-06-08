import React from 'react';

export interface IProps {
  icon?: string;
  size?: 'small' | 'medium' | 'large';
  color?: 'default' | 'primary' | 'secondary';
  disabled?: boolean;
  onClick?: () => void;
}
