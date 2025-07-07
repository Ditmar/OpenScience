import { styled } from '@mui/material/styles';
import type { Theme } from '@mui/material/styles';
import type { StyleProps } from './types/IProps';

const TRANSPARENT = 'transparent';

const getBackgroundColor = (
  variant: string,
  color: string,
  customColor: string | undefined,
  theme: Theme,
): string => {
  const colorMap: Record<string, string> = {
    neutral: theme.palette.common.white,
    white: theme.palette.common.white,
    gray: theme.customColorsBarge.gray,
    violet: theme.palette.secondary.main,
    blue: theme.palette.primary.main,
    custom: customColor ?? theme.palette.warning.main,
  };

  const baseColor = colorMap[color] ?? theme.palette.primary.main;

  switch (variant) {
    case 'filled':
      return baseColor;
    case 'soft':
      return `${baseColor}20`;
    case 'outline':
    default:
      return TRANSPARENT;
  }
};

const getPadding = (size?: string): string => {
  switch (size) {
    case 'small':
      return '2px 6px';
    case 'large':
      return '6px 12px';
    default:
      return '4px 8px';
  }
};

export const BadgeContainer = styled('div', {
  shouldForwardProp: (prop) =>
    !['size', 'color', 'variant', 'customColor', 'shape', 'onClick'].includes(prop as string),
})<StyleProps>(({ size, variant, color, customColor, shape, onClick, theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  padding: getPadding(size),
  borderRadius: shape === 'rounded' ? 8 : 0,
  cursor: onClick ? 'pointer' : 'default',
  backgroundColor: getBackgroundColor(variant, color, customColor, theme),
  border:
    variant === 'outline'
      ? `1px solid ${customColor ?? theme.palette.divider}`
      : '1px solid transparent',
  transition: 'all 0.2s ease',
  fontFamily: '"Poppins", sans-serif',
  '& *': {
    fontFamily: '"Poppins", sans-serif !important',
  },
}));
