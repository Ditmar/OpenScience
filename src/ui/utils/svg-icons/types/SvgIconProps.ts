import React from 'react';

export interface SvgIconProps {
  src: string;
  size?: string;
  className?: string;
  styles?: React.CSSProperties;
  ['data-testid']?: string;
}
