import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import type { IProps } from './types/IProps';

export default function HintText({
  text,
  size = 'medium',
  disabled = false,
  className = '',
}: IProps) {
  const theme = useTheme();

  const sizeStyles = {
    small: {
      iconSize: 18,
      fontSize: '0.875rem',
      marginX: '8px',
    },
    medium: {
      iconSize: 20,
      fontSize: '1rem',
      marginX: '12px',
    },
    large: {
      iconSize: 22,
      fontSize: '1.125rem',
      marginX: '16px',
    },
  };

  const currentSize = sizeStyles[size];

  const iconColor = disabled ? theme.palette.text.disabled : '#151A2D';
  const textColor = theme.palette.text.disabled;

  return (
    <Box
      data-testid="hint-text"
      className={className}
      sx={{
        alignItems: 'center',
        display: 'flex',
        maxWidth: '371px',
        width: '100%',
        opacity: disabled ? 0.4 : 1,
        transition: 'opacity 0.2s ease',
      }}
    >
      <InfoOutlinedIcon
        data-testid="hint-icon-left"
        sx={{
          fontSize: currentSize.iconSize,
          flexShrink: 0,
          color: iconColor,
        }}
      />
      <Typography
        variant="body2"
        sx={{
          flexGrow: 1,
          minWidth: 0,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 300,
          fontSize: currentSize.fontSize,
          mx: currentSize.marginX,
          color: textColor,
        }}
      >
        {text}
      </Typography>
      <InfoOutlinedIcon
        data-testid="hint-icon-right"
        sx={{
          fontSize: currentSize.iconSize,
          flexShrink: 0,
          color: iconColor,
        }}
      />
    </Box>
  );
}
