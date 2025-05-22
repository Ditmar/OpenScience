import React from 'react';

export interface InfoTooltipProps {
  content: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  size?: 'small' | 'medium' | 'large';
  className?: string;
  icon?: React.ReactNode;
  delay?: number;
  children?: React.ReactNode;
}
