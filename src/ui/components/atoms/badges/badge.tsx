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

const Badge: React.FC<BadgeProps> = ({
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
}) => {
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
      {/* Botón cerrar izquierdo */}
      {onClose && (
        <button className="badge__close-button" onClick={onClose}>
          ✕
        </button>
      )}

      {/* Imagen o ícono */}
      {image && <img src={image} alt="avatar" className="badge__image" />}
      {icon && <span className="badge__icon">{icon}</span>}

      {/* Contador izquierdo */}
      {leftCount !== undefined && <span className="badge__counter">{leftCount}</span>}

      {/* Contenido */}
      <span className="badge__content">{children}</span>

      {/* Contador derecho */}
      {rightCount !== undefined && <span className="badge__counter">{rightCount}</span>}

      {/* Botón cerrar derecho */}
      {onClose && (
        <button className="badge__close-button" onClick={onClose}>
          ✕
        </button>
      )}
    </span>
  );
};

export default Badge;
