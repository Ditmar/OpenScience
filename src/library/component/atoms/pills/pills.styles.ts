import { styled, alpha } from '@mui/material/styles';
import type { Theme } from '@mui/material';
import type { IProps } from './types/IProps';

// Define los keys para colores y variantes
type PillColor =
  | 'neutral-dark'
  | 'neutral-light'
  | 'brand-primary'
  | 'brand-secondary'
  | 'brand-tertiary'
  | 'feedback-positive'
  | 'feedback-negative'
  | 'feedback-warning'
  | 'read-only-disabled';

type PillVariant = 'filled' | 'outline' | 'soft';

type PillStroke = 'border-soft' | 'border-strong';

interface PillPalette {
  main: string;
  light: string;
  text: string;
  'border-soft': string;
  'border-strong': string;
}

// Refactoriza colorMap para devolver claves con guiones
const colorMap = (theme: Theme): Record<PillColor, PillPalette> => ({
  'neutral-dark': {
    main: theme.palette.grey[800],
    light: theme.palette.grey[100],
    text: theme.palette.common.white,
    'border-soft': alpha(theme.palette.grey[800], 0.2),
    'border-strong': theme.palette.grey[900],
  },
  'neutral-light': {
    main: theme.palette.grey[100],
    light: theme.palette.common.white,
    text: theme.palette.grey[900],
    'border-soft': alpha(theme.palette.grey[700], 0.2),
    'border-strong': theme.palette.grey[700],
  },
  'brand-primary': {
    main: theme.palette.primary.main,
    light: alpha(theme.palette.primary.main, 0.12),
    text: theme.palette.primary.contrastText,
    'border-soft': alpha(theme.palette.primary.main, 0.3),
    'border-strong': theme.palette.primary.dark,
  },
  'brand-secondary': {
    main: theme.palette.secondary.main,
    light: alpha(theme.palette.secondary.main, 0.12),
    text: theme.palette.secondary.contrastText,
    'border-soft': alpha(theme.palette.secondary.main, 0.3),
    'border-strong': theme.palette.secondary.dark,
  },
  'brand-tertiary': {
    main: theme.palette.info.main,
    light: alpha(theme.palette.info.main, 0.12),
    text: theme.palette.info.contrastText,
    'border-soft': alpha(theme.palette.info.main, 0.3),
    'border-strong': theme.palette.info.dark,
  },
  'feedback-positive': {
    main: theme.palette.success.main,
    light: alpha(theme.palette.success.main, 0.12),
    text: theme.palette.success.contrastText,
    'border-soft': alpha(theme.palette.success.main, 0.3),
    'border-strong': theme.palette.success.dark,
  },
  'feedback-negative': {
    main: theme.palette.error.main,
    light: alpha(theme.palette.error.main, 0.12),
    text: theme.palette.error.contrastText,
    'border-soft': alpha(theme.palette.error.main, 0.3),
    'border-strong': theme.palette.error.dark,
  },
  'feedback-warning': {
    main: theme.palette.warning.main,
    light: alpha(theme.palette.warning.main, 0.12),
    text: theme.palette.warning.contrastText,
    'border-soft': alpha(theme.palette.warning.main, 0.3),
    'border-strong': theme.palette.warning.dark,
  },
  'read-only-disabled': {
    main: theme.palette.action.disabledBackground,
    light: theme.palette.action.disabledBackground,
    text: theme.palette.action.disabled,
    'border-soft': alpha(theme.palette.action.disabled, 0.12),
    'border-strong': theme.palette.action.disabled,
  },
});

const sizeMap = (theme: Theme) => ({
  sm: {
    fontSize: theme.typography.pxToRem(14),
    minHeight: '1.5625rem',
    padding: '0.125rem 0.5rem',
  },
  md: {
    fontSize: theme.typography.pxToRem(16),
    minHeight: '1.75rem',
    padding: '0.125rem 0.5rem',
  },
  lg: {
    fontSize: theme.typography.pxToRem(18),
    minHeight: '1.9375rem',
    padding: '0.125rem 0.5rem',
  },
});

const radiusMap = () => ({
  r_none: 0,
  r_md: '0.3125rem',
  r_full: '624.938rem',
});

const getBackground = (variant: PillVariant, palette: PillPalette): string =>
  ({
    filled: palette.main,
    soft: palette.light,
    outline: 'transparent',
  })[variant];

const getTextColor = (variant: PillVariant, palette: PillPalette): string =>
  ({
    filled: palette.text,
    soft: palette.main,
    outline: palette.main,
  })[variant];

const getBorder = (
  variant: PillVariant,
  stroke: PillStroke | undefined,
  palette: PillPalette,
): string =>
  ({
    filled: stroke ? `1px solid ${palette[stroke]}` : 'none',
    soft: 'none',
    outline: `1px solid ${palette[stroke ?? 'border-soft']}`,
  })[variant];

export const PillRoot = styled('span', {
  shouldForwardProp: (prop) =>
    !['size', 'color', 'variant', 'rounded', 'shadow', 'stroke'].includes(prop as string),
})<IProps>(({
  theme,
  color = 'neutral-dark',
  variant = 'filled',
  size = 'md',
  rounded = 'r_md',
  shadow,
  stroke,
}) => {
  const palette = colorMap(theme)[color as PillColor];
  const sz = sizeMap(theme)[size];
  const radius = radiusMap()[rounded];

  return {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: theme.typography.fontFamily,
    fontWeight: 400,
    fontSize: sz.fontSize,
    minHeight: sz.minHeight,
    padding: sz.padding,
    borderRadius: radius,
    background: getBackground(variant as PillVariant, palette),
    color: getTextColor(variant as PillVariant, palette),
    border: getBorder(variant as PillVariant, stroke as PillStroke | undefined, palette),
    boxShadow: shadow ? '0 0.125rem 0.25rem #00000029' : undefined,
    textAlign: 'center',
    outline: 0,
    transition: theme.transitions.create(['background', 'color', 'box-shadow', 'border']),
    '&:focus-visible': {
      boxShadow: `0 0 0 2px ${theme.palette.primary.light}`,
    },
    cursor: 'default',
    userSelect: 'none',
    lineHeight: 1,
  };
});

export const PillIcon = styled('span')<{ position: 'left' | 'right' }>(({ position }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '1em',
  marginRight: position === 'left' ? '0.375rem' : undefined,
  marginLeft: position === 'right' ? '0.375rem' : undefined,
}));
