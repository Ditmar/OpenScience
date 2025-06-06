import React from 'react';
import { TextField, InputAdornment } from '@mui/material';
import type { IInputProps } from './types/IProps';
import './BaseInput.scss';

export function BaseInput({
  id,
  placeholder,
  type = 'text',
  value,
  onChange,
  onBlur,
  onFocus,
  disabled = false,
  error = false,
  startIcon,
  endIcon,
}: IInputProps) {
  return (
    <TextField
      id={id}
      variant="outlined"
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      onFocus={onFocus}
      disabled={disabled}
      error={error}
      fullWidth
      className="base-input__outlined-root"
      InputProps={{
        className: 'base-input__input',
        classes: {
          focused: 'base-input__outlined-root--focused',
          error: 'base-input__outlined-root--error',
          disabled: 'base-input__outlined-root--disabled',
        },
        startAdornment: startIcon && <InputAdornment position="start">{startIcon}</InputAdornment>,
        endAdornment: endIcon && <InputAdornment position="end">{endIcon}</InputAdornment>,
      }}
      InputLabelProps={{
        className: 'base-input__label',
        classes: {
          focused: 'base-input__label--focused',
          error: 'base-input__label--error',
          disabled: 'base-input__label--disabled',
        },
      }}
      FormHelperTextProps={{
        className: 'base-input__helper-text',
        classes: {
          error: 'base-input__helper-text--error',
        },
      }}
    />
  );
}
