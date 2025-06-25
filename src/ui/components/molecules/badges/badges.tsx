import React from 'react';
import { Stack } from '@mui/material';
import type { IProps } from 'library/component/atoms/pills/types/IProps';
import { AvatarItem } from '../../atoms/AvatarItem/AvatarBagde';
import { Text } from '../../atoms/Text/Text';
import Pill from '../../../../library/component/atoms/pills/pills';
import type { AvatarBadgeItemProps } from './types/IProps';
import { Icon } from '../../../utils/vite-svgr/Icon';
import styles from './badges.module.scss';

const getFontSize = (badgeSize: string) => (badgeSize === 'small' ? '0.75rem' : '1rem');

const getPillSize = (pillSizeArg: string) => {
  switch (pillSizeArg) {
    case 'small':
      return 'sm';
    case 'medium':
      return 'md';
    default:
      return 'lg';
  }
};

const getBadgeSizeClass = (badgeSizeArg: string) => {
  switch (badgeSizeArg) {
    case 'small':
      return 'sm';
    case 'medium':
      return 'md';
    default:
      return 'lg';
  }
};

const pillColorMap: Record<string, IProps['color']> = {
  neutral: 'neutral-dark',
  custom: 'neutral-dark',
};

const getMappedPillColor = (color: string, variant: string): IProps['color'] => {
  if (variant === 'filled') {
    if (color === 'neutral') return 'neutral-light';
    return 'neutral-dark';
  }

  if (color === 'custom') return 'neutral-dark';
  return pillColorMap[color] ?? 'read-only-disabled';
};

export function AvatarBadgeItem({
  avatarSrc,
  text = 'Badge Text',
  countStart = 100,
  countEnd = 100,
  showAvatar = true,
  size = 'medium',
  bold = false,
  onRemove,
  onClick,
  pillProps,
  className = '',
  variant = 'filled',
  color = 'neutral',
  customColor,
  shape = 'default',
}: AvatarBadgeItemProps) {
  const handleCerrar = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onRemove) {
      onRemove(e as React.MouseEvent<HTMLDivElement>);
    }
  };

  const getIconSizeClass = (iconSize: 'small' | 'medium' | 'large' = 'medium') =>
    styles[`icon--${iconSize}`];

  const colorMap: Record<string, string> = {
    primary: '#0d6efd',
    secondary: '#6c757d',
    success: '#198754',
    danger: '#dc3545',
    warning: '#ffc107',
    info: '#0dcaf0',
    neutral: '#6c757d',
    default: '#000',
  };

  const getTextColor = () => {
    if (variant === 'filled') {
      if (color === 'neutral') return '#fff';
      return '#000';
    }
    if (color === 'custom' && customColor) return customColor;
    return colorMap[color] || colorMap.default;
  };

  const getIconColor = () => getTextColor();

  const getContainerStyles = () => {
    const baseStyles = {
      display: 'inline-flex',
      cursor: onClick ? 'pointer' : 'default',
      padding: size === 'small' ? '0.125rem 0.375rem' : '0.25rem 0.5rem',
      borderRadius: shape === 'rounded' ? '8px' : '0px',
      transition: 'all 0.2s ease',
      fontFamily: 'Poppins, sans-serif',
      fontSize: getFontSize(size),
      gap: '0.25rem',
      alignItems: 'center',
    };

    const finalColor =
      color === 'custom' && customColor ? customColor : colorMap[color] ?? colorMap.default;

    if (variant === 'filled') {
      const filledStyles =
        color === 'neutral'
          ? { backgroundColor: '#000', color: '#fff' }
          : { backgroundColor: '#fff', color: '#000' };

      return {
        ...baseStyles,
        ...filledStyles,
        border: '1px solid transparent',
      };
    }

    return {
      ...baseStyles,
      backgroundColor: variant === 'soft' ? `${finalColor}20` : 'transparent',
      color: finalColor,
      border: variant === 'outline' ? `1px solid ${finalColor}` : '1px solid transparent',
    };
  };

  const pillSize = getPillSize(size);
  const badgeSizeClass = getBadgeSizeClass(size);
  const pillColor = getMappedPillColor(color, variant);

  const badgeClassName = [
    styles.badge,
    styles[`badge--${variant}`],
    styles[`badge--${color}`],
    shape === 'rounded' ? styles['badge--rounded'] : '',
    styles[`badge--${badgeSizeClass}`],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Stack
      aria-label={`Badge de ${text}`}
      direction="row"
      onClick={onClick}
      className={badgeClassName}
      sx={{
        ...getContainerStyles(),
        color: getTextColor(),
      }}
      data-testid="avatar-badge-item"
    >
      <Icon
        name="close_circle"
        iconName="circle-quarters"
        className={`${styles.badge__icon} ${getIconSizeClass(size)}`}
        strokeWidth="0"
        stroke={getIconColor()}
        color={getIconColor()}
      />

      {showAvatar && avatarSrc && (
        <AvatarItem
          shape={shape}
          src={avatarSrc}
          size={size}
          aria-label="Avatar"
          data-testid="avatar"
        />
      )}

      {pillProps && (
        <Pill
          text={text}
          icon={pillProps.icon}
          size={pillSize}
          color={pillColor}
          variant={variant}
        />
      )}

      {countStart > 0 && (
        <span className={styles.badge__counter} style={{ color: getTextColor() }}>
          {countStart}
        </span>
      )}

      <Text
        text={text}
        size={size}
        bold={bold ? 'bold' : 'regular'}
        style={{ color: getTextColor() }}
      />

      {countEnd > 0 && (
        <span className={styles.badge__counter} style={{ color: getTextColor() }}>
          {countEnd}
        </span>
      )}

      {onRemove && (
        <Icon
          onClick={handleCerrar}
          name="Close-URL"
          iconName="Close-URL"
          className={styles['badge__icon--x']}
          width="16"
          height="16"
          aria-label="Remove badge"
          role="button"
          stroke={getIconColor()}
          color={getIconColor()}
        />
      )}
    </Stack>
  );
}
