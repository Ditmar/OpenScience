import React from 'react';

export interface AtomTextProps {
  children: React.ReactNode;
  color?: 'paragraph_dark' | 'icon_text' | 'light';
  size?: 'sm' | 'md' | 'lg';
  align?: 'left' | 'center' | 'right';
  fontWeight?: number;
  gutterBottom?: boolean;
}
