import type { SxProps, Theme } from '@mui/material';

const fontSizeMap = {
  small: '0.75rem',
  medium: '1rem',
  large: '1.25rem',
} as const;

const borderColorMap = {
  default: 'var(--color-neutral-gray-soft-100)',
  error: 'var(--color-feedback-negative-500)',
  disabled: 'var(--color-neutral-gray-strong-50)',
} as const;

const borderHoverMap = {
  default: 'var(--color-brand-primary-500)',
  error: 'var(--color-feedback-negative-500)',
  disabled: '',
} as const;

const borderFocusMap = {
  default: 'var(--color-brand-primary-100)',
  error: 'var(--color-feedback-negative-100)',
  disabled: 'var(--color-neutral-gray-strong-50)',
} as const;

const mouseFocusMap = {
  default: 'var(--color-brand-primary-500)',
  error: 'var(--color-feedback-negative-500)',
} as const;

function stateKey(disabled?: boolean, error?: boolean) {
  if (disabled) return 'disabled';
  if (error) return 'error';
  return 'default';
}

export const selectSx = (opts: {
  disabled?: boolean;
  error?: boolean;
  keyboardFocus?: boolean;
}): SxProps<Theme> => {
  const key = stateKey(opts.disabled, opts.error);
  const keyMouse = opts.error ? 'error' : 'default';
  return {
    width: '23.188rem',
    borderRadius: 0,
    m: '0.875rem 0',
    p: '0.85rem 1rem',
    border: '1px solid #e0e6e7',
    '@media(max-width:600px)': { maxWidth: '18rem' },
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: borderColorMap[key],
      borderWidth: '1px',
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: borderHoverMap[key],
    },
    '&.keyboard-focus .MuiOutlinedInput-notchedOutline': {
      borderColor: borderFocusMap[key],
      borderWidth: key === 'disabled' ? '1px' : '4px',
    },
    '&.mouse-focus.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: mouseFocusMap[keyMouse],
      borderWidth: '1px',
    },
    ...(opts.disabled && {
      backgroundColor: 'var(--color-neutral-gray-strong-25)',
      color: 'var(--color-neutral-gray-strong-50)',
      cursor: 'not-allowed',
    }),
  };
};

export const textSx = (opts: {
  disabled?: boolean;
  error?: boolean;
  size?: keyof typeof fontSizeMap;
}): SxProps<Theme> => {
  const base: any = {};
  if (opts.size) base.fontSize = fontSizeMap[opts.size];
  if (opts.disabled) return { color: 'var(--color-neutral-gray-strong-50)', ...base };
  if (opts.error) return { color: 'var(--color-feedback-negative-500)', ...base };
  return { color: 'var(--color-neutral-gray-strong-700)', ...base };
};

export const iconSx = (opts: {
  disabled?: boolean;
  error?: boolean;
}): SxProps<Theme> => {
  if (opts.disabled) return { color: 'var(--color-neutral-gray-strong-50)' };
  if (opts.error) return { color: 'var(--color-feedback-negative-500)' };
  return {};
};