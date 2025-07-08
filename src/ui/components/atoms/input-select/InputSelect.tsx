import React, { useEffect, useState } from 'react';
import { Box, MenuItem, Select, type SelectChangeEvent } from '@mui/material';
import type { IProps } from './types/IProps';
import { selectListSx, selectSx } from './InputSelect.styles';
import type { Option } from './interfaces/IOption.interface';
import { CountryListDropdown } from '../country-list/CountryList';
import type { ICountry } from '../country-list/interfaces/Country.interface';

const countryList: ICountry[] = [
  { code: 'ar', name: 'Argentina', dialCode: '+54' },
  { code: 'at', name: 'Austria', dialCode: '+43' },
  { code: 'bd', name: 'Bangladesh', dialCode: '+880' },
  { code: 'be', name: 'Belgium', dialCode: '+32' },
  { code: 'bo', name: 'Bolivia', dialCode: '+591' },
  { code: 'br', name: 'Brazil', dialCode: '+55' },
  { code: 'ca', name: 'Canada', dialCode: '+1' },
  { code: 'cl', name: 'Chile', dialCode: '+56' },
  { code: 'cn', name: 'China', dialCode: '+86' },
  { code: 'co', name: 'Colombia', dialCode: '+57' },
  { code: 'cr', name: 'Costa Rica', dialCode: '+506' },
  { code: 'cu', name: 'Cuba', dialCode: '+53' },
  { code: 'de', name: 'Germany', dialCode: '+49' },
  { code: 'dk', name: 'Denmark', dialCode: '+45' },
  { code: 'eg', name: 'Egypt', dialCode: '+20' },
  { code: 'pe', name: 'Peru', dialCode: '+51' },
];

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
        <CountryListDropdown countryList={countryList} size={size} />
      </Select>
    </Box>
  );
}
