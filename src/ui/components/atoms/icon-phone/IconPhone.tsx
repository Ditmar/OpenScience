import React from 'react';
import { Box, Typography, IconButton, useTheme } from '@mui/material';
import type { IconPhoneProps } from './types/IProps';
import styles from './IconPhone.module.scss';

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
  const textColor = disabled ? theme.palette.text.disabled : '#1B2037';

  return (
    <Box
      data-testid="icon-phone"
      className={`${styles['icon-phone']} ${
        disabled ? styles['icon-phone--disabled'] : ''
      } ${className}`}
      sx={{
        transition: 'opacity 0.2s ease',
        opacity: disabled ? 0.5 : 1,
      }}
    >
      {/* Icono de teléfono */}
      <img
        data-testid="phone-icon"
        src={phoneIconUrl}
        alt="Phone icon"
        className={`${styles['icon-phone__icon']} ${styles[`icon-phone__icon--${size}`]}`}
        style={{
          filter: `brightness(0) saturate(100%) invert(8%) sepia(15%) saturate(2044%) hue-rotate(185deg) brightness(95%) contrast(95%) ${
            disabled ? 'opacity(0.5)' : ''
          }`,
        }}
      />

      <Typography
        variant="body2"
        className={`${styles['icon-phone__text']} ${styles[`icon-phone__text--${size}`]}`}
        sx={{ color: textColor }}
      >
        {text}
      </Typography>

      {onClose && (
        <IconButton
          data-testid="close-button"
          onClick={onClose}
          disabled={disabled}
          className={styles['icon-phone__close-button']}
          sx={{
            padding: 0,
            marginLeft: 'auto',
            '&:hover': {
              backgroundColor: 'transparent',
            },
          }}
        >
          <img
            src={closeIconUrl}
            alt="Close icon"
            className={`${styles['icon-phone__icon']} ${styles[`icon-phone__icon--${size}`]}`}
            style={{
              filter: `brightness(0) saturate(100%) invert(8%) sepia(15%) saturate(2044%) hue-rotate(185deg) brightness(95%) contrast(95%) ${
                disabled ? 'opacity(0.5)' : ''
              }`,
            }}
          />
        </IconButton>
      )}
    </Box>
  );
}
