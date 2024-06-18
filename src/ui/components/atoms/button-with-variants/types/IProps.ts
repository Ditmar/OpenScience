import React from 'react';

export interface IProps {
  children: React.ReactNode;
  variant?: string;
  color?: 'primary' | 'secondary' | 'tertiary';
}
