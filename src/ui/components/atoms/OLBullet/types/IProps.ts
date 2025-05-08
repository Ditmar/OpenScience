import React from 'react';

export interface IProps {
  shape?: 'square' | 'rounded' | 'circle';
  size?: 'sm' | 'md' | 'lg';
  active?: boolean;
}
