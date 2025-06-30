import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import type { Theme } from '@mui/material/styles';
import type { IProps } from './types/IProps';

const backgroundMap: Record<NonNullable<IProps['color']>, keyof Theme['palette']['pillpalette']> = {
  'neutral-dark': 'dark',
  'neutral-light': 'light',
  'brand-primary': 'primary',
  'brand-secondary': 'secondary',
  'brand-tertiary': 'tertiary',
  'feedback-positive': 'positive',
  'feedback-negative': 'negative',
  'feedback-warning': 'warning',
  'read-only-disabled': 'disabled',
};

const colorMap: Record<NonNullable<IProps['color']>, keyof Theme['palette']['pillpalette']> = {
  'neutral-dark': 'dark_soft',
  'neutral-light': 'light',
  'brand-primary': 'stroke_primary_soft',
  'brand-secondary': 'secondary_soft',
  'brand-tertiary': 'tertiary_soft',
  'feedback-positive': 'positive_soft',
  'feedback-negative': 'negative_soft',
  'feedback-warning': 'warning_soft',
  'read-only-disabled': 'stroke_disabled',
};

const textMap: Record<NonNullable<IProps['color']>, keyof Theme['palette']['pillpalette']> = {
  'neutral-dark': 'light',
  'neutral-light': 'dark',
  'brand-primary': 'light',
  'brand-secondary': 'light',
  'brand-tertiary': 'light',
  'feedback-positive': 'light',
  'feedback-negative': 'light',
  'feedback-warning': 'light',
  'read-only-disabled': 'stroke_disabled',
};

const borderMap: Record<
  NonNullable<IProps['color']>,
  { soft: keyof Theme['palette']['pillpalette']; strong: keyof Theme['palette']['pillpalette'] }
> = {
  'neutral-dark': { soft: 'stroke_dark_soft', strong: 'stroke_dark' },
  'neutral-light': { soft: 'stroke_dark_soft', strong: 'stroke_dark' },
  'brand-primary': { soft: 'stroke_primary_soft', strong: 'stroke_primary' },
  'brand-secondary': { soft: 'stroke_secondary_soft', strong: 'stroke_secondary' },
  'brand-tertiary': { soft: 'stroke_tertiary_soft', strong: 'stroke_tertiary' },
  'feedback-positive': { soft: 'stroke_positive_soft', strong: 'stroke_positive' },
  'feedback-negative': { soft: 'stroke_negative_soft', strong: 'stroke_negative' },
  'feedback-warning': { soft: 'stroke_warning_soft', strong: 'stroke_warning' },
  'read-only-disabled': { soft: 'stroke_disabled', strong: 'stroke_disabled' },
};

export const PillRoot = styled(Box, {
  shouldForwardProp: (prop) =>
    !['color', 'variant', 'size', 'rounded', 'shadow', 'stroke', 'iconPosition'].includes(
      prop as string,
    ),
})<IProps>(({
  theme,
  color = 'neutral-light',
  variant = 'filled',
  size = 'md',
  rounded = 'r_md',
  shadow,
  stroke,
  iconPosition,
}) => {
  const palette = theme.palette.pillpalette;

  const heightMap = {
    sm: theme.spacing(3),
    md: theme.spacing(3.5),
    lg: theme.spacing(4),
  };

  const borderRadiusMap = {
    r_none: 0,
    r_md: theme.spacing(1),
    r_full: theme.spacing(99),
  };

  const fontSizeMap = {
    sm: '0.75rem',
    md: '0.875rem',
    lg: '1rem',
  };

  let iconSpacing = {};
  if (iconPosition === 'left') {
    iconSpacing = { marginRight: theme.spacing(0.5) };
  } else if (iconPosition === 'right') {
    iconSpacing = { marginLeft: theme.spacing(0.5) };
  }

  return {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: theme.typography.textPoppins.fontFamily,
    fontWeight: 400,
    letterSpacing: 0,
    textAlign: 'center',
    lineHeight: 1,
    fontSize: fontSizeMap[size],
    height: heightMap[size],
    minWidth: heightMap[size],
    padding: theme.spacing(0, 1),
    borderRadius: borderRadiusMap[rounded],
    boxShadow: shadow ? '0 0.125rem 0.25rem #00000029' : undefined,

    '& .pill__icon': {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '1em',
      width: '1em',
      ...iconSpacing,
      '& svg, & span': {
        display: 'block',
        width: '100%',
        height: '100%',
      },
    },

    ...(variant === 'filled' && {
      backgroundColor: palette[backgroundMap[color]],
      color: palette[textMap[color]],
    }),
    ...(variant === 'soft' && {
      backgroundColor: palette[colorMap[color]],
      color: palette[backgroundMap[color]],
    }),
    ...(variant === 'outline' && {
      backgroundColor: 'transparent',
      color: palette[backgroundMap[color]],
    }),
    ...(stroke && {
      border: `0.063rem solid ${
        palette[borderMap[color][stroke === 'border-soft' ? 'soft' : 'strong']]
      }`,
    }),
  };
});
