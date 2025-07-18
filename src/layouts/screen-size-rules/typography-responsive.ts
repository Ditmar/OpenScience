import type { TypographyVariantsOptions } from '@mui/material/styles';
import { breakpointValues } from './breakpoints';

const baseSizes = {
  h1: 1.5,
  h2: 1.25,
  h3: 1,
  h4: 0.875,
  h5: 0.75,
  h6: 0.625,
  body1: 0.875,
  body2: 0.75,
  subtitle1: 0.875,
  subtitle2: 0.75,
  button: 0.75,
  caption: 0.625,
  overline: 0.625,
} as const;

export function generateResponsiveTypography(): TypographyVariantsOptions {
  const variants: TypographyVariantsOptions = {};

  const sortedBreakpoints = Object.entries(breakpointValues.values).sort(([, a], [, b]) => a - b);

  (Object.keys(baseSizes) as (keyof typeof baseSizes)[]).forEach((variant) => {
    const baseSize = baseSizes[variant];

    const styles: Record<string, string | Record<string, string>> = {
      fontSize: `${baseSize.toFixed(3)}rem`,
    };

    sortedBreakpoints.forEach(([, minWidth], index) => {
      if (minWidth > 0) {
        const mediaQuery = `@media (min-width: ${minWidth.toString()}px)`;
        styles[mediaQuery] = {
          fontSize: `${(baseSize + 0.25 * index).toFixed(3)}rem`,
        };
      }
    });

    if (variant === 'button') styles.textTransform = 'none';
    if (variant === 'overline') styles.textTransform = 'uppercase';

    variants[variant] = styles;
  });

  return variants;
}
