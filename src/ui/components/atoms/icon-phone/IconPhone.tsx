import React from 'react';
import { Box, Typography, IconButton, useTheme, styled } from '@mui/material';
import type { IconPhoneProps } from './types/IProps';

const phoneIconUrl = new URL('../../../../assets/icons/fi-rr-phone-flip.svg', import.meta.url).href;
const closeIconUrl = new URL(
  '../../../../assets/icons/fi-rr-circle-quarters-alt.svg',
  import.meta.url,
).href;

const StyledBox = styled(Box)<{ disabled: boolean }>(({ disabled }) => ({
  alignItems: 'center',
  display: 'flex',
  maxWidth: '371px',
  width: '100%',
  transition: 'opacity 0.2s ease',
  opacity: disabled ? 0.5 : 1,
}));

const StyledImg = styled('img')<{
  iconSize: number;
  filter: string;
}>(({ iconSize, filter }) => ({
  width: iconSize,
  height: iconSize,
  flexShrink: 0,
  filter,
}));

const StyledTypography = styled(Typography)<{
  textSize: string;
  marginLeft: string;
  textColor?: string;
}>(({ theme, textSize, marginLeft, textColor }) => ({
  flexGrow: 1,
  fontFamily: 'Poppins, "Poppins-Regular", sans-serif',
  fontWeight: 400,
  fontSize: textSize,
  marginLeft,
  color: textColor ?? theme.palette.phonedropdownPalette.textPrimary,
}));

const StyledIconButton = styled(IconButton)({
  marginLeft: 'auto',
  padding: 0,
  '&:hover': {
    backgroundColor: 'transparent',
  },
});

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
  const textColor = disabled
    ? theme.palette.text.disabled
    : theme.palette.phonedropdownPalette.textPrimary;
  const filterBase =
    'brightness(0) saturate(100%) invert(8%) sepia(15%) saturate(2044%) hue-rotate(185deg) brightness(95%) contrast(95%)';
  const filter = `${filterBase} ${disabled ? 'opacity(0.5)' : ''}`;

  return (
    <StyledBox data-testid="icon-phone" className={className} disabled={disabled}>
      <StyledImg
        data-testid="phone-icon"
        src={phoneIconUrl}
        alt="Phone icon"
        iconSize={currentSize.iconSize}
        filter={filter}
      />
      <StyledTypography
        variant="body2"
        textSize={currentSize.textSize}
        marginLeft={currentSize.marginLeft}
        textColor={textColor}
      >
        {text}
      </StyledTypography>
      {onClose && (
        <StyledIconButton data-testid="close-button" onClick={onClose} disabled={disabled}>
          <StyledImg
            src={closeIconUrl}
            alt="Close icon"
            iconSize={currentSize.iconSize}
            filter={filter}
          />
        </StyledIconButton>
      )}
    </StyledBox>
  );
}
