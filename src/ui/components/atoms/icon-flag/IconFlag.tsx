import React from 'react';
import { Box, Avatar, Typography } from '@mui/material';
import type { CountryFlagProps } from './types/IProps';
import styles from './IconFlag.module.scss';

export function CountryFlag({
  src,
  alt,
  name,
  dialCode,
  size = 'medium',
  variant = 'circular',
}: CountryFlagProps): JSX.Element {
  return (
    <Box className={styles['country-flag-container']}>
      <Avatar
        src={src}
        alt={alt}
        className={`${styles['country-flag-avatar']} ${styles[`country-flag-avatar--${size}`]} ${
          styles[`country-flag-avatar--${variant}`]
        }`}
      />
      <Typography
        variant="body1"
        className={`${styles['country-flag-text']} ${styles[`country-flag-text--${size}`]}`}
      >
        {name} <span className="dial-code">({dialCode})</span>
      </Typography>
    </Box>
  );
}
