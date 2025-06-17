import { StyledAvatar } from './AvatarItem.styles';
import type { AvatarItemProps } from './types/IProps';

export function AvatarItem({
  shape = 'default',
  src,
  alt = '',
  size = 'medium',
  hidden = false,
}: AvatarItemProps) {
  if (hidden) return null;

  return (
    <StyledAvatar src={src} alt={alt} componentSize={size} componentShape={shape}>
      {!src && alt ? alt.charAt(0).toUpperCase() : ''}
    </StyledAvatar>
  );
}
