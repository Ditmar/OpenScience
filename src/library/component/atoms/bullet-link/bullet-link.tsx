import React from 'react';
import { Root, Bullet } from './bullet-link.style';
import type { BulletLinkProps } from './types/IProps';

export default function BulletLink({ text, href = '#', onClick }: BulletLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onClick?.();
  };

  return (
    <Root href={href} onClick={handleClick} data-testid="bullet-link">
      <Bullet />
      {text}
    </Root>
  );
}
