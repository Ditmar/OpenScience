import React, { forwardRef } from 'react';
import TextField from '@mui/material/TextField';
import type { TextFieldProps } from '@mui/material/TextField';

export const TextInput = forwardRef<HTMLInputElement, TextFieldProps>((props, ref) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <TextField fullWidth variant="outlined" inputRef={ref} {...props} />;
});

TextInput.displayName = 'TextInput';
