import type { SxProps, Theme } from '@mui/material';
import { theme } from '../../../../globals/theme';

const iconColorMap = {
  default: theme.colors.neutral.grayStrongDark[700],
  error: theme.colors.feedback.negative[500],
  disabled: theme.colors.neutral.grayStrongDark[50],
} as const;

function stateKey(disabled?: boolean, error?: boolean) {
  if (disabled) return 'disabled';
  if (error) return 'error';
  return 'default';
}

export const iconSx = (opts: {
  disabled?: boolean;
  error?: boolean;
  size?: string;
}): SxProps<Theme> => {
  const colorKey = stateKey(opts.disabled, opts.error);

  return {
    color: iconColorMap[colorKey],
    maxWidth: opts.size ?? '1.125rem',
    maxHeight: opts.size ?? '1.125rem',
  };
};
