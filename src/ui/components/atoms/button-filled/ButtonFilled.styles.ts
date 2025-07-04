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
  black: theme.colors.neutral.grayStrongDark[800],
  primary: theme.colors.brand.primary[500],
  secondary: theme.colors.brand.secondary[500],
  tertiary: theme.colors.brand.tertiary[500],
  positive: theme.colors.feedback.positive[500],
  negative: theme.colors.feedback.negative[500],
  warning: theme.colors.feedback.warning[500],
} as const;

const buttonColorExtraSoftMap = {
  white: theme.colors.neutral.graySoft[50],
  black: null,
  primary: theme.colors.brand.primary[50],
  secondary: theme.colors.brand.secondary[50],
  tertiary: theme.colors.brand.tertiary[50],
  positive: theme.colors.feedback.positive[50],
  negative: theme.colors.feedback.negative[50],
  warning: theme.colors.feedback.warning[50],
} as const;

const buttonColorSoftMap = {
  white: theme.colors.neutral.graySoft[100],
  black: null,
  primary: theme.colors.brand.primary[100],
  secondary: theme.colors.brand.secondary[100],
  tertiary: theme.colors.brand.tertiary[100],
  positive: theme.colors.feedback.positive[100],
  negative: theme.colors.feedback.negative[100],
  warning: theme.colors.feedback.warning[100],
} as const;

const buttonColorDarkMap = {
  white: null,
  black: theme.colors.neutral.grayStrongDark[800],
  primary: theme.colors.brand.primary[600],
  secondary: theme.colors.brand.secondary[600],
  tertiary: theme.colors.brand.tertiary[600],
  positive: theme.colors.feedback.positive[600],
  negative: theme.colors.feedback.negative[600],
  warning: theme.colors.feedback.warning[600],
} as const;

function stateKey(
  colorVariant?: keyof typeof buttonColorDefaultMap,
): keyof typeof buttonColorDefaultMap {
  if (colorVariant) return colorVariant;
  return 'primary';
}

function resolveButtonColor(
  colorVariant: keyof typeof buttonColorDefaultMap,
  dark?: boolean,
): string | null {
  if (colorVariant === 'white') {
    return theme.colors.neutral.grayStrongDark[800];
  }

  if (!dark) {
    return buttonColorDefaultMap[colorVariant];
  }

  return buttonColorDarkMap[colorVariant];
}

export const buttonSx = (opts: {
  borderRadius?: keyof typeof borderRadiusMap;
  colorVariant?: keyof typeof buttonColorDefaultMap;
  dark?: boolean;
  disabled?: boolean;
  size?: keyof typeof fontSizeMap;
  buttonVariant?: 'default' | 'ghost' | 'light' | 'soft' | 'outline';
}): SxProps<Theme> => {
  const colorKey = stateKey(opts.colorVariant);

  const borderRadius = borderRadiusMap[opts.borderRadius ?? 'normal'];
  const fontSize = fontSizeMap[opts.size ?? 'medium'];
  const iconSize = iconSizeMap[opts.size ?? 'medium'];

  const buttonVariant = opts.buttonVariant ?? 'solid';

  const baseStyles: SxProps<Theme> = {
    borderRadius,
    fontSize,
    fontWeight: '400',
    textTransform: 'none',
    backgroundColor: !opts.dark ? buttonColorDefaultMap[colorKey] : buttonColorDarkMap[colorKey],
    color:
      opts.colorVariant !== 'white'
        ? theme.colors.neutral.white[900]
        : theme.colors.neutral.grayStrongDark[800],
    cursor: opts.disabled ? 'not-allowed' : 'pointer',
    svg: {
      fontSize: iconSize,
    },
    padding: '0.625rem 1.188rem',
    '&.Mui-disabled': {
      backgroundColor: theme.colors.neutral.grayStrongDark[25],
      borderColor: theme.colors.neutral.grayStrongDark[50],
      color: theme.colors.neutral.grayStrongDark[50],
    },
  };

  if (buttonVariant === 'default') {
    return {
      ...baseStyles,
    };
  }

  if (buttonVariant === 'ghost') {
    return {
      ...baseStyles,
      background: 'none',
      color: resolveButtonColor(colorKey, opts.dark),
      '&.Mui-disabled': {
        borderColor: 'none',
      },
    };
  }

  if (buttonVariant === 'light') {
    return {
      ...baseStyles,
      backgroundColor: !opts.dark
        ? buttonColorExtraSoftMap[colorKey]
        : buttonColorDarkMap[colorKey],
      color: resolveButtonColor(colorKey, opts.dark),
      '&.Mui-disabled': {
        backgroundColor: theme.colors.neutral.grayStrongDark[25],
        borderColor: 'none',
      },
    };
  }

  if (buttonVariant === 'soft') {
    return {
      ...baseStyles,
      backgroundColor: !opts.dark
        ? buttonColorExtraSoftMap[colorKey]
        : buttonColorDarkMap[colorKey],
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: buttonColorSoftMap[colorKey],
      color: resolveButtonColor(colorKey, opts.dark),
      '&.Mui-disabled': {
        backgroundColor: theme.colors.neutral.grayStrongDark[25],
        borderColor: theme.colors.neutral.grayStrongDark[50],
      },
    };
  }

  if (buttonVariant === 'outline') {
    return {
      ...baseStyles,
      background: 'none',
      color: resolveButtonColor(colorKey, opts.dark),
      '&.Mui-disabled': {
        borderColor: theme.colors.neutral.grayStrongDark[50],
      },
    };
  }

  return baseStyles;
};
