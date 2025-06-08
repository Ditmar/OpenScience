import type { IProps } from './types/IProps';
import { lightTheme } from '../../../../style-library/themes/default';

export const getPillStyles = (props: IProps) => {
  const { olpalette } = lightTheme.palette;
  const isSoftVariant = props.variant === 'soft';
  const isOutlineVariant = props.variant === 'outline';

  return {
    root: {
      alignItems: 'center',
      display: 'inline-flex',
      fontFamily: 'Poppins-Light, sans-serif',
      fontWeight: 400,
      justifyContent: 'center',
      letterSpacing: 0,
      padding: '0.125rem 0.5rem',
      textAlign: 'center',
      transition: 'all 0.3s ease',

      ...(props.size === 'sm' && {
        fontSize: '0.875rem',
        height: '1.5625rem',
      }),
      ...(props.size === 'md' && {
        fontSize: '1rem',
        height: '1.75rem',
      }),
      ...(props.size === 'lg' && {
        fontSize: '1.125rem',
        height: '1.9375rem',
      }),

      ...(props.variant === 'filled' && {
        ...(props.color === 'neutral-dark' && {
          backgroundColor: olpalette.stroke_dark,
          color: olpalette.light,
        }),
        ...(props.color === 'neutral-light' && {
          backgroundColor: olpalette.light,
          color: olpalette.dark,
        }),
        ...(props.color === 'brand-primary' && {
          backgroundColor: olpalette.primary,
          color: olpalette.light,
        }),
        ...(props.color === 'brand-secondary' && {
          backgroundColor: olpalette.secondary,
          color: olpalette.light,
        }),
        ...(props.color === 'brand-tertiary' && {
          backgroundColor: olpalette.tertiary,
          color: olpalette.light,
        }),
        ...(props.color === 'feedback-positive' && {
          backgroundColor: olpalette.positive,
          color: olpalette.light,
        }),
        ...(props.color === 'feedback-negative' && {
          backgroundColor: olpalette.negative,
          color: olpalette.light,
        }),
        ...(props.color === 'feedback-warning' && {
          backgroundColor: olpalette.warning,
          color: olpalette.light,
        }),
        ...(props.color === 'read-only-disabled' && {
          backgroundColor: olpalette.disabled,
          color: olpalette.stroke_disabled,
        }),

        border: '1px solid transparent',
      }),

      ...(isOutlineVariant && {
        backgroundColor: 'transparent',
        ...(props.color === 'neutral-light' && {
          color: olpalette.dark,
          border: `1px solid ${olpalette.dark}`,
        }),
        ...(props.color === 'brand-primary' && {
          color: olpalette.primary,
          border: `1px solid ${olpalette.stroke_primary}`,
        }),
        ...(props.color === 'brand-secondary' && {
          color: olpalette.secondary,
          border: `1px solid ${olpalette.stroke_secondary}`,
        }),
        ...(props.color === 'brand-tertiary' && {
          color: olpalette.tertiary,
          border: `1px solid ${olpalette.stroke_tertiary}`,
        }),
        ...(props.color === 'feedback-positive' && {
          color: olpalette.positive,
          border: `1px solid ${olpalette.stroke_positive}`,
        }),
        ...(props.color === 'feedback-negative' && {
          color: olpalette.negative,
          border: `1px solid ${olpalette.stroke_negative}`,
        }),
        ...(props.color === 'feedback-warning' && {
          color: olpalette.warning,
          border: `1px solid ${olpalette.stroke_warning}`,
        }),
      }),

      ...(isSoftVariant && {
        ...(props.color === 'neutral-dark' && {
          backgroundColor: olpalette.dark_soft,
          color: olpalette.dark,
        }),
        ...(props.color === 'neutral-light' && {
          backgroundColor: olpalette.dark_soft,
          color: olpalette.dark,
        }),
        ...(props.color === 'brand-primary' && {
          backgroundColor: olpalette.stroke_primary_soft,
          color: olpalette.primary,
        }),
        ...(props.color === 'brand-secondary' && {
          backgroundColor: olpalette.secondary_soft,
          color: olpalette.secondary,
        }),
        ...(props.color === 'brand-tertiary' && {
          backgroundColor: olpalette.tertiary_soft,
          color: olpalette.tertiary,
        }),
        ...(props.color === 'feedback-positive' && {
          backgroundColor: olpalette.positive_soft,
          color: olpalette.positive,
        }),
        ...(props.color === 'feedback-negative' && {
          backgroundColor: olpalette.negative_soft,
          color: olpalette.negative,
        }),
        ...(props.color === 'feedback-warning' && {
          backgroundColor: olpalette.warning_soft,
          color: olpalette.warning,
        }),

        border: '1px solid transparent',
      }),

      ...(props.stroke === 'border-soft' && {
        ...(props.color === 'brand-primary' && {
          border: `1px solid ${olpalette.stroke_primary_soft}`,
        }),
      }),
      ...(props.stroke === 'border-strong' && {
        ...(props.color === 'brand-primary' && {
          border: `1px solid ${olpalette.stroke_primary}`,
        }),
      }),

      ...(props.shadow && {
        boxShadow: lightTheme.shadows[1],
      }),

      ...(props.rounded === 'r_none' && { borderRadius: 0 }),
      ...(props.rounded === 'r_md' && { borderRadius: '0.3125rem' }),
      ...(props.rounded === 'r_full' && { borderRadius: '624.938rem' }),
    },
    icon: {
      alignItems: 'center',
      display: 'inline-flex',
      height: '1em',
      justifyContent: 'center',
      width: '1em',
      ...(props.iconPosition === 'left' && {
        marginRight: '6px',
        marginLeft: 0,
      }),
      ...(props.iconPosition === 'right' && {
        marginLeft: '6px',
        marginRight: 0,
      }),
      '& svg': {
        fontSize: 'inherit',
        width: '1em',
        height: '1em',
      },
    },
    content: {
      ...(props.iconPosition === 'right' && {
        order: -1,
      }),
    },
  };
};
