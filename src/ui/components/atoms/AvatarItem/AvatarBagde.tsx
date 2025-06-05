import { Avatar } from '@mui/material';
import type { AvatarItemProps } from './types/IProps';
import './AvatarBagde.scss';

export function AvatarItem({ src, alt = '', size = 'medium', hidden = false }: AvatarItemProps) {
  if (hidden) return null;

  const sizeClass = `avatar-item--${size}`;

  return <Avatar src={src} alt={alt} className={`avatar-item ${sizeClass}`} />;
}
