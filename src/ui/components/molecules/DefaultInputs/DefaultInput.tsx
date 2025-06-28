import React from 'react';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import { TextInput } from '../../atoms/Atoms-DefaultInputs/TextInput';
import { EmailIcon } from '../../atoms/Atoms-DefaultInputs/EmailIcon';
import { ClearIcon } from '../../atoms/Atoms-DefaultInputs/ClearIcon';
import { InfoIcon } from '../../atoms/Atoms-DefaultInputs/InfoIcon';
import { HintText } from '../../atoms/Atoms-DefaultInputs/HintText';
import { HookDefaultInput } from './HookDefaultInput';
import type { DefaultInputProps } from './types/types';

export function DefaultInput({
  placeholder = 'Input Text',
  value = '',
  onChange,
  onClear,
  hint = 'Hint Text',
  error,
  disabled,
  shape = 'rounded',
}: DefaultInputProps) {
  const { internalValue, handleChange, handleClear } = HookDefaultInput(value, onChange, onClear);

  let borderRadius: number | string;
  if (shape === 'square') {
    borderRadius = 0;
  } else if (shape === 'pill') {
    borderRadius = '999px';
  } else {
    borderRadius = '8px';
  }

  return (
    <Box sx={{ width: '100%', maxWidth: 330 }}>
      <TextInput
        placeholder={placeholder}
        value={internalValue}
        onChange={handleChange}
        disabled={disabled}
        error={!!error}
        aria-invalid={!!error}
        sx={{ '& .MuiOutlinedInput-root': { borderRadius, height: 53 }, width: '100%' }}
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
        <Box sx={{ display: 'flex', alignItems: 'center', mt: 0.5 }}>
          <InfoIcon />
          <HintText error={!!error}>{error ?? hint}</HintText>
        </Box>
      )}
    </Box>
  );
}
