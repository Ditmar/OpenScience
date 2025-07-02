import React from 'react';
import { Box, Typography, IconButton, useTheme } from '@mui/material';
import type { IconPhoneProps } from './types/IProps';

const phoneIconUrl = new URL('../../../../assets/icons/fi-rr-phone-flip.svg', import.meta.url).href;
const closeIconUrl = new URL(
  '../../../../assets/icons/fi-rr-circle-quarters-alt.svg',
  import.meta.url,
).href;

export default function IconPhone({
  text = 'Phone Number',
  size = 'medium',
  disabled = false,
  className = '',
  onClose,
}: IconPhoneProps) {
  const theme = useTheme();

  const sizeStyles = {
    small: {
      iconSize: 18,
      textSize: '0.875rem',
      marginLeft: '10px',
    },
    medium: {
      iconSize: 20,
      textSize: '1rem',
      marginLeft: '14px',
    },
    large: {
      iconSize: 22,
      textSize: '1.125rem',
      marginLeft: '18px',
    },
  };

  const currentSize = sizeStyles[size];
  const textColor = disabled ? theme.palette.text.disabled : '#1B2037';
  const filterBase =
    'brightness(0) saturate(100%) invert(8%) sepia(15%) saturate(2044%) hue-rotate(185deg) brightness(95%) contrast(95%)';
  const filter = `${filterBase} ${disabled ? 'opacity(0.5)' : ''}`;

  return (
    <Box
      data-testid="icon-phone"
      className={className}
      sx={{
        alignItems: 'center',
        display: 'flex',
        maxWidth: '371px',
        width: '100%',
        transition: 'opacity 0.2s ease',
        opacity: disabled ? 0.5 : 1,
      }}
    >
      {/* Icono de teléfono */}
      <img
        data-testid="phone-icon"
        src={phoneIconUrl}
        alt="Phone icon"
        style={{
          width: currentSize.iconSize,
          height: currentSize.iconSize,
          flexShrink: 0,
          filter,
        }}
      />

      <Typography
        variant="body2"
        sx={{
          flexGrow: 1,
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 400,
          fontSize: currentSize.textSize,
          marginLeft: currentSize.marginLeft,
          color: textColor,
        }}
      >
        {text}
      </Typography>

      {onClose && (
        <IconButton
          data-testid="close-button"
          onClick={onClose}
          disabled={disabled}
          sx={{
            marginLeft: 'auto',
            padding: 0,
            '&:hover': {
              backgroundColor: 'transparent',
            },
          }}
        >
          <img
            src={closeIconUrl}
            alt="Close icon"
            style={{
              width: currentSize.iconSize,
              height: currentSize.iconSize,
              flexShrink: 0,
              filter,
            }}
          />
        </IconButton>
      )}
    </Box>
  );
}
