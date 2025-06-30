import React from 'react';

export interface SubtitleTagProps {
  tag: 'p' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
  children: React.ReactNode;
}
