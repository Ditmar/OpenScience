import type { SxProps, Theme } from '@mui/material';
import { theme } from '../../../../globals/theme';

const borderRadiusMap = {
  normal: '0',
  radius: '0.25rem',
} as const;

const defaultColorMap = {
  white: theme.colors.neutral.grayStrongDark[500],
  black: theme.colors.neutral.grayStrongDark[500],
  primary: theme.colors.brand.primary[500],
  secondary: theme.colors.brand.secondary[500],
  tertiary: theme.colors.brand.tertiary[500],
  error: theme.colors.feedback.negative[500],
} as const;

const softColorMap = {
  white: theme.colors.neutral.grayStrongDark[400],
  black: theme.colors.neutral.grayStrongDark[400],
  primary: theme.colors.brand.primary[400],
  secondary: theme.colors.brand.secondary[400],
  tertiary: theme.colors.brand.tertiary[400],
  error: theme.colors.feedback.negative[400],
} as const;

const extraSoftColorMap = {
  white: theme.colors.neutral.graySoft[100],
  black: theme.colors.neutral.graySoft[100],
  primary: theme.colors.brand.primary[100],
  secondary: theme.colors.brand.secondary[100],
  tertiary: theme.colors.brand.tertiary[100],
  error: theme.colors.feedback.negative[100],
} as const;

const ultraSoftColorMap = {
  white: theme.colors.neutral.graySoft[50],
  black: theme.colors.neutral.graySoft[50],
  primary: theme.colors.brand.primary[50],
  secondary: theme.colors.brand.secondary[50],
  tertiary: theme.colors.brand.tertiary[50],
  error: theme.colors.feedback.negative[50],
} as const;

function stateKey<T extends keyof typeof defaultColorMap>(colorVariant: T | undefined, error?: boolean): keyof typeof defaultColorMap {
  if (error) return 'error';
  return colorVariant ?? 'primary';
}

export const menuPropsSx = (opts: {
  error?: boolean;
  size?: 'small' | 'medium' | 'large';
  borderRadiusMenu?: 'normal' | 'radius';
  colorVariant?: 'primary' | 'secondary' | 'tertiary' | 'white' | 'black';
}): SxProps<Theme> => {
  const ITEM_HEIGHT = 3.15;
  const CANT_ITEMS = 4;
  const borderRadius = borderRadiusMap[opts.borderRadiusMenu ?? 'normal'];
  const colorKey = stateKey(opts.colorVariant, opts.error);

  return {
    maxHeight: `${(ITEM_HEIGHT * CANT_ITEMS) + 3.05}rem`,
    overflowY: "auto",
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: extraSoftColorMap[colorKey],
    borderRadius,
    padding: '0',
    '&::-webkit-scrollbar': {
      width: '0.313rem',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: defaultColorMap[colorKey],
      borderRadius,
      transition: 'all 0.4s',
    },
    '&::-webkit-scrollbar-thumb:hover': {
      backgroundColor: softColorMap[colorKey],
    },
    '&::-webkit-scrollbar-track': {
      backgroundColor: ultraSoftColorMap[colorKey],
      borderTopRightRadius: borderRadius,
      borderBottomRightRadius: borderRadius,
    },
  };
};

export const paperPropsSx = (opts: {
  borderRadiusMenu?: 'normal' | 'radius';
}): SxProps<Theme> => {
  const borderRadius = borderRadiusMap[opts.borderRadiusMenu ?? 'normal'];

  return {
    borderRadius,
  };
};
