import React from 'react';
import type { AvatarProps } from './types/IProps';
import { StyledAvatar } from './Avatar.style';

export default function AtomAvatar({ size = 'md', rounded = 'r_full', alt, src }: AvatarProps) {
  return <StyledAvatar size={size} rounded={rounded} alt={alt} src={src} />;
}
