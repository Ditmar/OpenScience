import { CheckCircleOutline, ErrorOutline } from '@mui/icons-material';
import React from 'react';
import type { ValidationIconsProps } from './types/IProps';
import './ValidationIcons.scss';

export function ValidationIcons({ status }: ValidationIconsProps) {
  if (status === 'success') return <CheckCircleOutline color="success" />;
  if (status === 'error') return <ErrorOutline color="error" />;
  return null;
}
