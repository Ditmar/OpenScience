import React from 'react';

export interface IProps {
  displayText: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  displayTag?: 'h1' | 'h2' | 'div';
  subtitleTag?: 'h2' | 'h3' | 'p';
  size?: 'lg' | 'xl';
  weight?: 'regular' | 'medium' | 'semibold';
  alignment?: 'left' | 'center' | 'right';
  spacing?: 'compact' | 'default' | 'spacious';
}
