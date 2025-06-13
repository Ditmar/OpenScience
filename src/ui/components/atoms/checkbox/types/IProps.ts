import type { ChangeEvent, ReactNode } from 'react';

export interface CheckboxProps {
  checked?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  isDisabled?: boolean;
  className?: string;
  icon?: ReactNode;
  checkedIcon?: ReactNode;
  ariaLabel?: string;
}
