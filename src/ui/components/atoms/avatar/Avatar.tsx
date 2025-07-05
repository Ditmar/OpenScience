import { styled } from '@mui/material/styles';
import { Avatar as MUIAvatar } from '@mui/material';
import type { AvatarProps } from './types/IProps';

const StyledAvatar = styled(MUIAvatar)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  width: 24,
  height: 24,
}));

function Avatar({ src, alt = 'Avatar', variant = 'rounded', className }: AvatarProps) {
  return <StyledAvatar src={src} alt={alt} variant={variant} className={className} />;
}

export default Avatar;
