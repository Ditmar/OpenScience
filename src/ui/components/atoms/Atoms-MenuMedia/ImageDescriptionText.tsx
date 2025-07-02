import React from 'react';
import { Typography } from '@mui/material';

interface ImageDescriptionTextProps {
  text: string;
}

export function ImageDescriptionText({ text }: ImageDescriptionTextProps) {
  return (
    <Typography variant="body2" color="white" sx={{ mt: 2, textAlign: 'justify' }}>
      {text}
    </Typography>
  );
}
