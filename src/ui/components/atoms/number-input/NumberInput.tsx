import React, { useState } from 'react';
import { Box, InputBase, IconButton, useTheme, Typography, Collapse } from '@mui/material';
import { ArrowDropDown, ArrowDropUp } from '@mui/icons-material';
import type { PhoneNumberInputProps } from './types/IProps';

const phoneIconUrl = new URL('../../../../assets/icons/fi-rr-phone-flip.svg', import.meta.url).href;

export default function PhoneNumberInput({
  size = 'medium',
  borderRadius = 'rounded',
  state = 'default',
  value = '',
  onChange,
}: PhoneNumberInputProps) {
  const theme = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [countryCode] = useState('(+54)');
  const [countryFlag] = useState('https://flagcdn.com/w320/ar.png');

  const sizeStyles = {
    small: {
      height: 48,
      fontSize: '0.875rem',
      padding: '12px 16px',
      iconSize: 18,
      inputPadding: '50px',
    },
    medium: {
      height: 52,
      fontSize: '1rem',
      padding: '14px 16px',
      iconSize: 20,
      inputPadding: '52px',
    },
    large: {
      height: 56,
      fontSize: '1.125rem',
      padding: '16px 16px',
      iconSize: 22,
      inputPadding: '54px',
    },
  };

  const stateStyles = {
    default: {
      borderColor: theme.palette.divider,
      backgroundColor: theme.palette.background.paper,
    },
    hover: {
      borderColor: theme.palette.action.hover,
      backgroundColor: theme.palette.background.paper,
    },
    focus: {
      borderColor: theme.palette.primary.main,
      backgroundColor: theme.palette.background.paper,
    },
    error: { borderColor: theme.palette.error.main, backgroundColor: theme.palette.error.light },
    disabled: {
      borderColor: theme.palette.action.disabled,
      backgroundColor: theme.palette.action.disabledBackground,
      opacity: 0.6,
    },
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numbersOnly = e.target.value.replace(/\D/g, '');
    onChange?.(numbersOnly);
  };

  const toggleDropdown = () => {
    if (state !== 'disabled') {
      setIsOpen(!isOpen);
    }
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 371 }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          border: 1,
          borderColor: stateStyles[state].borderColor,
          backgroundColor: stateStyles[state].backgroundColor,
          borderRadius: borderRadius === 'rounded' ? '8px' : '0',
          height: sizeStyles[size].height,
          transition: 'all 0.3s ease',
          opacity: state === 'disabled' ? 0.6 : 1,
          '&:hover': state === 'disabled' ? {} : { borderColor: theme.palette.primary.main },
        }}
      >
        <IconButton
          onClick={toggleDropdown}
          disabled={state === 'disabled'}
          sx={{
            height: '100%',
            borderRadius: borderRadius === 'rounded' ? '8px 0 0 8px' : '0',
            backgroundColor: isOpen ? theme.palette.primary.main : 'transparent',
            fontFamily: '"Poppins", sans-serif',
            fontWeight: '500',
            color: isOpen ? theme.palette.common.white : '#1B2037',
            padding: sizeStyles[size].padding,
            minWidth: 80,
            borderRight: '1px solid',
            borderColor: isOpen ? theme.palette.primary.main : stateStyles[state].borderColor,
            transition: 'all 0.3s ease',
            '&:hover': {
              backgroundColor: isOpen ? theme.palette.primary.dark : theme.palette.action.hover,
            },
          }}
        >
          {/* Bandera dinámica antes del código */}
          <Box
            component="img"
            src={countryFlag}
            alt="Flag"
            sx={{
              width: sizeStyles[size].iconSize,
              height: sizeStyles[size].iconSize,
              borderRadius: '50%',
              mr: 1,
            }}
          />

          <Typography variant="body1" sx={{ fontFamily: '"Poppins", sans-serif', fontWeight: 200 }}>
            {countryCode}
          </Typography>
          <Box
            sx={{
              position: 'relative',
              width: 14,
              height: 18,
              ml: 1,
            }}
          >
            <ArrowDropUp
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: 14,
                height: 18,
                transition: 'opacity 0.2s ease',
                opacity: isOpen ? 1 : 0,
              }}
            />
            <ArrowDropDown
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: 14,
                height: 18,
                transition: 'opacity 0.2s ease',
                opacity: isOpen ? 0 : 1,
              }}
            />
          </Box>
        </IconButton>

        <Box
          sx={{
            position: 'relative',
            color: '#1B2037',
            flex: 1,
            height: '100%',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <img
            src={phoneIconUrl}
            alt="Phone icon"
            style={{
              position: 'absolute',
              left: '16px',
              width: sizeStyles[size].iconSize,
              height: sizeStyles[size].iconSize,
              zIndex: 1,
              filter:
                state === 'disabled'
                  ? 'opacity(0.5)'
                  : 'brightness(0) saturate(100%) invert(14%) sepia(11%) saturate(2032%) hue-rotate(185deg) brightness(93%) contrast(90%)',
            }}
          />

          <InputBase
            value={value}
            onChange={handleChange}
            placeholder="Phone Number"
            inputMode="numeric"
            disabled={state === 'disabled'}
            sx={{
              width: '100%',
              height: '100%',
              pl: sizeStyles[size].inputPadding,
              pr: '16px',
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 300,
              fontSize: sizeStyles[size].fontSize,
              color: '#1B2037',
              '& input::placeholder': { color: theme.palette.text.disabled, opacity: 1 },
            }}
          />
        </Box>
      </Box>

      <Collapse in={isOpen}>
        <Box
          sx={{
            mt: 1,
            border: 1,
            borderColor: theme.palette.divider,
            borderRadius: borderRadius === 'rounded' ? '8px' : '0',
            color: '#1B2037',
            p: 2,
            backgroundColor: theme.palette.background.paper,
          }}
        >
          <Typography>Country List</Typography>
        </Box>
      </Collapse>
    </Box>
  );
}
