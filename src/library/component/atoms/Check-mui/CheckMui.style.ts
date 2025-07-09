import { styled } from '@mui/material/styles';
import Checkbox from '@mui/material/Checkbox';
import type { IProps } from './types/IProps';

export const StyledCheckbox = styled(Checkbox, {
  shouldForwardProp: (prop) => prop !== 'variant',
})<Pick<IProps, 'variant'>>(({ theme, variant = 'brand-primary' }) => {
  const palette = theme.palette.checkmuipalette;

  const variantMap: Record<NonNullable<IProps['variant']>, keyof typeof palette> = {
    'neutral-dark': 'stroke_dark',
    'neutral-light': 'stroke_light',
    'brand-primary': 'stroke_primary',
    'brand-secondary': 'stroke_secondary',
    'feedback-positive': 'stroke_positive',
    'feedback-negative': 'stroke_negative',
  };

  const strokeVariant = variantMap[variant];

  return {
    color: palette[strokeVariant],

    '&.Mui-checked': {
      color: palette[strokeVariant],
    },

    '&.Mui-disabled': {
      color: palette.stroke_disabled,
    },
  };
});
