import React from 'react';

export interface BadgeItemProps {
  avatarSrc?: string;
  text?: string;
  countStart?: number;
  countEnd?: number;
  showAvatar?: boolean;
  size?: 'small' | 'medium' | 'large';
  bold?: boolean;
  onRemove?: (e: React.MouseEvent<HTMLDivElement>) => void;
  onClick?: () => void;
  pillProps?: {
    icon?: string;
  };
  className?: string;
  variant?: 'filled' | 'outline' | 'soft';
  color?: 'custom' | 'neutral';
  customColor?: string;
  shape?: 'square' | 'rounded';
}

export interface StyleProps {
  size: 'small' | 'medium' | 'large';
  color: 'neutral' | 'custom';
  variant: 'filled' | 'soft' | 'outline';
  customColor?: string;
  shape: 'rounded' | 'square';
  onClick?: () => void;
}
