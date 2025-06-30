import React from 'react';
import { Box } from '@mui/material';
import { BaseInput } from '../../atoms/input/BaseInput';
import { InputLabel } from '../../atoms/label/InputLabel';
import { HintText } from '../../atoms/hint/HintText';
import { ValidationIcons } from '../../atoms/icons/ValidationIcons';
import type { TextFieldWrapperProps } from './types/IProps';
import './TextFieldWrapper.scss';

export function TextFieldWrapper({
  id,
  label,
  value = 'text field',
  placeholder,
  helperText = '',
  type = 'email',
  error = false,
  disabled = false,
  status = null,
  size = 'medium',
  onChange = () => {},
  className = '',
}: TextFieldWrapperProps) {
  return (
    <Box
      className={`text-field-wrapper text-field-wrapper--${size} ${
        status ? `text-field-wrapper__outlined-input--${status}` : ''
      } ${error ? 'text-field-wrapper__outlined-input--error' : ''} ${
        disabled ? 'text-field-wrapper__outlined-input--disabled' : ''
      } ${className}`}
      display="flex"
      flexDirection="column"
      gap={0.5}
    >
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <BaseInput
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        type={type}
        error={error}
        disabled={disabled}
        size={size}
        endIcon={<ValidationIcons status={status} />}
      />
      {helperText && <HintText text={helperText} error={error} id={`${id}-hint`} />}
    </Box>
  );
}
