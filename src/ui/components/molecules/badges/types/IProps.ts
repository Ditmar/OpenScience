import React from 'react';
import type { IProps as PillProps } from '../../../../../library/component/atoms/pills/types/IProps';

interface AvatarBadgeItemProps {
  avatarSrc?: string;
  text: string;

  showAvatar?: boolean;
  size?: 'small' | 'medium' | 'large';
  bold?: boolean;
  onRemove?: (event: React.MouseEvent) => void;
  onClick?: React.MouseEventHandler<HTMLDivElement>;

  className?: string;
  variant?: 'filled' | 'outline' | 'soft';
  color?: 'neutral' | 'gray' | 'violet' | 'blue' | 'custom';
  customColor?: string;
  shape?: 'default' | 'rounded';
  showLeadingIcon?: boolean;
  leftPillProps?: PillProps;
  rightPillProps?: PillProps;
  showRemoveIcon?: boolean;
}

export type { AvatarBadgeItemProps };
