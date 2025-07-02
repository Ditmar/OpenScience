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
      sx={{
        backgroundColor: '#fff',
        color: '#02322C',
        fontWeight: 'bold',
        borderRadius: '20px',
        px: 3,
        '&:hover': {
          backgroundColor: '#e0e0e0',
        },
      }}
    >
      ABRIR IMAGEN
    </Button>
  );
}
