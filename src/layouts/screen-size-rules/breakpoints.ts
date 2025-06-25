import tokens from '../../style-library/themes/tokens/tokens.json';

const mapKeys: Record<string, string> = {
  small: 'sm',
  medium: 'md',
  large: 'lg',
  extra_large: 'xl',
  small_mobile: 'small-mobile',
  small_mobile_large: 'small-mobile-large',
  large_tablet: 'large-tablet',
};

const raw: Record<string, string> = tokens.breakpoints;

export const breakpoints: Record<string, number> = Object.entries(raw).reduce<
  Record<string, number>
>((acc, [k, v]) => {
  const key = mapKeys[k] ?? k.replace(/_/g, '-');
  acc[key] = parseInt(v.replace('px', ''), 10);
  return acc;
}, {});

export const breakpointValues = {
  values: {
    xs: 0,
    sm: breakpoints.sm,
    md: breakpoints.md,
    lg: breakpoints.lg,
    xl: breakpoints.xl,
    'small-mobile': breakpoints['small-mobile'],
    'small-mobile-large': breakpoints['small-mobile-large'],
    'large-tablet': breakpoints['large-tablet'],
  },
};
