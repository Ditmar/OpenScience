import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import type { IProps } from './types/IProps';
import styles from './HintText.module.scss';

export default function HintText({
  text,
  size = 'medium',
  disabled = false,
  className = '',
}: IProps) {
  const theme = useTheme();
  const iconColor = disabled ? theme.palette.text.disabled : '#151A2D';
  const textColor = disabled ? theme.palette.text.disabled : theme.palette.text.secondary;

  return (
    <Box
      data-testid="hint-text"
      className={`${styles['hint-text']} ${
        disabled ? styles['hint-text--disabled'] : ''
      } ${className}`}
      sx={{
        transition: 'opacity 0.2s ease',
      }}
    >
      <InfoOutlinedIcon
        data-testid="hint-icon-left"
        className={`${styles['hint-text__icon']} ${styles[`hint-text__icon--${size}`]}`}
        sx={{ color: iconColor }}
      />
      <Typography
        variant="body2"
        className={`${styles['hint-text__text']} ${styles[`hint-text__text--${size}`]}`}
        sx={{ color: textColor }}
      >
        {text}
      </Typography>
      <InfoOutlinedIcon
        data-testid="hint-icon-right"
        className={`${styles['hint-text__icon']} ${styles[`hint-text__icon--${size}`]}`}
        sx={{ color: iconColor }}
      />
    </Box>
  );
}
