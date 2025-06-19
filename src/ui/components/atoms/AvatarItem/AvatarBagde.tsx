import { Avatar } from '@mui/material';
import type { AvatarItemProps } from './types/IProps';
import style from './AvatarBagde.module.scss';

export function AvatarItem({
  shape = 'default',
  src,
  alt = '',
  size = 'medium',
  hidden = false,
}: AvatarItemProps) {
  if (hidden) return null;

  const sizeClass = style[`avatar-item--${size}`];
  const shapeClass =
    shape === 'rounded' ? style['avatar-item--rounded'] : style['avatar-item--default'];

  return (
    <Avatar src={src} alt={alt} className={`${style['avatar-item']} ${sizeClass} ${shapeClass}`} />
  );
}
