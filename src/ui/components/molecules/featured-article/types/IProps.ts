import React from 'react';

export interface IProps {
  children: React.ReactNode;
  onClick?: () => void;
  text?: string;
  icon?: string;
  size?: 'small' | 'medium' | 'large';
  variant: 'default' | 'primary' | 'secondary ' | 'solid-line' | 'points' | 'main';
  color?: 'primary' | 'secondary' | 'tertiary';
  ColorVariant?: 'main' | 'primary' | 'secondary';
  article: string;
  date: Date;
}
