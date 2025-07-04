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
        backgroundColor: theme.palette.common.white,
        color: theme.palette.primary.dark,
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
