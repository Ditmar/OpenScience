import React, { useEffect, useState } from 'react';
import { Box, MenuItem, Select, type SelectChangeEvent } from '@mui/material';
import type { IProps, Option } from './types/IProps';
import { InputSelect } from 'ui/components/atoms/input-select/InputSelect';
import { InputLabel } from 'ui/components/atoms/input-label/InputLabel';

const options: Option[] = [
  { country: 'Argentina', code: 'ar' },
  { country: 'Bolivia', code: 'bo' },
  { country: 'Chile', code: 'cl' },
  { country: 'Perú', code: 'pe' },
];

export function InputCountry(props: IProps) {
  const { label, options, error, helperText, disabled, borderRadius, size } = props;
  const [country, setCountry] = useState('');
  const [keyboardFocus, setKeyboardFocus] = useState(false);

  const handleChange = (event: SelectChangeEvent) => setCountry(event.target.value);

  useEffect(() => {
    const onKey = () => setKeyboardFocus(true);
    const onMouse = () => setKeyboardFocus(false);
    window.addEventListener('keydown', onKey);
    window.addEventListener('mousedown', onMouse);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('mousedown', onMouse);
    };
  }, []);

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
        <InputLabel label='Select Country' />
      </Box>
      <Box sx={{ position: 'relative' }}>
        <InputSelect options={options} />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 1 }}>
        <InputLabel label='Hint Text' />
      </Box>
    </Box>
  );
}
