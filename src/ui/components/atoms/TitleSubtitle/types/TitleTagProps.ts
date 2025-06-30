import React from 'react';

export interface TitleTagProps {
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
  className?: string;
  children: React.ReactNode;
}
