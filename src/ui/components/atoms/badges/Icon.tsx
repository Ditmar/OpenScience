import React from 'react';
import CircleQuarters from '../../../../assets/icons/circle-quarters.svg?react';
import Close from '../../../../assets/icons/Close-URL.svg?react';

interface IconProps {
  className?: string;
  style?: React.CSSProperties;
}

export function IconCircleQuarters({ className, style }: IconProps) {
  return <CircleQuarters className={className} style={style} fill="currentColor" />;
}

export function IconClose({ className, style }: IconProps) {
  return <Close className={className} style={style} fill="currentColor" />;
}
