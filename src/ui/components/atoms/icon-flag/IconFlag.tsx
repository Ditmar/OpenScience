import React from 'react';
import { Box, Avatar, Typography } from '@mui/material';
import type { CountryFlagProps } from './types/IProps';

export function CountryFlag({
  src,
  alt,
  name,
  dialCode,
  size = 'medium',
  variant = 'circular',
}: CountryFlagProps): JSX.Element {
  const sizeStyles = {
    small: {
      avatarSize: 24,
      fontSize: '0.875rem',
    },
    medium: {
      avatarSize: 28,
      fontSize: '1rem',
    },
    large: {
      avatarSize: 32,
      fontSize: '1.125rem',
    },
  };

  const currentSize = sizeStyles[size];
  const borderRadius = variant === 'circular' ? '50%' : '2px';

  return (
    <Box
      data-testid="country-flag"
      sx={{
        display: 'flex',
        alignItems: 'center',
        padding: '4px 8px',
        width: 'max-content',
        maxWidth: '100%',
        cursor: 'pointer',
        transition: 'background-color 0.2s ease',
      }}
    >
      <Avatar
        src={src}
        alt={alt}
        sx={{
          width: currentSize.avatarSize,
          height: currentSize.avatarSize,
          borderRadius,
        }}
      />
      <Typography
        variant="body1"
        sx={{
          ml: '16px',
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 300,
          fontSize: currentSize.fontSize,
          color: '#1B2037',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {name}
        <Box component="span" sx={{ color: '#1B2037', ml: '4px' }}>
          ({dialCode})
        </Box>
      </Typography>
    </Box>
  );
}
