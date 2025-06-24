import React from 'react';
import type { IProps } from '../../../../../library/component/atoms/pills/types/IProps';

interface AvatarBadgeItemProps {
  avatarSrc?: string;
  text: string;
  countStart?: number;
  countEnd?: number;
  showAvatar?: boolean;
  size?: 'small' | 'medium' | 'large';
  bold?: boolean;
  onRemove?: (e: React.MouseEvent<HTMLDivElement>) => void;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  pillProps?: IProps;
  className?: string;
  variant?: 'filled' | 'outline' | 'soft';
  color?: 'neutral' | 'gray' | 'violet' | 'blue' | 'custom';
  customColor?: string;
  shape?: 'default' | 'rounded';
}

export type { AvatarBadgeItemProps };
