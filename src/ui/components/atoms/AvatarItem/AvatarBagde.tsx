import { Avatar } from '@mui/material';
import type { AvatarItemProps } from './types/IProps';
import './AvatarBagde.scss';

export function AvatarItem({
  shape = 'default',
  src,
  alt = '',
  size = 'medium',
  hidden = false,
}: AvatarItemProps) {
  if (hidden) return null;

  const sizeClass = `avatar-item--${size}`;
  const shapeClass = shape === 'rounded' ? 'avatar-item--rounded' : 'avatar-item--default';

  return <Avatar src={src} alt={alt} className={`avatar-item ${sizeClass} ${shapeClass}`} />;
}
