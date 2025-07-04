import React, { useEffect, useState } from 'react';
import { Box, MenuItem, Select, type SelectChangeEvent } from '@mui/material';
import type { IProps } from './types/IProps';
import { selectListSx, selectSx } from './InputSelect.styles';
import type { Option } from './interfaces/IOption.interface';

export function InputSelect(props: IProps) {
  const { options, error, disabled, borderRadius, size } = props;
  const [country, setCountry] = useState('');
  const [keyboardFocus, setKeyboardFocus] = useState(false);

  const handleChange = (event: SelectChangeEvent) => {
    setCountry(event.target.value);
  };

  useEffect(() => {
    const onKey = () => {
      setKeyboardFocus(true);
    };
    const onMouse = () => {
      setKeyboardFocus(false);
    };
    window.addEventListener('keydown', onKey);
    window.addEventListener('mousedown', onMouse);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('mousedown', onMouse);
    };
  }, []);

  const selectStyles = selectSx({ disabled, error, borderRadius, size, keyboardFocus });
  const selectListStyles = selectListSx({ error, size, keyboardFocus });
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
        className={focusCls}
        sx={selectStyles}
        MenuProps={{ MenuListProps: { sx: selectListStyles } }}
      >
        {options.map((item: Option, idx) => (
          <MenuItem value={idx > 0 ? item.code : ''} key={item.code}>
            {item.code !== '' ? (
              <Box
                component="img"
                src={`./images/flags/${item.code}.svg`}
                alt={item.country}
                sx={{ width: 18, height: 18 }}
              />
            ) : null}
            {item.country}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
}
