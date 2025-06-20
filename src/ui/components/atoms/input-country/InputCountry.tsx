import React, { useEffect, useState } from 'react';
import { Box, MenuItem, Select, type SelectChangeEvent } from '@mui/material';
import type { IProps, Option } from './types/IProps';
// import styles from './InputCountry.module.scss';
import { Icon } from '../../../utils/svg-icons/icons';
import globe from '../../../../assets/icons/globe.svg?raw';
import close_circle from '../../../../assets/icons/close_circle.svg?raw';
import info from '../../../../assets/icons/info.svg?raw';
import { selectSx, textSx, iconSx } from './styles';

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

  const selectStyles = selectSx({ disabled, error, borderRadius, size , keyboardFocus });
  const labelStyles = textSx({ disabled, error, size });
  const helperStyles = textSx({ disabled, error, size });
  const closeStyles = iconSx({ disabled, error });
  const infoStyles = iconSx({ disabled, error });

  const focusCls = keyboardFocus ? 'keyboard-focus' : 'mouse-focus';

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          {globe && <Icon src={globe} styles={closeStyles as React.CSSProperties} />}
          <Box component="p" sx={labelStyles}>{label || ''}</Box>
        </Box>
        <Box>{close_circle && <Icon src={close_circle} styles={closeStyles as React.CSSProperties} />}</Box>
      </Box>
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
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          {info && <Icon src={info} styles={infoStyles as React.CSSProperties} />}
          <Box component="p" sx={helperStyles}>{helperText}</Box>
        </Box>
        <Box>{info && <Icon src={info} styles={infoStyles as React.CSSProperties} />}</Box>
      </Box>
    </Box>
  );
}
