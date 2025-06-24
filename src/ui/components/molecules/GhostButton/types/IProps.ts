import * as React from 'react';
import type { ButtonProps } from '@mui/material/Button';
import type { IconName } from '../../../atoms/refactor-ghostbutton/types/IProps';

export interface GhostButtonProps extends Omit<ButtonProps, 'size' | 'variant' | 'className'> {
  label: string;
  variant?:
    | 'primary'
    | 'dark'
    | 'intenseviolet'
    | 'violet'
    | 'tertiary'
    | 'green'
    | 'red'
    | 'yellow';
  size?: 'small' | 'medium' | 'large';
  iconLeft?: boolean;
  iconRight?: boolean;
  iconName?: IconName;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  fullWidth?: boolean;
  type?: ButtonProps['type'];
  color?: ButtonProps['color'];
}
