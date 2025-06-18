import React, { useState, useEffect, forwardRef } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import type { TextFieldProps } from '@mui/material/TextField';
import Close from '@mui/icons-material/Close';
import EmailOutlined from '@mui/icons-material/EmailOutlined';
import InfoOutlined from '@mui/icons-material/InfoOutlined';
import type { DefaultInputProps } from './types/types';

const TextInput = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      id,
      name,
      type = 'text',
      label,
      placeholder,
      value,
      onChange,
      required,
      disabled,
      autoComplete,
      error,
      sx,
      InputProps,
      autoFocus,
      'aria-describedby': ariaDescribedby,
      'aria-invalid': ariaInvalid,
    },
    ref,
  ) => {
    return (
      <TextField
        fullWidth
        variant="outlined"
        inputRef={ref}
        id={id}
        name={name}
        type={type}
        label={label}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
        autoComplete={autoComplete}
        error={error}
        sx={sx}
        InputProps={InputProps}
        autoFocus={autoFocus}
        aria-describedby={ariaDescribedby}
        aria-invalid={ariaInvalid}
      />
    );
  },
);
TextInput.displayName = 'TextInput';

function HintText({ children, error }: { children: string; error?: boolean }) {
  return (
    <Typography
      variant="caption"
      color={error ? 'error' : 'text.secondary'}
      sx={{ marginTop: '4px' }}
    >
      {children}
    </Typography>
  );
}

function ClearIcon() {
  return <Close fontSize="small" />;
}

function EmailIcon() {
  return <EmailOutlined fontSize="small" />;
}

function InfoIcon() {
  return <InfoOutlined fontSize="small" />;
}

export function DefaultInput({
  label,
  placeholder = 'Input Text',
  value = '',
  onChange,
  onClear,
  hint = 'Hint Text',
  error,
  disabled,
  type = 'text',
  name,
  required,
  autoComplete,
  id,
  shape = 'rounded',
  autoFocus,
}: DefaultInputProps) {
  const [internalValue, setInternalValue] = useState(value);

  useEffect(() => {
    setInternalValue(value);
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInternalValue(e.target.value);
    onChange?.(e);
  };

  const handleClear = () => {
    setInternalValue('');
    onClear?.();
  };

  let borderRadius;
  if (shape === 'square') {
    borderRadius = 0;
  } else if (shape === 'pill') {
    borderRadius = '999px';
  } else {
    borderRadius = '8px';
  }

  return (
    <Box sx={{ width: 330 }}>
      <TextInput
        id={id}
        name={name}
        type={type}
        label={label}
        placeholder={placeholder}
        value={internalValue}
        onChange={handleChange}
        required={required}
        disabled={disabled}
        autoComplete={autoComplete}
        error={!!error}
        autoFocus={autoFocus}
        aria-describedby={id ? `${id}-helper-text` : undefined}
        aria-invalid={!!error}
        sx={{
          '& .MuiOutlinedInput-root': {
            borderRadius,
            height: 53,
          },
          width: '100%',
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <EmailIcon />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              {internalValue && !disabled && (
                <IconButton
                  onClick={handleClear}
                  aria-label="Clear input"
                  edge="end"
                  size="small"
                  sx={{ marginRight: '-8px' }}
                >
                  <ClearIcon />
                </IconButton>
              )}
            </InputAdornment>
          ),
        }}
      />

      {(hint || error) && (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            mt: 0.5,
            width: '100%',
          }}
        >
          <InfoIcon />
          <HintText error={!!error}>{error ?? hint}</HintText>
        </Box>
      )}
    </Box>
  );
}
