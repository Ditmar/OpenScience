import React from 'react';
import { Button, useTheme } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import type { SxProps, Theme } from '@mui/material';

export interface InitialButtonProps {
  onClick?: () => void;
  label?: string;
  fullWidth?: boolean;
  sx?: SxProps<Theme>;
}

function InitialButton({ onClick, label = 'INICIAR', fullWidth = false, sx }: InitialButtonProps) {
  const theme = useTheme();

  return (
    <Button
      variant="contained"
      disableElevation
      disableRipple
      onClick={onClick}
      endIcon={<LoginIcon />}
      fullWidth={fullWidth}
      sx={{
        backgroundColor: '#0099CC',
        color: '#fff',
        fontFamily: 'Arial, sans-serif',
        textTransform: 'uppercase',

        px: {
          xs: 2,
          sm: 3,
          md: 4,
        },

        py: {
          xs: 0,
          sm: 0,
          md: 0,
        },

        fontSize: {
          xs: theme.typography.pxToRem(15),
          sm: theme.typography.pxToRem(18),
          md: theme.typography.pxToRem(22),
        },

        lineHeight: 1.4,
        borderRadius: 0,

        whiteSpace: 'nowrap',

        '& .MuiButton-endIcon': {
          ml: '6px',
        },

        '&:hover': {
          backgroundColor: '#007EAA',
        },

        ...sx,
      }}
    >
      {label}
    </Button>
  );
}

export default InitialButton;
