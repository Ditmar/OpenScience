import { Button as BaseButton, styled } from '@mui/material';
import type { Radius } from './types/IProps';

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    default: true;
    focus: true;
    error: true;
    disabled: true;
  }
}

export const Button = styled(BaseButton)<{ radius?: Radius }>(({
  theme,
  variant = 'default',
  size = 'medium',
  radius = 'small',
}) => {
  const fontSizes = {
    small: '0.8rem',
    medium: '0.85rem',
    large: '0.9rem',
  };

  const borderRadius = {
    none: 0,
    small: theme.spacing(0.6),
    full: '5rem',
    medium: theme.spacing(1.2),
  };

  let backgroundColor = theme.palette.primary.main;
  let color = theme.palette.common.white;

  switch (variant) {
    case 'focus':
      backgroundColor = theme.palette.primary.main;
      color = theme.palette.common.white;
      break;
    case 'error':
      backgroundColor = theme.palette.error.main;
      color = theme.palette.common.white;
      break;
    case 'disabled':
      backgroundColor = theme.palette.action.disabledBackground;
      color = theme.palette.text.disabled;
      break;
    default:
      backgroundColor = theme.palette.primary.main;
      color = theme.palette.common.white;
      break;
  }

  return {
    alignItems: 'center',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    fontSize: fontSizes[size],
    fontWeight: 500,
    gap: theme.spacing(0.4), // 0.2rem
    transition: 'all 0.2s ease',
    borderRadius: borderRadius[radius],
    textTransform: 'none',
    minWidth: 'auto',
    backgroundColor,
    color,
    height: '100%',
    '&:hover': {
      opacity: 0.9,
    },

    '&:disabled': {
      cursor: 'not-allowed',
      opacity: 0.6,
      backgroundColor: theme.palette.action.disabledBackground,
      color: theme.palette.text.disabled,
    },
  };
});