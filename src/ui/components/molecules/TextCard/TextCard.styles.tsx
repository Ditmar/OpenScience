import { Card } from '@mui/material';
import { styled, type Theme } from '@mui/material/styles';
import type { IProps, CardSizeVariant, CardShapeVariant } from './types/IProps';

interface StyledTextCardProps {
  isSelected: boolean;
  cardVariantColor: IProps['cardVariantColor'];
  sizeVariant: CardSizeVariant;
  shapeVariant: CardShapeVariant;
}

type PaletteColorKey = Exclude<IProps['cardVariantColor'], 'default' | undefined>;

const getBorderColor = (theme: Theme, selected: boolean, variant: IProps['cardVariantColor']) => {
  if (selected) {
    return theme.palette.primary.main;
  }

  if (variant === 'default' || !variant) {
    return theme.palette.grey[300];
  }

  const paletteColor = theme.palette[variant as PaletteColorKey];
  return paletteColor.main;
};

const getBackgroundColor = (theme: Theme, selected: boolean) => {
  if (selected) {
    return theme.palette.action.selected;
  }
  return theme.palette.background.paper;
};

const getHoverBorderColor = (
  theme: Theme,
  selected: boolean,
  variant: IProps['cardVariantColor'],
) => {
  if (selected) {
    return theme.palette.primary.dark;
  }

  if (variant === 'default' || !variant) {
    return theme.palette.grey[500];
  }

  const paletteColor = theme.palette[variant as PaletteColorKey];
  return paletteColor.dark;
};

export const StyledTextCard = styled(Card)<StyledTextCardProps>(({
  theme,
  isSelected,
  cardVariantColor,
  sizeVariant, // RECIBE sizeVariant
  shapeVariant, // RECIBE shapeVariant
}) => {
  const borderColor = getBorderColor(theme, isSelected, cardVariantColor);
  const backgroundColor = getBackgroundColor(theme, isSelected);
  const hoverBorderColor = getHoverBorderColor(theme, isSelected, cardVariantColor);

  return {
    display: 'flex',
    flexDirection: 'row',

    alignItems: 'flex-start',
    border: `1px solid ${borderColor}`,
    backgroundColor,

    boxShadow: isSelected ? theme.shadows[3] : theme.shadows[1],
    transition: theme.transitions.create(['border-color', 'background-color', 'box-shadow'], {
      duration: theme.transitions.duration.standard,
    }),
    cursor: 'pointer',
    '&:hover': {
      borderColor: hoverBorderColor,
      boxShadow: theme.shadows[6],
    },
    maxWidth: 400,
    width: '100%',
    ...(() => {
      switch (sizeVariant) {
        case 'large':
          return {
            padding: theme.spacing(4),
          };
        case 'small':
          return {
            padding: theme.spacing(1),
          };
        case 'medium':
        default:
          return {
            padding: theme.spacing(2),
          };
      }
    })(),

    ...(() => {
      switch (shapeVariant) {
        case 'sharp':
          return {
            borderRadius: 0,
          };
        case 'soft':
        default:
          return {
            borderRadius: theme.shape.borderRadius,
          };
      }
    })(),
  };
});
