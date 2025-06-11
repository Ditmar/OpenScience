import React from 'react';

export interface TextProps {
  text: string;
  bold?: 'bold' | 'regular';
  size?: 'small' | 'medium' | 'large';
  style?: React.CSSProperties;
}
