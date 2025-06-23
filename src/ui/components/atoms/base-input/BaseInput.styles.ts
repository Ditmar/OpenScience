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
      padding: theme.spacing(1.1, 2),
      borderRadius: theme.spacing(0.6),
      color: theme.palette.text.primary,
    },
    '& .MuiOutlinedInput-notchedOutline': {
      border: 'none',
    },
    '&:focus-within .MuiOutlinedInput-notchedOutline': {
      borderColor: 'none',
    },
    '& .MuiOutlinedInput-root': {
      border: 'none',
    },
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
  margin: `0 ${theme.spacing(0.8)}`,
  color: 'currentColor',
}));
