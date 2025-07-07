import React from 'react';

export interface IProps {
  disabled?: boolean;
  variant?:
    | 'neutral-dark'
    | 'neutral-light'
    | 'brand-primary'
    | 'brand-secondary'
    | 'feedback-positive'
    | 'feedback-negative';
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  value?: string | number;
  checked?: boolean;
  id?: string;
  'aria-label'?: string;
  'aria-labelledby'?: string;
  'data-testid'?: string;
}
