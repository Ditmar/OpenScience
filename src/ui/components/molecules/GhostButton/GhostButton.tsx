import React from 'react';
import Button from '@mui/material/Button';
import { Icon } from '../../atoms/refactor-ghostbutton/Icon';
import type { GhostButtonProps } from './types/IProps';
import styles from './styles.module.scss';

const iconSizes: Record<NonNullable<GhostButtonProps['size']>, number> = {
  small: 18,
  medium: 20,
  large: 24,
};

const sizeClassMap: Record<NonNullable<GhostButtonProps['size']>, string> = {
  small: styles['size-small'],
  medium: styles['size-medium'],
  large: styles['size-large'],
};

function GhostButton({
  label,
  variant = 'primary',
  size = 'medium',
  iconLeft = false,
  iconRight = false,
  iconName = 'circle-quarters',
  disabled,
  className = '',
  onClick,
  fullWidth = false,
  type = 'button',
  color,
}: GhostButtonProps) {
  const iconSize = iconSizes[size];
  const sizeClass = sizeClassMap[size];

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
            <Icon iconName={iconName} width={iconSize} height={iconSize} />
          </span>
        ) : undefined
      }
      endIcon={
        iconRight ? (
          <span data-testid="end-icon">
            <Icon iconName={iconName} width={iconSize} height={iconSize} />
          </span>
        ) : undefined
      }
    >
      {label}
    </Button>
  );
}

export default GhostButton;
