import React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
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
  const textSizeClass = styles[size];
  const avatarVariantClass = variant === 'rectangular' ? styles.rectangular : '';

  return (
    <Box className={styles['country-flag-container']} display="flex" alignItems="center">
      <Avatar
        src={src}
        alt={alt}
        className={`${styles['country-flag-avatar']} ${avatarVariantClass}`}
      />
      <Typography variant="body1" className={`${styles['country-flag-text']} ${textSizeClass}`}>
        {name} <span className={styles['dial-code']}>({dialCode})</span>
      </Typography>
    </Box>
  );
}
