import React from 'react';
import './badge.scss';

interface BadgeProps {
  variant: 'filled' | 'outline' | 'soft';
  color: 'neutral' | 'gray' | 'violet' | 'blue' | 'custom';
  customColor?: string;
  icon?: React.ReactNode;
  image?: string;
  shape: 'default' | 'rounded';
  size: 'sm' | 'md';
  children?: React.ReactNode;
  leftCount?: number;
  rightCount?: number;
  onClose?: () => void;
}

function Badge({
  variant,
  color,
  customColor,
  icon,
  image,
  shape,
  size,
  children,
  leftCount,
  rightCount,
  onClose,
}: BadgeProps) {
  const baseClass = 'badge';
  const variantClass = `badge--${variant}`;
  const colorClass = `badge--${color}`;
  const shapeClass = shape === 'rounded' ? 'badge--rounded' : '';
  const sizeClass = `badge--${size}`;

  const customStyle =
    color === 'custom'
      ? {
          backgroundColor: variant === 'filled' ? customColor : 'transparent',
          borderColor: variant === 'outline' ? customColor : undefined,
          color: variant === 'outline' || variant === 'soft' ? customColor : undefined,
        }
      : {};

  return (
    <span
      className={[baseClass, variantClass, colorClass, shapeClass, sizeClass].join(' ')}
      style={customStyle}
    >
      {onClose && (
        <button className="badge__close-button" onClick={onClose}>
          ✕
        </button>
      )}

      {image && <img src={image} alt="avatar" className="badge__image" />}
      {icon && <span className="badge__icon">{icon}</span>}

      {leftCount !== undefined && <span className="badge__counter">{leftCount}</span>}

      <span className="badge__content">{children}</span>

      {rightCount !== undefined && <span className="badge__counter">{rightCount}</span>}

      {onClose && (
        <button className="badge__close-button" onClick={onClose}>
          ✕
        </button>
      )}
    </span>
  );
}

Badge.defaultProps = {
  customColor: undefined,
  icon: undefined,
  image: undefined,
  children: undefined,
  leftCount: undefined,
  rightCount: undefined,
  onClose: undefined,
};

export default Badge;
