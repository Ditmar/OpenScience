import type { TypographyVariantsOptions } from '@mui/material/styles';
import { breakpoints } from './breakpoints';

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

  (Object.keys(baseSizes) as (keyof typeof baseSizes)[]).forEach((variant) => {
    const baseSize = baseSizes[variant];

    const styles: Record<string, string | Record<string, string>> = {
      fontSize: `${baseSize.toFixed(3)}rem`,
    };

    Object.values(breakpoints).forEach((minWidth, i) => {
      const minWidthStr = minWidth.toString();

      styles[`@media (min-width:${minWidthStr}px)`] = {
        fontSize: `${(baseSize + 0.25 * i).toFixed(3)}rem`,
      };
    });

    if (variant === 'button') styles.textTransform = 'none';
    if (variant === 'overline') styles.textTransform = 'uppercase';

    variants[variant] = styles;
  });

  return variants;
}
