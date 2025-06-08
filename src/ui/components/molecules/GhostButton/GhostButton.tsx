import React from 'react';
import Button from '@mui/material/Button';
import type { ButtonProps } from '@mui/material/Button';
import Icon from '../../atoms/refactor-ghostbutton/Icon';
import styles from './styles.module.scss';

export interface GhostButtonProps extends Omit<ButtonProps, 'size' | 'variant' | 'className'> {
  label: string;
  variant?:
    | 'primary'
    | 'dark'
    | 'intenseviolet'
    | 'violet'
    | 'teritary'
    | 'green'
    | 'red'
    | 'yellow';
  size?: 'small' | 'medium' | 'large';
  iconLeft?: boolean;
  iconRight?: boolean;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  fullWidth?: boolean;
  type?: ButtonProps['type'];
  color?: ButtonProps['color'];
}

const iconSizes: Record<NonNullable<GhostButtonProps['size']>, number> = {
  small: 18,
  medium: 20,
  large: 24,
};

function GhostButton({
  label,
  variant = 'primary',
  size = 'medium',
  iconLeft = false,
  iconRight = false,
  disabled,
  className = '',
  onClick,
  fullWidth = false,
  type = 'button',
  color,
}: GhostButtonProps) {
  const iconSize = iconSizes[size];
  let sizeClass = styles['size-medium'];
  if (size === 'small') sizeClass = styles['size-small'];
  else if (size === 'large') sizeClass = styles['size-large'];

  const combinedClassName = [styles.ghostButton, styles[variant], sizeClass, className]
    .filter(Boolean)
    .join(' ');

  return (
    <Button
      className={combinedClassName}
      disabled={disabled}
      fullWidth={fullWidth}
      onClick={onClick}
      type={type}
      color={color}
      startIcon={
        iconLeft ? (
          <span data-testid="start-icon">
            <Icon size={iconSize} />
          </span>
        ) : undefined
      }
      endIcon={
        iconRight ? (
          <span data-testid="end-icon">
            <Icon size={iconSize} />
          </span>
        ) : undefined
      }
    >
      {label}
    </Button>
  );
}

export default GhostButton;
