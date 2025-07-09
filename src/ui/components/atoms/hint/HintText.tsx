import React from 'react';
import { Typography } from '@mui/material';
import type { HintTextProps } from './types/IProps';

export function HintText({ text, error = false, id }: HintTextProps) {
  return (
    <Typography id={id} variant="caption" color={error ? 'error' : 'textSecondary'}>
      {text}
    </Typography>
  );
}
