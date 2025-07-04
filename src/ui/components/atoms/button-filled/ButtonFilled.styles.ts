import type { SxProps, Theme } from '@mui/material';
import { theme } from '../../../../globals/theme';

const borderRadiusMap = {
    normal: '0',
    semi: '0.5rem',
    circle: '3.125rem',
} as const;

const fontSizeMap = {
    small: '1rem',
    medium: '1.125rem',
    large: '1.25rem',
} as const;

const iconSizeMap = {
    small: '1.125rem',
    medium: '1.25rem',
    large: '1.5rem',
} as const;

const buttonColorDefaultMap = {
    white: theme.colors.neutral.white[900],
    black: theme.colors.neutral.black[500],
    grayStrongDark: theme.colors.neutral.grayStrongDark[500],
    graySoft: theme.colors.neutral.graySoft[500],
    primary: theme.colors.brand.primary[500],
    secondary: theme.colors.brand.secondary[500],
    tertiary: theme.colors.brand.tertiary[500],
    positive: theme.colors.feedback.positive[500],
    negative: theme.colors.feedback.negative[500],
    warning: theme.colors.feedback.warning[500],
    disabled: theme.colors.neutral.grayStrongDark[50],
} as const;

const buttonColorSoftMap = {
    white: theme.colors.neutral.white[900],
    black: theme.colors.neutral.black[100],
    grayStrongDark: theme.colors.neutral.grayStrongDark[100],
    graySoft: theme.colors.neutral.graySoft[100],
    primary: theme.colors.brand.primary[100],
    secondary: theme.colors.brand.secondary[100],
    tertiary: theme.colors.brand.tertiary[100],
    positive: theme.colors.feedback.positive[100],
    negative: theme.colors.feedback.negative[100],
    warning: theme.colors.feedback.warning[100],
    disabled: theme.colors.neutral.grayStrongDark[25],
} as const;

const buttonColorExtraSoftMap = {
    white: theme.colors.neutral.white[900],
    black: theme.colors.neutral.black[50],
    grayStrongDark: theme.colors.neutral.grayStrongDark[50],
    graySoft: theme.colors.neutral.graySoft[50],
    primary: theme.colors.brand.primary[50],
    secondary: theme.colors.brand.secondary[50],
    tertiary: theme.colors.brand.tertiary[50],
    positive: theme.colors.feedback.positive[50],
    negative: theme.colors.feedback.negative[50],
    warning: theme.colors.feedback.warning[50],
} as const;

const buttonColorDarkMap = {
    white: theme.colors.neutral.white[900],
    black: theme.colors.neutral.black[600],
    grayStrongDark: theme.colors.neutral.grayStrongDark[600],
    graySoft: theme.colors.neutral.graySoft[600],
    primary: theme.colors.brand.primary[600],
    secondary: theme.colors.brand.secondary[600],
    tertiary: theme.colors.brand.tertiary[600],
    positive: theme.colors.feedback.positive[600],
    negative: theme.colors.feedback.negative[600],
    warning: theme.colors.feedback.warning[600],
} as const;

function stateKey(
  colorVariant?: keyof typeof buttonColorDefaultMap,
  dark?: boolean,
  disabled?: boolean
): keyof typeof buttonColorDefaultMap {
  if (colorVariant) return colorVariant;
  if (disabled) return 'disabled';
  // Fallback to a valid key, e.g., 'primary'
  return 'primary';
}

export const buttonSx = (opts: {
  borderRadius?: keyof typeof borderRadiusMap;
  colorVariant?: keyof typeof buttonColorDefaultMap;
  dark?: boolean;
  disabled?: boolean;
  size?: keyof typeof fontSizeMap;
  buttonVariant?:  'default' | 'ghost' | 'light' | 'soft' | 'outline';
}): SxProps<Theme> => {
  const colorKey = stateKey(opts.colorVariant, opts.dark, opts.disabled) ?? 'primary';

  const borderRadius = borderRadiusMap[opts.borderRadius ?? 'normal'];
  const fontSize = fontSizeMap[opts.size ?? 'medium'];
  const iconSize = iconSizeMap[opts.size ?? 'medium'];

  const buttonVariant = opts.buttonVariant ?? 'solid';

  const baseStyles: SxProps<Theme> = {
    borderRadius,
    fontSize,
    fontWeight: '400',
    textTransform: 'none',
    cursor: opts.disabled ? 'not-allowed' : 'pointer',
    svg: {
      fontSize: iconSize,
    },
  };

  if (buttonVariant === 'default') {
    return {
      ...baseStyles,
      // backgroundColor: ,
      color: opts.disabled
        ? buttonColorDefaultMap.disabled
        : buttonColorDefaultMap[colorKey],
      border: `1px solid ${buttonColorDefaultMap[colorKey]}`,
      '&:hover': {
        backgroundColor: buttonColorSoftMap[colorKey],
      },
    };
  }

  return baseStyles;
};
