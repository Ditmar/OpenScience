import React from 'react';
import { Typography } from '@mui/material';

interface ImageDescriptionTextProps {
  text: string;
}

export function ImageDescriptionText({ text }: ImageDescriptionTextProps) {
  return (
    <Typography
      variant="body2"
      sx={(theme) => ({
        mt: 2,
        textAlign: 'justify',
        color: theme.customColors.white,
      })}
    >
      {text}
    </Typography>
  );
}
