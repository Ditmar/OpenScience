import React, { forwardRef } from 'react';
import { InputAdornment, useTheme } from '@mui/material';
import type { IProps } from './types/IProps';
import { StyledTextField } from './MainInput.styles';
import styles from './MainInput.module.scss';

const MainInput = forwardRef<HTMLInputElement, IProps>((props, ref) => {
  const {
    label,
    value,
    onChange,
    placeholder,
    leftIcon,
    rightIcon,
    hint,
    errorMsg,
    disabled = false,
    type = 'text',
    id,
  } = props;

  const theme = useTheme();
  const hasError = Boolean(errorMsg);
  const helperText = errorMsg ?? hint;
  const inputId = id ?? `input-${label.replace(/\s+/g, '-').toLowerCase()}`;
  const helperId = helperText ? `${inputId}-helper` : undefined;

  return (
    <div className={styles['main-input-wrapper']}>
      <StyledTextField
        id={inputId}
        label={label}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
        disabled={disabled}
        error={hasError}
        helperText={helperText}
        FormHelperTextProps={{ id: helperId }}
        aria-describedby={helperId}
        aria-invalid={hasError || undefined}
        inputRef={ref}
        fullWidth
        variant="outlined"
        InputProps={{
          startAdornment: leftIcon && (
            <InputAdornment position="start" sx={{ mr: theme.spacing(1) }}>
              {leftIcon}
            </InputAdornment>
          ),
          endAdornment: rightIcon && (
            <InputAdornment position="end" sx={{ ml: theme.spacing(1) }}>
              {rightIcon}
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
});

MainInput.displayName = 'MainInput';
export default MainInput;
