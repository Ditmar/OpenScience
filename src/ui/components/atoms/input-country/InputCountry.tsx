import React, { useEffect, useState } from 'react';
import { MenuItem, Select, type SelectChangeEvent } from '@mui/material';
import type { IProps, Option } from './types/IProps';
import styles from './InputCountry.module.scss';
import { Icon } from '../../../utils/svg-icons/icons';
import globe from '../../../../assets/icons/globe.svg?raw';
import close_circle from '../../../../assets/icons/close_circle.svg?raw';
import info from '../../../../assets/icons/info.svg?raw';

export function InputCountry(props: IProps) {
  const { label, options, error, helperText, disabled, borderRadius, size } = props;
  const [country, setCountry] = React.useState('');
  const [keyboardFocus, setKeyboardFocus] = useState(false);
  const handleChange = (event: SelectChangeEvent) => {
    setCountry(event.target.value);
  };

  useEffect(() => {
    const handleKeyDown = () => {
      setKeyboardFocus(true);
    };
    const handleMouseDown = () => {
      setKeyboardFocus(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('mousedown', handleMouseDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  let labelClass = '';
  if (disabled) labelClass += styles.disabled + ' ';
  if (size) labelClass += styles[size];

  let borderColor = 'var(--color-neutral-gray-soft-100)';
  if (disabled) {
    borderColor = 'var(--color-neutral-gray-strong-50)';
  } else if (error) {
    borderColor = 'var(--color-feedback-negative-500)';
  }

  let borderRadiusClass = '';
  if (borderRadius === 'circle') {
    borderRadiusClass = styles['select-circle'];
  } else if (borderRadius === 'semi') {
    borderRadiusClass = styles['select-semi'];
  }

  let iconClass = '';
  if (disabled) {
    iconClass = styles.disabled;
  } else if (error) {
    iconClass = styles.error;
  }

  let helperClass = '';
  if (disabled) {
    helperClass += styles.disabled + ' ';
  } else if (error) {
    helperClass += styles.error + ' ';
  }
  if (size) {
    helperClass += styles[size];
  }

  return (
    <div className={styles['country-input']}>
      <div>
        <div>
          {globe && <Icon src={globe} />}
          <p className={labelClass.trim()}>{label ?? ''}</p>
        </div>
        <div>
          {close_circle && <Icon src={close_circle} className={disabled ? styles.disabled : ''} />}
        </div>
      </div>
      <div className={styles['select-wrapper']}>
        <Select
          id="country-select"
          label="country-select"
          value={country}
          onChange={handleChange}
          displayEmpty
          disabled={disabled}
          inputProps={{ 'aria-label': 'Without label' }}
          sx={{
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: borderColor
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: disabled
                ? ''
                : error
                  ? 'var(--color-feedback-negative-500)'
                  : 'var(--color-brand-primary-500)',
            },
            '&.keyboard-focus .MuiOutlinedInput-notchedOutline': {
              borderColor: disabled
                ? 'var(--color-neutral-gray-strong-50)'
                : error
                  ? 'var(--color-feedback-negative-100)'
                  : 'var(--color-brand-primary-100)',
              borderWidth: disabled ? '1px' : '4px',
            },
            '&.mouse-focus.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: error
                ? 'var(--color-feedback-negative-500)'
                : 'var(--color-brand-primary-500)',
              borderWidth: '1px',
            },
          }}
          className={`${styles['select-country']} ${borderRadiusClass}`}
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
                  '&:focus': {
                    backgroundColor: 'var(--color-brand-primary-50)',
                    '&:active': {
                      backgroundColor: 'var(--color-brand-primary-50)',
                    },
                  },
                  '&:active': {
                    backgroundColor: 'var(--color-brand-primary-50)',
                  },
                },
              },
            },
          }}
        >
          {options.map((item: Option, index: number) => {
            const iconFlag = `./images/flags/${item.code}.svg`;
            const code = index > 0 ? item.code : '';
            return (
              <MenuItem value={code} key={code}>
                <img src={iconFlag} alt="" />
                {item.country}
              </MenuItem>
            );
          })}
        </Select>
      </div>
      <div>
        <div>
          {info && (
            <Icon
              data-testid="button-icon"
              src={info}
              className={iconClass}
            />
          )}
          <p className={helperClass.trim()}>{helperText}</p>
        </div>
        <div>{info && <Icon data-testid="button-icon" src={info} />}</div>
      </div>
    </div>
  );
}
