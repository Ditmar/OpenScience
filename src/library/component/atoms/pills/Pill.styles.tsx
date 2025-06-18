import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import type { CSSProperties } from 'react';
import type { TypographyVariants } from '@mui/material/styles';
import type { IProps } from './types/IProps';

type PillColorKey = NonNullable<IProps['color']>;

type PillColorMapStyles = CSSProperties;

interface IPillStyleProps {
  color?: IProps['color'];
  variant?: IProps['variant'];
  size?: IProps['size'];
  rounded?: IProps['rounded'];
  shadow?: boolean;
  stroke?: IProps['stroke'];
  iconPosition?: IProps['iconPosition'];
}

export const StyledPill = styled(Box)<IPillStyleProps>(({
  theme: currentTheme,
  color,
  variant,
  size,
  rounded,
  shadow,
  stroke,
}) => {
  const theme = currentTheme;

  const { olpalette } = theme.palette;
  const {
    typography,
    spacing,
    shadows,
    transitions,
    shape,
  }: {
    typography: TypographyVariants;
    spacing: typeof theme.spacing;
    shadows: typeof theme.shadows;
    transitions: typeof theme.transitions;
    shape: typeof theme.shape;
  } = theme;

  const sizeMap = {
    sm: {
      fontSize: typography.textSm.fontSize,
      height: spacing(3.90625),
    },
    md: {
      fontSize: typography.textMd.fontSize,
      height: spacing(4.375),
    },
    lg: {
      fontSize: typography.textLg.fontSize,
      height: spacing(4.84375),
    },
  };

  const filledColorMap: Record<PillColorKey, PillColorMapStyles> = {
    'neutral-dark': { backgroundColor: olpalette.dark, color: olpalette.light },
    'neutral-light': { backgroundColor: olpalette.light, color: olpalette.dark },
    'brand-primary': { backgroundColor: olpalette.primary, color: olpalette.light },
    'brand-secondary': { backgroundColor: olpalette.secondary, color: olpalette.light },
    'brand-tertiary': { backgroundColor: olpalette.tertiary, color: olpalette.light },
    'feedback-positive': { backgroundColor: olpalette.positive, color: olpalette.light },
    'feedback-negative': { backgroundColor: olpalette.negative, color: olpalette.light },
    'feedback-warning': { backgroundColor: olpalette.warning, color: olpalette.light },
    'read-only-disabled': { backgroundColor: olpalette.disabled, color: olpalette.stroke_disabled },
  };

  const outlineColorMap: Record<PillColorKey, PillColorMapStyles> = {
    'neutral-dark': { color: olpalette.dark, border: `1px solid ${olpalette.dark}` },
    'neutral-light': { color: olpalette.dark, border: `1px solid ${olpalette.dark}` },
    'brand-primary': { color: olpalette.primary, border: `1px solid ${olpalette.stroke_primary}` },
    'brand-secondary': {
      color: olpalette.secondary,
      border: `1px solid ${olpalette.stroke_secondary}`,
    },
    'brand-tertiary': {
      color: olpalette.tertiary,
      border: `1px solid ${olpalette.stroke_tertiary}`,
    },
    'feedback-positive': {
      color: olpalette.positive,
      border: `1px solid ${olpalette.stroke_positive}`,
    },
    'feedback-negative': {
      color: olpalette.negative,
      border: `1px solid ${olpalette.stroke_negative}`,
    },
    'feedback-warning': {
      color: olpalette.warning,
      border: `1px solid ${olpalette.stroke_warning}`,
    },
    'read-only-disabled': {
      color: olpalette.disabled,
      border: `1px solid ${olpalette.stroke_disabled}`,
    },
  };

  const softColorMap: Record<PillColorKey, PillColorMapStyles> = {
    'neutral-dark': { backgroundColor: olpalette.dark_soft, color: olpalette.dark },
    'neutral-light': { backgroundColor: olpalette.dark_soft, color: olpalette.dark },
    'brand-primary': { backgroundColor: olpalette.stroke_primary_soft, color: olpalette.primary },
    'brand-secondary': { backgroundColor: olpalette.secondary_soft, color: olpalette.secondary },
    'brand-tertiary': { backgroundColor: olpalette.tertiary_soft, color: olpalette.tertiary },
    'feedback-positive': { backgroundColor: olpalette.positive_soft, color: olpalette.positive },
    'feedback-negative': { backgroundColor: olpalette.negative_soft, color: olpalette.negative },
    'feedback-warning': { backgroundColor: olpalette.warning_soft, color: olpalette.warning },
    'read-only-disabled': { backgroundColor: olpalette.disabled, color: olpalette.stroke_disabled },
  };

  const rootStyles = {
    alignItems: 'center',
    display: 'inline-flex',
    fontFamily: typography.textPoppins.fontFamily ?? typography.fontFamily,
    fontWeight: typography.fontWeightRegular,
    justifyContent: 'center',
    letterSpacing: typography.body1.letterSpacing,
    padding: `${spacing(0.5)} ${spacing(1)}`,
    textAlign: 'center' as const,
    transition: transitions.create(['background-color', 'color', 'border', 'box-shadow'], {
      duration: transitions.duration.short,
    }),
    ...sizeMap[size ?? 'md'],
  };

  const variantStyles = (): PillColorMapStyles => {
    const effectiveColor = color ?? 'neutral-dark';
    switch (variant) {
      case 'filled':
        return {
          ...filledColorMap[effectiveColor],
          border: '1px solid transparent',
        };
      case 'outline':
        return {
          backgroundColor: 'transparent',
          ...outlineColorMap[effectiveColor],
        };
      case 'soft':
        return {
          ...softColorMap[effectiveColor],
          border: '1px solid transparent',
        };
      default:
        return {};
    }
  };

  const strokeStyles = (): PillColorMapStyles => {
    if (stroke === 'border-soft' && color === 'brand-primary') {
      return { border: `1px solid ${olpalette.stroke_primary_soft}` };
    }
    if (stroke === 'border-strong' && color === 'brand-primary') {
      return { border: `1px solid ${olpalette.stroke_primary}` };
    }
    return {};
  };

  const roundedStyles = (): PillColorMapStyles => {
    switch (rounded) {
      case 'r_none':
        return { borderRadius: 0 };
      case 'r_md':
        return { borderRadius: shape.borderRadius || '0.3125rem' };
      case 'r_full':
        return { borderRadius: '624.938rem' };
      default:
        return {};
    }
  };

  return {
    ...rootStyles,
    ...variantStyles(),
    ...strokeStyles(),
    ...roundedStyles(),
    ...(shadow && { boxShadow: shadows[1] || olpalette.shadow_sm }),
  };
});

export const StyledIconWrapper = styled(Box)<{ iconPosition?: 'left' | 'right' }>(({
  theme: currentTheme,
  iconPosition,
}) => {
  const theme = currentTheme;
  const { spacing } = theme;

  return {
    alignItems: 'center',
    display: 'inline-flex',
    height: '1em',
    justifyContent: 'center',
    width: '1em',
    ...(iconPosition === 'left' && {
      marginRight: spacing(0.75),
      marginLeft: 0,
    }),
    ...(iconPosition === 'right' && {
      marginLeft: spacing(0.75),
      marginRight: 0,
    }),
    '& svg': {
      fontSize: 'inherit',
      width: '1em',
      height: '1em',
    },
  };
});

export const StyledContent = styled(Box)<{ iconPosition?: 'left' | 'right' }>(
  ({ iconPosition }) => ({
    ...(iconPosition === 'right' && {
      order: -1,
    }),
  }),
);
