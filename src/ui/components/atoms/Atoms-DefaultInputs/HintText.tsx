import React from 'react';
import Typography from '@mui/material/Typography';

export function HintText({ children, error }: { children: string; error?: boolean }) {
  return (
    <Typography
      variant="caption"
      color={error ? 'error' : 'text.secondary'}
      sx={{ marginTop: '4px' }}
    >
      {children}
    </Typography>
  );
}
