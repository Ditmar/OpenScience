import React from 'react';

export interface IProps {
  children: React.ReactNode;
  onClick?: () => void;
  icon?: string;
  size?: 'small' | 'medium' | 'large';
  variant: 'default' | 'primary' | 'secondary ' | 'solid-line' | 'points' | 'main';
  color?: 'primary' | 'secondary' | 'tertiary';
  article: string;
  date: Date;
  rightIcon?: string;
  leftIcon?: string;
}
