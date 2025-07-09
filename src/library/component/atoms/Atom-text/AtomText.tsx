import React from 'react';
import type { AtomTextProps } from './types/IProps';
import { AtomTextRoot } from './AtomText.style';

function AtomText({ children, color, size, align, fontWeight, gutterBottom }: AtomTextProps) {
  return (
    <AtomTextRoot
      color={color}
      size={size}
      align={align}
      fontWeight={fontWeight}
      gutterBottom={gutterBottom}
    >
      {children}
    </AtomTextRoot>
  );
}

export default AtomText;
