import React from 'react';

export type HeadingLevel = 'h1' | 'h2' | 'h3';

export type FontWeight = 'regular' | 'medium' | 'semibold';

export type FontStyle = 'sans' | 'serif' | 'italic' | 'monospace';

export interface IHeadingProps {
  level?: HeadingLevel;
  weight?: FontWeight;
  style?: FontStyle;
  children: React.ReactNode;
  className?: string;
}
