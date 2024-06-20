import React from 'react';

export interface IProps {
  children: React.ReactNode;
  src?: string;
  text?: string;
  alt?: string;
  variant: 'default' | 'primary' | 'secondary';
}
