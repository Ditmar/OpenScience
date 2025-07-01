import type { SxProps, Theme } from '@mui/material';

const fontSizeSelectMap = {
  small: '1rem',
  medium: '1.125rem',
  large: '1.25rem',
} as const;

const borderColorMap = {
  default: 'var(--color-neutral-gray-soft-100)',
  error: 'var(--color-feedback-negative-500)',
  disabled: 'var(--color-neutral-gray-strong-50)',
} as const;

const borderRadiusMap = {
  normal: '0',
  semi: '0.5rem',
  circle: '3.125rem',
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

function stateKey(disabled?: boolean, error?: boolean, borderRadius?: string, size?: string) {
  if (disabled) return 'disabled';
  if (error) return 'error';
  switch (borderRadius) {
    case 'normal':
      return 'normal';
    case 'semi':
      return 'semi';
    case 'circle':
      return 'circle';
  }
  switch(size) {
    case 'small':
      return 'small';
    case 'medium':
      return 'medium';
    case 'large':
      return 'large';
  }

  return 'default';
}

export const selectSx = (opts: {
  disabled?: boolean;
  error?: boolean;
  borderRadius?: 'normal' | 'semi' | 'circle';
  keyboardFocus?: boolean;
  size?: 'small' | 'medium' | 'large';
}): SxProps<Theme> => {
  const key = stateKey(opts.disabled, opts.error, opts.borderRadius, opts.size);
  const keyMouse = opts.error ? 'error' : 'default';
  return {
    width: '23.188rem',
    borderRadius: borderRadiusMap[key as keyof typeof borderRadiusMap] ?? borderRadiusMap.normal,
    fontWeight: '400',
    fontFamily: 'Poppins-Light, sans-serif',
    fontSize: fontSizeSelectMap[key as keyof typeof fontSizeSelectMap] ?? fontSizeSelectMap.medium,
    border: '1px solid #e0e6e7',
    '@media(max-width:600px)': { maxWidth: '18rem' },
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: borderColorMap[
        key === 'error' || key === 'disabled' ? key : 'default'
      ],
      borderWidth: '1px',
    },
    '& .MuiInputBase-input': {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      p: '0.938rem 1.125rem 0.938rem 0.875rem',
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: borderHoverMap[
        key === 'error' || key === 'disabled' ? key : 'default'
      ],
    },
    '&.keyboard-focus .MuiOutlinedInput-notchedOutline': {
      borderColor: borderFocusMap[
        key === 'error' || key === 'disabled' ? key : 'default'
      ],
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