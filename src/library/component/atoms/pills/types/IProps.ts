import type { ReactNode } from 'react';

export interface IProps {
  text: string;
  color?:
    | 'neutral-dark'
    | 'neutral-light'
    | 'brand-primary'
    | 'brand-secondary'
    | 'brand-tertiary'
    | 'feedback-positive'
    | 'feedback-negative'
    | 'feedback-warning'
    | 'read-only-disabled';
  variant?: 'filled' | 'outline' | 'soft';
  size?: 'sm' | 'md' | 'lg';
  rounded?: 'r_none' | 'r_md' | 'r_full';
  ariaLabel?: string;
  shadow?: boolean;
  stroke?: 'border-soft' | 'border-strong';
  icon?: string | ReactNode;
  iconPosition?: 'left' | 'right';
}
