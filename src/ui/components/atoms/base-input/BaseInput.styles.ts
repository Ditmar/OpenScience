import { Box, styled, TextField, Typography } from '@mui/material';

export const StyledInput = styled(TextField)<{
  disabled?: boolean;
}>(({ theme, size = 'medium', disabled }) => {
  const fontSizes = {
    small: '0.8rem',
    medium: '0.85rem',
    large: '0.9rem',
  };

  return {
    background: 'transparent',
    border: 'none',
    fontFamily: 'Poppins, sans-serif',
    outline: 'none',
    fontSize: fontSizes[size],

    '&:disabled': {
      cursor: 'not-allowed',
      opacity: 0.7,
    },

    '&::placeholder': {
      color: 'currentColor',
      opacity: 0.6,
      fontSize: fontSizes[size],
    },
    '& .MuiInputBase-input': {
      padding: theme.spacing(1.1, 2), // 0.55rem 1rem
      borderRadius: theme.spacing(0.6), // 0.3rem
      color: theme.palette.text.primary,
    },
    // no border for the input
    '& .MuiOutlinedInput-notchedOutline': {
      border: 'none',
    },
    // focus state
    '&:focus-within .MuiOutlinedInput-notchedOutline': {
      borderColor: 'none',
    },
    // none active border
    '& .MuiOutlinedInput-root': {
      border: 'none',
    },
    // disabled state
    ...(disabled && {
      color: theme.palette.text.disabled,
    }),
  };
});

export const StyledInputGroup = styled(Box)(() => ({
  alignItems: 'center',
  display: 'flex',
  flexGrow: 1,
  position: 'relative',

  '& > *': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

export const StyledProtocol = styled(Typography)<{
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
}>(({ theme, size = 'medium', disabled }) => {
  const fontSizes = {
    small: '0.8rem',
    medium: '0.85rem',
    large: '0.9rem',
  };

  return {
    fontSize: fontSizes[size],
    fontWeight: theme.typography.fontWeightMedium,
    color: 'inherit',

    ...(disabled && {
      color: theme.palette.text.disabled,
    }),
  };
});

export const StyledDivider = styled(Box)(({ theme }) => ({
  margin: `0 ${theme.spacing(0.8)}`, // 0 0.4rem
  color: 'currentColor',
}));