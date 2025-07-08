import type { SxProps, Theme } from '@mui/material';
import { theme } from '../../../../globals/theme';

const fontSizeSelectMap = {
  small: '1rem',
  medium: '1.125rem',
  large: '1.25rem',
} as const;

const borderRadiusMap = {
  normal: '0',
  semi: '0.5rem',
  circle: '3.125rem',
} as const;

const defaultColorMap = {
  white: theme.colors.neutral.grayStrongDark[500],
  black: theme.colors.neutral.grayStrongDark[500],
  primary: theme.colors.brand.primary[500],
  secondary: theme.colors.brand.secondary[500],
  tertiary: theme.colors.brand.tertiary[500],
  error: theme.colors.feedback.negative[500],
  disabled: theme.colors.neutral.grayStrongDark[50],
} as const;

const extraSoftColorMap = {
  white: theme.colors.neutral.graySoft[100],
  black: theme.colors.neutral.graySoft[100],
  primary: theme.colors.brand.primary[100],
  secondary: theme.colors.brand.secondary[100],
  tertiary: theme.colors.brand.tertiary[100],
  error: theme.colors.feedback.negative[100],
  disabled: theme.colors.neutral.grayStrongDark[50],
} as const;

const ultraSoftColorMap = {
  white: theme.colors.neutral.graySoft[50],
  black: theme.colors.neutral.graySoft[50],
  primary: theme.colors.brand.primary[50],
  secondary: theme.colors.brand.secondary[50],
  tertiary: theme.colors.brand.tertiary[50],
  error: theme.colors.feedback.negative[50],
  disabled: theme.colors.neutral.grayStrongDark[50],
} as const;

function stateKey<T extends keyof typeof defaultColorMap>(colorVariant: T | undefined, error?: boolean, disabled?: boolean): keyof typeof defaultColorMap {
  if (disabled) return 'disabled';
  if (error) return 'error';
  return colorVariant ?? 'primary';
}

export const selectSx = (opts: {
  disabled?: boolean;
  error?: boolean;
  borderRadius?: 'normal' | 'semi' | 'circle';
  keyboardFocus?: boolean;
  size?: 'small' | 'medium' | 'large';
  colorVariant?: 'primary' | 'secondary' | 'tertiary' | 'white' | 'black';
}): SxProps<Theme> => {
  const colorKey = stateKey(opts.colorVariant, opts.error, opts.disabled);

  const borderRadius = borderRadiusMap[opts.borderRadius ?? 'normal'];
  const fontSize = fontSizeSelectMap[opts.size ?? 'medium'];

  return {
    width: '23.188rem',
    borderRadius,
    fontWeight: '400',
    fontFamily: 'Poppins-Light, sans-serif',
    fontSize,
    border: '1px solid #e0e6e7',
    '@media(max-width:600px)': { maxWidth: '18rem' },
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.colors.neutral.graySoft[100],
      borderWidth: '1px',
    },
    '& .MuiInputBase-input': {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      p: '0.938rem 1.125rem 0.938rem 0.875rem',
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: defaultColorMap[colorKey],
    },
    '&.keyboard-focus .MuiOutlinedInput-notchedOutline': {
      borderColor: extraSoftColorMap[colorKey],
      borderWidth: colorKey === 'disabled' ? '1px' : '4px',
    },
    '&.mouse-focus.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: defaultColorMap[colorKey],
      borderWidth: '1px',
    },
    ...(opts.disabled && {
      backgroundColor: theme.colors.neutral.grayStrongDark[25],
      color: theme.colors.neutral.grayStrongDark[50],
      cursor: 'not-allowed',
    }),
  };
};