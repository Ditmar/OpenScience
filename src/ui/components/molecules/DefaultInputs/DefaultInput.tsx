import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import { TextInput } from '../../atoms/TextInput/TextInput';
import { HintText } from '../../atoms/HintText/HintText';
import { ClearIcon } from '../../atoms/Icons/ClearIcon';
import { EmailIcon } from '../../atoms/Icons/EmailIcon';
import { InfoIcon } from '../../atoms/Icons/InfoIcon';
import type { DefaultInputProps } from './types/types';

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
