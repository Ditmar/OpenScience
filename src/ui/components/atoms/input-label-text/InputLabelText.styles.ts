import type { SxProps, Theme } from '@mui/material';
import { theme } from '../../../../globals/theme';

const fontSizeMap = {
  small: '0.75rem',
  medium: '1rem',
  large: '1.25rem',
} as const;

const fontColorMap = {
  default: theme.colors.neutral.grayStrongDark[700],
  error: theme.colors.feedback.negative[500],
  disabled: theme.colors.neutral.grayStrongDark[50],
  helper: theme.colors.neutral.graySoft[500],
} as const;

function stateKey(disabled?: boolean, error?: boolean, helper?: boolean) {
  if (disabled) return 'disabled';
  if (error) return 'error';
  if (helper) return 'helper';
  return 'default';
}

export const textSx = (opts: {
  disabled?: boolean;
  error?: boolean;
  helper?: boolean;
  size?: keyof typeof fontSizeMap;
}): SxProps<Theme> => {
  const colorKey = stateKey(opts.disabled, opts.error, opts.helper);
  const fontSize = fontSizeMap[opts.size ?? 'medium'];

  return {
    color: fontColorMap[colorKey],
    fontWeight: 400,
    fontFamily: 'Poppins-Light, sans-serif',
    fontSize,
  };
};
