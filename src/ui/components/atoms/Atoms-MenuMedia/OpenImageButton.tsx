import React from 'react';
import { Button } from '@mui/material';

interface OpenImageButtonProps {
  onClick?: () => void;
}

export function OpenImageButton({ onClick }: OpenImageButtonProps) {
  return (
    <Button
      variant="contained"
      onClick={onClick}
      sx={(theme) => ({
        backgroundColor: theme.customColors.white,
        color: theme.customColors.primary,
        fontWeight: 'bold',
        borderRadius: '20px',
        px: 3,
        '&:hover': {
          backgroundColor: theme.palette.grey[300],
        },
      })}
    >
      ABRIR IMAGEN
    </Button>
  );
}
