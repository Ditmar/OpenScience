import { styled, type Theme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import type { AtomTextProps } from './types/IProps';

const fontSizeMap = {
  sm: '1rem',
  md: '1.125rem',
  lg: '1.25rem',
};

const colorMap: Record<
  NonNullable<AtomTextProps['color']>,
  keyof Theme['palette']['checkmuipalette']
> = {
  paragraph_dark: 'paragraph_dark',
  icon_text: 'icon_text',
  light: 'light',
};

export const AtomTextRoot = styled(Typography, {
  shouldForwardProp: (prop) =>
    !['size', 'color', 'align', 'fontWeight', 'gutterBottom'].includes(prop as string),
})<AtomTextProps>(({
  theme,
  size = 'md',
  color = 'paragraph_dark',
  align = 'left',
  fontWeight,
}) => {
  const { checkmuipalette } = theme.palette;
  const { fontFamily } = theme.typography.textPoppins as { fontFamily: string };

  return {
    fontFamily,
    fontSize: fontSizeMap[size],
    color: checkmuipalette[colorMap[color]],
    textAlign: align,
    fontWeight: fontWeight ?? 400,
    marginBottom: 0,
  };
});
