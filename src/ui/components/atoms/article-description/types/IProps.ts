import React from 'react';

export interface IProps {
  children?: React.ReactNode;
  article: string;
  variant?: 'default' | 'bold' | 'italic';
}
