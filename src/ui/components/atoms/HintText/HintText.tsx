import React from 'react';
import Typography from '@mui/material/Typography';

interface HintTextProps {
  children: string;
  error?: boolean;
}

export function HintText({ children, error }: HintTextProps) {
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
