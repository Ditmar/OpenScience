import React from 'react';
import './badge.scss';
import Pill from '../../../../library/component/atoms/pills/pills';
import { IconCircleQuarters, IconClose } from './Icon';
import type { BadgeProps } from './types/IProps';

function Badge({
  variant,
  color,
  customColor,
  icon,
  image,
  shape = 'default',
  size = 'md',
  children,
  leftCount,
  rightCount,
  onClose,
}: BadgeProps) {
  const baseClass = 'badge';
  const variantClass = `badge--${variant}`;
  const colorClass = `badge--${color}`;
  const shapeClass = shape === 'rounded' && 'badge--rounded';
  const sizeClass = `badge--${size}`;

  const getIconColor = () => {
    if (variant === 'filled') {
      return color === 'neutral' || color === 'gray' ? 'black' : 'white';
    }

    if (variant === 'outline' || variant === 'soft') {
      if (customColor) return 'currentColor';

      const outlineSoftColors = ['violet', 'blue'];
      if (outlineSoftColors.includes(color)) {
        return 'currentColor';
      }

      return 'black';
    }

    return 'currentColor';
  };

  const iconColor = getIconColor();
  const iconStyle = { color: iconColor };

  const customStyle =
    color === 'custom' && customColor
      ? {
          backgroundColor: variant === 'filled' ? customColor : 'transparent',
          borderColor: variant === 'outline' ? customColor : undefined,
          color: variant === 'outline' || variant === 'soft' ? customColor : undefined,
        }
      : {};

  return (
    <span
      className={[baseClass, variantClass, colorClass, shapeClass, sizeClass]
        .filter(Boolean)
        .join(' ')}
      style={customStyle}
    >
      {onClose && (
        <button className="badge__close-button" onClick={onClose} aria-label="Close badge">
          <IconCircleQuarters style={iconStyle} />
        </button>
      )}

      {image && <img src={image} alt="avatar" className="badge__image" />}
      {icon && <span className="badge__icon">{icon}</span>}

      {leftCount !== undefined && (
        <Pill text={String(leftCount)} variant="filled" color="neutral-light" size="sm" />
      )}

      <span className="badge__content">{children}</span>

      {rightCount !== undefined && (
        <Pill text={String(rightCount)} color="neutral-light" variant="filled" size="sm" />
      )}

      {onClose && (
        <button className="badge__close-button" onClick={onClose} aria-label="Close badge">
          <IconClose style={iconStyle} />
        </button>
      )}
    </span>
  );
}

export default Badge;
