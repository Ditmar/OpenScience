import React from 'react';

export interface IProps {
  children: React.ReactNode;
  onClick?: () => void;
  text?: string;
  icon?: string;
  size?: 'small' | 'medium' | 'large';
  variant:
    | 'default'
    | 'primary'
    | 'secondary '
    | 'special'
    | 'bold'
    | 'italic'
    | 'underline'
    | 'highlight'
    | 'solid-line'
    | 'segmented-line'
    | 'points'
    | 'main';
  color?: 'primary' | 'secondary' | 'tertiary';
  ColorVariant?: 'main' | 'primary' | 'secondary';
  article: string;
  date: Date;
  overflow?: boolean;
}
