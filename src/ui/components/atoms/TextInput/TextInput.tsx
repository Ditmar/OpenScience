import React from 'react';
import type { TextFieldProps } from '@mui/material/TextField';
import TextField from '@mui/material/TextField';

export const TextInput = React.forwardRef<HTMLInputElement, TextFieldProps>((props, ref) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <TextField fullWidth variant="outlined" inputRef={ref} {...props} />;
});

TextInput.displayName = 'TextInput';
