import { Box, styled } from '@mui/material';

export type URLInputVariant = 'default' | 'focus' | 'error' | 'disabled';
export type URLInputSize = 'small' | 'medium' | 'large';
export type URLInputRadius = 'none' | 'small' | 'full';

interface StyledProps {
  variant?: URLInputVariant;
  size?: URLInputSize;
  radius?: URLInputRadius;
}
export const StyledInputContainer = styled('div')<StyledProps>(({
  theme,
  variant = 'default',
  radius = 'small',
}) => {
  // Border radius variants
  const borderRadius = {
    none: 0,
    small: theme.spacing(0.6), // 0.3rem
    full: '40rem',
  };

  // Base styles
  let borderColor = theme.palette.text.primary;
  let boxShadow = 'none';

  // Variant styles
  switch (variant) {
    case 'focus':
      borderColor = theme.palette.primary.main;
      boxShadow = `0 0 0 0.1rem ${theme.palette.primary.light}`;
      break;
    case 'error':
      borderColor = theme.palette.error.main;
      break;
    case 'disabled':
      borderColor = theme.palette.action.disabled;
      break;
    default:
      borderColor = theme.palette.text.primary;
      boxShadow = 'none';
      break;
  }

  return {
    display: 'flex',
    alignItems: 'center',
    border: `1px solid ${borderColor}`,
    boxSizing: 'border-box',
    transition: 'all 0.2s ease',
    borderRadius: borderRadius[radius],
    boxShadow,
    width: 'fit-content',
    height: '3rem',
    [theme.breakpoints.up('xl')]: {
      minWidth: 0,
      width: '50%',
    },
    '& > *': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  };
});

export const StyledInputWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'start',
  padding: theme.spacing(0.6),
  paddingLeft:'1rem',
  gap: theme.spacing(0.5),
}));

export const StyledContainer = styled(Box)<StyledProps>(({ theme }) => ({
  boxSizing: 'border-box',
  color: theme.palette.text.primary,
  fontFamily: theme.typography.fontFamily,
  width: '22rem',
  border: `1px solid ${theme.palette.text.secondary}`,
  [theme.breakpoints.up('xl')]: {
    minWidth: 0,
    width: '27%',
  },
}));