import type { CSSProperties } from 'react';
import CircleQuarters from '../../../../assets/icons/circle-quarters.svg?react';
import './badges.scss';

interface IconProps {
  className?: string;
  style?: CSSProperties;
  size?: 'small' | 'medium' | 'large';
}

export function IconCircleQuarters({ className = '', style, size = 'medium' }: IconProps) {
  const sizeClass = `icon--${size}`;
  return (
    <CircleQuarters className={`${className} ${sizeClass}`} style={style} fill="currentColor" />
  );
}
