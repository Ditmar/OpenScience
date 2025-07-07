import React from 'react';
import { Box, Avatar, Typography, styled } from '@mui/material';
import type { CountryFlagProps } from './types/IProps';

const StyledBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  padding: '4px 8px',
  width: 'max-content',
  maxWidth: '100%',
  cursor: 'pointer',
  transition: 'background-color 0.2s ease',
});

const StyledAvatar = styled(Avatar)<{ avatarSize: number; borderRadius: string }>(
  ({ avatarSize, borderRadius }) => ({
    width: avatarSize,
    height: avatarSize,
    borderRadius,
  }),
);

const StyledTypography = styled(Typography)<{
  fontSize: string;
  fontFamily?: string;
  fontWeight?: number | string;
  color?: string;
}>(({ theme, fontSize, fontWeight, color }) => ({
  marginLeft: '16px',
  fontFamily: 'Poppins, "Poppins-Regular", sans-serif',
  fontWeight: fontWeight ?? 300,
  fontSize,
  color: color ?? theme.palette.phonedropdownPalette.textPrimary,
  display: 'flex',
  alignItems: 'center',
}));

const StyledDialCode = styled(Box)<{ color?: string }>(({ theme, color }) => ({
  color: color ?? theme.palette.phonedropdownPalette.textPrimary,
  marginLeft: '4px',
}));

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
  const fontFamily = 'Poppins, "Poppins-Regular", sans-serif';
  const fontWeight = 300;
  const color = undefined;

  return (
    <StyledBox data-testid="country-flag">
      <StyledAvatar
        src={src}
        alt={alt}
        avatarSize={currentSize.avatarSize}
        borderRadius={borderRadius}
      />
      <StyledTypography
        variant="body1"
        fontSize={currentSize.fontSize}
        fontFamily={fontFamily}
        fontWeight={fontWeight}
        color={color}
      >
        {name}
        <StyledDialCode as="span" color={color}>
          ({dialCode})
        </StyledDialCode>
      </StyledTypography>
    </StyledBox>
  );
}
