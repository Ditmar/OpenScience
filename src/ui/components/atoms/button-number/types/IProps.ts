import React from 'react';

export interface IProps {
  children: React.ReactNode;
  variant?: 'filled' | 'outline' | 'ghost';
  shape?: 'square' | 'rounded' | 'circle';
  size?: 'small' | 'medium' | 'large';
  inactive?: boolean;
  selected?: boolean;
}
