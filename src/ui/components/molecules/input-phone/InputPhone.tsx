import React, { useState } from 'react';
import { Box } from '@mui/material';
import IconPhone from '../../atoms/icon-phone/IconPhone';
import PhoneNumberInput from '../../atoms/number-input/NumberInput';
import HintText from '../../atoms/hint-text/HintText';
import type { InputPhoneProps } from './types/IProps';

export default function InputPhone({
  iconText = 'Phone Number',
  hintText = '',
  size = 'medium',
  disabled = false,
  borderRadius = 'rounded',
  state = 'default',
  initialValue = '',
  onClose,
}: InputPhoneProps) {
  const [phoneValue, setPhoneValue] = useState(initialValue);

  const handleChange = (value: string) => {
    setPhoneValue(value);
  };

  return (
    <Box
      data-testid="input-phone"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        width: '100%',
        maxWidth: '371px',
      }}
    >
      <IconPhone text={iconText} size={size} disabled={disabled} onClose={onClose} />

      <PhoneNumberInput
        size={size}
        borderRadius={borderRadius}
        state={disabled ? 'disabled' : state}
        value={phoneValue}
        onChange={handleChange}
      />

      {hintText && <HintText text={hintText} size={size} disabled={disabled} />}
    </Box>
  );
}
