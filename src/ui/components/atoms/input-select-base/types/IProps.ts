import type { SelectChangeEvent, SelectProps, SxProps, Theme } from '@mui/material';
import React from 'react';

export type IProps = Partial<SelectProps> & {
  error?: boolean;
  disabled?: boolean;
  borderRadius?: 'normal' | 'semi' | 'circle';
  size?: 'small' | 'medium' | 'large';
  children?: React.ReactNode;
  colorVariant?: 'primary' | 'secondary' | 'tertiary' | 'white' | 'black';
  valueSelect?: string;
  onChange?: (event: SelectChangeEvent) => void;
  menuProps?: SxProps<Theme>;
};
