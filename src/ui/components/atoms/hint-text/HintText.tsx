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
    color: iconColor ?? theme.palette.text.primary,
  }),
);

const StyledTypography = styled(Typography)<{
  fontSize: string;
  marginX: string;
  fontFamily?: string;
  fontWeight?: number | string;
  textColor?: string;
}>(({ theme, fontSize, marginX, fontFamily, fontWeight, textColor }) => ({
  flexGrow: 1,
  minWidth: 0,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  fontFamily: fontFamily ?? theme.typography.fontFamily,
  fontWeight: fontWeight ?? theme.typography.fontWeightLight,
  fontSize,
  marginLeft: marginX,
  marginRight: marginX,
  color: textColor ?? theme.palette.text.secondary,
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

  const iconColor = disabled ? theme.palette.text.disabled : theme.palette.text.primary;
  const textColor = theme.palette.text.disabled;
  const fontFamily = undefined;
  const fontWeight = undefined;

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
