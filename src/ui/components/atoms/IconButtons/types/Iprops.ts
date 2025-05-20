import React from 'react';

export type IconButtonSize = 'xs' | 'sm' | 'md' | 'lg';
export type IconButtonShape = 'square' | 'rounded' | 'circle';
export type IconButtonColor = 'neutral' | 'brand' | 'feedback';

export interface IIconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
  ariaLabel: string;
  size?: IconButtonSize;
  shape?: IconButtonShape;
  color?: IconButtonColor;
  disabled?: boolean;
  className?: string;
}
