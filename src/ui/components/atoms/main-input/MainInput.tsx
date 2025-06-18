import React, { forwardRef } from 'react';
import { TextField, InputAdornment, styled, useTheme } from '@mui/material';
import type { IProps } from './types/IProps';
import styles from './MainInput.module.scss';

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiInputBase-root': {
    ...theme.typography.body1,
    padding: theme.spacing(1.5, 2),
    borderRadius: theme.shape.borderRadius,
    '&.Mui-disabled': {
      backgroundColor: theme.palette.action.disabledBackground,
    },
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: theme.palette.grey[400],
    },
    '&:hover fieldset': {
      borderColor: theme.palette.grey[600],
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.primary.main,
      boxShadow: `${theme.palette.primary.main}33 0 0 0 2px`,
    },
    '&.Mui-error fieldset': {
      borderColor: theme.palette.error.main,
    },
  },
  '& .MuiFormHelperText-root': {
    marginLeft: 0,
    marginRight: 0,
    ...theme.typography.caption,
  },
}));

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
