import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import type { AvatarProps } from './types/IProps';

export const StyledAvatar = styled(Avatar, {
  shouldForwardProp: (prop) => prop !== 'size' && prop !== 'rounded',
})<AvatarProps>(({ theme, size = 'md', rounded = 'r_full' }) => {
  const heightMap = {
    sm: theme.spacing(3),
    md: theme.spacing(3.5),
    lg: theme.spacing(4),
  };

  const borderRadiusMap = {
    r_none: 0,
    r_md: theme.spacing(1),
    r_full: theme.spacing(99),
  };

  return {
    width: heightMap[size],
    height: heightMap[size],
    borderRadius: borderRadiusMap[rounded],
  };
});
