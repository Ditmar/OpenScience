import { Box, IconButton, styled, Tooltip } from '@mui/material';
import type { ReactNode } from 'react';

export type URLInputVariant = 'default' | 'focus' | 'error' | 'disabled';
export type URLInputSize = 'small' | 'medium' | 'large';
export type URLInputRadius = 'none' | 'small' | 'full';

interface StyledProps {
  variant?: URLInputVariant;
  size?: URLInputSize;
  radius?: URLInputRadius;
}

export const StyledHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: theme.spacing(1),
}));

export const StyledLabelWrapper = styled(Box)(({ theme }) => ({
  alignItems: 'center',
  display: 'flex',
  fontWeight: theme.typography.fontWeightBold,
  gap: theme.spacing(0.6),

  '& > *': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

export const StyledButton = styled(IconButton)<{
  setBorder?: boolean;
}>(({ theme, setBorder = false }) => ({
  background: 'none',
  cursor: 'pointer',
  padding: 0,
  border: setBorder ? `1px solid ${theme.palette.text.primary}` : 'none',

  '&:hover': {
    opacity: 0.8,
    backgroundColor: 'transparent',
  },
  '& > *': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

export const ToolTipButton = styled(Tooltip)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
  '& .MuiTooltip-arrow': {
    color: 'transparent',
  },
}));

export const StyledFooter = styled(Box)(({ theme }) => ({
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: theme.spacing(1),
}));

export const StyledHintText = styled(Box)<StyledProps>(({ theme, variant, size = 'medium' }) => {
  const fontSizes = {
    small: '0.8rem',
    medium: '0.85rem',
    large: '0.9rem',
  };

  return {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: fontSizes[size],
    fontWeight: theme.typography.fontWeightRegular,
    gap: theme.spacing(1),
    color: 'inherit',
    '& > *': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },

    ...(variant === 'error' && {
      color: theme.palette.error.main,
      fontFamily: theme.typography.fontFamily,
    }),
  };
});

interface URLInputStyledProps extends StyledProps {
  children?: ReactNode;
}

export const StyledContainer = styled(Box)<StyledProps>(({ theme }) => ({
  boxSizing: 'border-box',
  color: theme.palette.text.primary,
  fontFamily: theme.typography.fontFamily,
  width: '22rem',

  [theme.breakpoints.up('xl')]: {
    minWidth: 0,
    width: '27%',
  },
}));

export const UrlInputStyled = styled(StyledContainer)<URLInputStyledProps>(
  ({ theme, variant }) => ({
    ...(variant === 'disabled' && {
      color: theme.palette.text.disabled,
    }),
    width: 'fit-content',

    [theme.breakpoints.up('xl')]: {
      minWidth: 0,
      width: '50%',
    },
  }),
);
