import React from 'react';

export interface IProps {
  children: React.ReactNode;
  variant: 'default' | 'primary' | 'secondary' | 'solid-line' | 'points' | 'main';
  article: string;
  date: Date;
}
