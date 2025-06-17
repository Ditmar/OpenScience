import { Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';
import type { AvatarItemProps } from './types/IProps';

interface StyledAvatarProps {
  componentSize: AvatarItemProps['size'];
  componentShape: AvatarItemProps['shape'];
}

export const StyledAvatar = styled(Avatar)<StyledAvatarProps>(({
  theme,
  componentSize,
  componentShape,
}) => {
  let width = 28;
  let height = 28;

  if (componentSize === 'small') {
    width = 25;
    height = 25;
  } else if (componentSize === 'large') {
    width = 31;
    height = 31;
  }

  const borderRadius = componentShape === 'rounded' ? '50%' : '8px';

  const backgroundColor = '#FFE68F';

  const initialsColor = theme.palette.getContrastText(backgroundColor);

  let fontSize = theme.typography.pxToRem(16);
  if (componentSize === 'small') {
    fontSize = theme.typography.pxToRem(12);
  } else if (componentSize === 'large') {
    fontSize = theme.typography.pxToRem(20);
  }

  return {
    width,
    height,
    borderRadius,
    backgroundColor,
    color: initialsColor,
    fontSize,
    '& img': {
      objectFit: 'cover',
    },
  };
});
