import React from 'react';
import Button from '@mui/material/Button';
import type { ButtonProps } from '@mui/material/Button';

function BaseButton({
  children,
  onClick,
  disabled,
  color,
  size,
  variant,
  startIcon,
  endIcon,
  fullWidth,
  type,
}: ButtonProps) {
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      color={color}
      size={size}
      variant={variant}
      startIcon={startIcon}
      endIcon={endIcon}
      fullWidth={fullWidth}
      type={type}
    >
      {children}
    </Button>
  );
}

export default BaseButton;
