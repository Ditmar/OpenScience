import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import type { OLItemProps } from './types/IProps';

export const OLItemRoot = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'shape' && prop !== 'size' && prop !== 'active',
})<Omit<OLItemProps, 'value'>>(({ theme, shape, size, active }) => ({
  alignItems: 'center',
  background: theme.palette.olitemPalette.stroke_Primary,
  color: theme.palette.olitemPalette.text_light,
  display: 'flex',
  fontFamily: theme.typography.textPoppins.fontFamily,
  fontWeight: theme.typography.fontWeightRegular,
  justifyContent: 'center',

  ...(shape === 'square' && {
    borderRadius: '0',
  }),
  ...(shape === 'rounded' && {
    borderRadius: (theme.shape.borderRadius as number) + 4,
  }),
  ...(shape === 'circle' && {
    borderRadius: '50%',
  }),

  ...(size === 'sm' && {
    fontSize: theme.typography.textSm.fontSize,
    height: theme.spacing(5.25),
    width: theme.spacing(5.25),
  }),
  ...(size === 'md' && {
    fontSize: theme.typography.textMd.fontSize,
    height: theme.spacing(5.5),
    width: theme.spacing(5.5),
  }),
  ...(size === 'lg' && {
    fontSize: theme.typography.textLg.fontSize,
    height: theme.spacing(6),
    width: theme.spacing(6),
  }),

  ...(active && {
    boxShadow: `0 0 0 ${theme.spacing(0.5)} ${theme.palette.olitemPalette.stroke_primary_Soft}`,
  }),
}));
