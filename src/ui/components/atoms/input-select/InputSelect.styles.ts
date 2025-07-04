import type { SxProps, Theme } from '@mui/material';
import { theme } from '../../../../globals/theme';

const fontSizeSelectMap = {
  small: '1rem',
  medium: '1.125rem',
  large: '1.25rem',
} as const;

const borderColorMap = {
  default: theme.colors.neutral.graySoft[100],
  error: theme.colors.feedback.negative[500],
  disabled: theme.colors.neutral.grayStrongDark[50],
} as const;

const borderRadiusMap = {
  normal: '0',
  semi: '0.5rem',
  circle: '3.125rem',
} as const;

const borderHoverMap = {
  default: theme.colors.brand.primary[500],
  error: theme.colors.feedback.negative[500],
  disabled: '',
} as const;

const borderFocusMap = {
  default: theme.colors.brand.primary[100],
  error: theme.colors.feedback.negative[100],
  disabled: theme.colors.neutral.grayStrongDark[50],
} as const;

const mouseFocusMap = {
  default: theme.colors.brand.primary[500],
  error: theme.colors.feedback.negative[500],
} as const;

const listFocusMap = {
  default: theme.colors.brand.primary[50],
  error: theme.colors.feedback.negative[50],
} as const;

function stateKey(disabled?: boolean, error?: boolean) {
  if (disabled) return 'disabled';
  if (error) return 'error';
  return 'default';
}

export const selectSx = (opts: {
  disabled?: boolean;
  error?: boolean;
  borderRadius?: 'normal' | 'semi' | 'circle';
  keyboardFocus?: boolean;
  size?: 'small' | 'medium' | 'large';
}): SxProps<Theme> => {
  const colorKey = stateKey(opts.disabled, opts.error);
  const keyMouse = opts.error ? 'error' : 'default';

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
      borderColor: borderColorMap[colorKey],
      borderWidth: '1px',
    },
    '& .MuiInputBase-input': {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      p: '0.938rem 1.125rem 0.938rem 0.875rem',
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: borderHoverMap[colorKey],
    },
    '&.keyboard-focus .MuiOutlinedInput-notchedOutline': {
      borderColor: borderFocusMap[colorKey],
      borderWidth: colorKey === 'disabled' ? '1px' : '4px',
    },
    '&.mouse-focus.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: mouseFocusMap[keyMouse],
      borderWidth: '1px',
    },
    ...(opts.disabled && {
      backgroundColor: theme.colors.neutral.grayStrongDark[25],
      color: theme.colors.neutral.grayStrongDark[50],
      cursor: 'not-allowed',
    }),
  };
};

export const selectListSx = (opts: {
  error?: boolean;
  keyboardFocus?: boolean;
  size?: 'small' | 'medium' | 'large';
}): SxProps<Theme> => {
  const colorKey = opts.error ? 'error' : 'default';

  const fontSize = fontSizeSelectMap[opts.size ?? 'medium'];

  return {
    '& .MuiMenuItem-root': {
      transition: 'all 0.3s',
      display: 'flex',
      gap: '10px',
      fontWeight: 300,
      fontFamily: 'Poppins-Light, sans-serif',
      fontSize,
      '&:focus, &:active, &:hover': {
        backgroundColor: listFocusMap[colorKey],
      },
    },
  };
};
