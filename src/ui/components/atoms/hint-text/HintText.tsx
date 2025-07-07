import React from 'react';
import { Box, Typography, useTheme, styled } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import type { IProps } from './types/IProps';

const StyledBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'disabled',
})<{
  disabled: boolean;
}>(({ disabled }) => ({
  alignItems: 'center',
  display: 'flex',
  maxWidth: '371px',
  width: '100%',
  opacity: disabled ? 0.4 : 1,
  transition: 'opacity 0.2s ease',
}));

const StyledIcon = styled(InfoOutlinedIcon)<{ iconSize: number; iconColor?: string }>(
  ({ theme, iconSize, iconColor }) => ({
    fontSize: iconSize,
    flexShrink: 0,
    color: iconColor ?? theme.palette.phonedropdownPalette.textPrimary,
  }),
);

const StyledTypography = styled(Typography)<{
  fontSize: string;
  marginX: string;
  fontFamily?: string;
  fontWeight?: number | string;
  textColor?: string;
}>(({ theme, fontSize, marginX, fontWeight, textColor }) => ({
  flexGrow: 1,
  minWidth: 0,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  fontFamily: 'Poppins, "Poppins-Regular", sans-serif',
  fontWeight: fontWeight ?? 300,
  fontSize,
  marginLeft: marginX,
  marginRight: marginX,
  color: textColor ?? theme.palette.phonedropdownPalette.textSecondary,
}));

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

  const iconColor = disabled
    ? theme.palette.text.disabled
    : theme.palette.phonedropdownPalette.textPrimary;
  const textColor = disabled
    ? theme.palette.text.disabled
    : theme.palette.phonedropdownPalette.textSecondary;
  const fontFamily = 'Poppins, "Poppins-Regular", sans-serif';
  const fontWeight = 300;

  return (
    <StyledBox data-testid="hint-text" className={className} disabled={disabled}>
      <StyledIcon
        data-testid="hint-icon-left"
        iconSize={currentSize.iconSize}
        iconColor={iconColor}
      />
      <StyledTypography
        variant="body2"
        fontSize={currentSize.fontSize}
        marginX={currentSize.marginX}
        fontFamily={fontFamily}
        fontWeight={fontWeight}
        textColor={textColor}
      >
        {text}
      </StyledTypography>
      <StyledIcon
        data-testid="hint-icon-right"
        iconSize={currentSize.iconSize}
        iconColor={iconColor}
      />
    </StyledBox>
  );
}
