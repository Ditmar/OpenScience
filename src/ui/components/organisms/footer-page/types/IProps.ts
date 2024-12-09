import React from 'react';

export interface IProps {
  icon?: string;
  icon1?: string;
  children: React.ReactNode;
  children1: React.ReactNode;
  variant: 'solid' | 'dotted' | 'dashed';
}
