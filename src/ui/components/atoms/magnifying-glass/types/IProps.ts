import React from 'react';

export interface IProps {
  children: React.ReactNode;
  icon?: string;
  variant: 'solid' | 'dotted' | 'dashed';
  onClick?: () => void;
}
