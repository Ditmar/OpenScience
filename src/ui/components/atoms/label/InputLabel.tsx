import { Typography } from '@mui/material';
import React from 'react';
import type { InputLabelProps } from './types/IProps';
import './InputLabel.scss';

export function InputLabel({ htmlFor, children }: InputLabelProps) {
  return (
    <Typography variant="subtitle2" htmlFor={htmlFor} component="label">
      {children}
    </Typography>
  );
}
