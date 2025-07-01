import React, { useEffect, useState } from 'react';
import { Box, MenuItem, Select, type SelectChangeEvent } from '@mui/material';
import type { IProps, Option } from './types/IProps';
// import styles from './InputCountry.module.scss';
import { selectSx } from './styles';

export function InputSelect(props: IProps) {
  const { options, error, disabled, borderRadius, size } = props;
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

  const selectStyles = selectSx({ disabled, error, borderRadius, size, keyboardFocus });
  const focusCls = keyboardFocus ? 'keyboard-focus' : 'mouse-focus';

  return (
    <Box sx={{ position: 'relative' }}>
      <Select
        id="country-select"
        value={country}
        onChange={handleChange}
        displayEmpty
        disabled={disabled}
        inputProps={{ 'aria-label': 'Without label' }}
        className={`${focusCls}`}
        sx={selectStyles}
        MenuProps={{
          MenuListProps: {
            sx: {
              '& .MuiMenuItem-root': {
                transition: 'all 0.3s',
                display: 'flex',
                gap: '10px',
                fontWeight: 300,
                fontFamily: 'Poppins-Light, sans-serif',
                fontSize: '1rem',
                '&:focus, &:active': { backgroundColor: 'var(--color-brand-primary-50)' },
              },
            },
          },
        }}
      >
        {options.map((item: Option, idx) => (
          <MenuItem value={idx > 0 ? item.code : ''} key={item.code}>
            <Box component="img" src={`./images/flags/${item.code}.svg`} alt={item.country} sx={{ width: 18, height: 18 }} />
            {item.country}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
}
