import type { ReactNode } from 'react';

export interface IProps {
  title: string | ReactNode;
  subtitle?: string | ReactNode;
  size?: 'sm' | 'md' | 'lg';
  alignment?: 'left' | 'center' | 'right';
  variant?: 'default' | 'emphasized' | 'minimal';
  titleTag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
  subtitleTag?: 'p' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
}