import React from 'react';
import { Stack } from '@mui/material';
import type { IProps as PillProps } from '../../../../library/component/atoms/pills/types/IProps';
import Pill from '../../../../library/component/atoms/pills/pills';
import { AvatarItem } from '../../atoms/AvatarItem/AvatarBagde';
import { Text } from '../../atoms/Text/Text';
import type { AvatarBadgeItemProps } from './types/IProps';
import { Icon } from '../../../utils/vite-svgr/Icon';
import styles from './badges.module.scss';

const getFontSize = (badgeSize: 'small' | 'medium' | 'large') => {
  switch (badgeSize) {
    case 'small':
      return '0.75rem';
    case 'medium':
      return '1rem';
    case 'large':
      return '1.125rem';
    default:
      return '1rem';
  }
};

const getBadgeSizeClass = (badgeSizeArg: 'small' | 'medium' | 'large') => {
  switch (badgeSizeArg) {
    case 'small':
      return 'sm';
    case 'medium':
      return 'md';
    case 'large':
      return 'lg';
    default:
      return 'md';
  }
};

const getPillSize = (badgeSize: 'small' | 'medium' | 'large') => {
  switch (badgeSize) {
    case 'small':
      return 'sm';
    case 'medium':
      return 'md';
    case 'large':
      return 'lg';
    default:
      return 'md';
  }
};

type PillColorMapKeys =
  | 'neutral'
  | 'gray'
  | 'violet'
  | 'blue'
  | 'custom'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'default';
const pillColorMap: Record<PillColorMapKeys, PillProps['color']> = {
  neutral: 'neutral-dark',
  gray: 'neutral-dark', // Añadido 'gray' para el mapeo
  violet: 'brand-secondary',
  blue: 'brand-primary',
  custom: 'neutral-dark',
  primary: 'brand-primary',
  secondary: 'neutral-dark',
  success: 'feedback-positive',
  danger: 'feedback-negative',
  warning: 'feedback-warning',
  info: 'brand-tertiary',
  default: 'neutral-dark',
};
const getMappedPillColor = (
  color: AvatarBadgeItemProps['color'],
  variant: AvatarBadgeItemProps['variant'],
) => {
  const effectiveColorKey: PillColorMapKeys = color as PillColorMapKeys;
  if (effectiveColorKey === 'custom') {
    return 'neutral-dark';
  }
  if (variant === 'filled' && (effectiveColorKey === 'neutral' || effectiveColorKey === 'gray')) {
    return 'neutral-light';
  }
  return pillColorMap[effectiveColorKey];
};

type BadgePrimaryColorMapKeys =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'neutral'
  | 'gray'
  | 'violet'
  | 'blue'
  | 'default'
  | 'custom';
const colorMap: Record<BadgePrimaryColorMapKeys, string> = {
  primary: '#0d6efd',
  secondary: '#6c757d',
  success: '#198754',
  danger: '#dc3545',
  warning: '#ffc107',
  info: '#0dcaf0',
  neutral: '#6c757d',
  gray: '#6c757d',
  violet: '#9a4aff',
  blue: '#3994ff',
  default: '#000',
  custom: '#6c757d',
};

const getTextColor = (
  variant: string,
  color: AvatarBadgeItemProps['color'],
  customColor?: string,
) => {
  const effectiveColorKey: BadgePrimaryColorMapKeys = color as BadgePrimaryColorMapKeys;
  const finalColorValue =
    effectiveColorKey === 'custom' && customColor ? customColor : colorMap[effectiveColorKey];

  if (variant === 'filled') {
    if (effectiveColorKey === 'neutral' || effectiveColorKey === 'gray') return '#fff';
    return '#000';
  }
  return finalColorValue;
};

const getIconColor = (
  variant: string,
  color: AvatarBadgeItemProps['color'],
  customColor?: string,
) => getTextColor(variant, color, customColor);

export function AvatarBadgeItem({
  avatarSrc,
  text = 'Badge Text',

  showAvatar = true,
  size = 'medium',
  bold = false,
  onRemove,
  onClick,

  className = '',
  variant = 'filled',
  color = 'neutral',
  customColor,
  shape = 'default',
  showLeadingIcon = false,
  leftPillProps,
  rightPillProps,
  showRemoveIcon = true,
}: AvatarBadgeItemProps) {
  const handleCerrar = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onRemove) {
      onRemove(e);
    }
  };

  const getIconSizeClass = (iconSize: 'small' | 'medium' | 'large' = 'medium') =>
    styles[`icon--${iconSize}`];

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

    const effectiveColorKeyForContainer: BadgePrimaryColorMapKeys =
      color as BadgePrimaryColorMapKeys;
    const finalColor =
      effectiveColorKeyForContainer === 'custom' && customColor
        ? customColor
        : colorMap[effectiveColorKeyForContainer];

    switch (variant) {
      case 'filled': {
        const filledBgColor = effectiveColorKeyForContainer === 'neutral' ? '#000' : finalColor;
        const filledTextColor = effectiveColorKeyForContainer === 'neutral' ? '#fff' : '#000';

        return {
          ...baseStyles,
          backgroundColor: filledBgColor,
          color: filledTextColor,
          border: '1px solid transparent',
        };
      }
      case 'outline': {
        return {
          ...baseStyles,
          backgroundColor: 'transparent',
          color: finalColor,
          border: `1px solid ${finalColor}`,
        };
      }
      case 'soft': {
        const softBgColor = `${finalColor}20`;
        return {
          ...baseStyles,
          backgroundColor: softBgColor,
          color: finalColor,
          border: '1px solid transparent',
        };
      }
      default:
        return { ...baseStyles };
    }
  };

  const badgeSizeClass = getBadgeSizeClass(size);

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
        color: getTextColor(variant, color, customColor),
      }}
      data-testid="avatar-badge-item"
    >
      {showLeadingIcon && (
        <Icon
          iconName="circle-quarters"
          className={`${styles.badge__icon} ${getIconSizeClass(size)}`}
          strokeWidth="0"
          stroke={getIconColor(variant, color, customColor)}
          color={getIconColor(variant, color, customColor)}
        />
      )}

      {leftPillProps && (
        <Pill
          text={leftPillProps.text}
          icon={leftPillProps.icon}
          size={leftPillProps.size ?? getPillSize(size)}
          color={leftPillProps.color ?? getMappedPillColor(color, variant)}
          variant={leftPillProps.variant}
          rounded={leftPillProps.rounded}
          shadow={leftPillProps.shadow}
          stroke={leftPillProps.stroke}
          iconPosition={leftPillProps.iconPosition}
          ariaLabel={leftPillProps.ariaLabel}
        />
      )}

      {showAvatar && avatarSrc && (
        <AvatarItem
          shape={shape}
          src={avatarSrc}
          size={size}
          aria-label="Avatar"
          data-testid="avatar"
        />
      )}

      <Text
        text={text}
        size={size}
        bold={bold ? 'bold' : 'regular'}
        style={{ color: getTextColor(variant, color, customColor) }}
      />

      {rightPillProps && (
        <Pill
          text={rightPillProps.text}
          icon={rightPillProps.icon}
          size={rightPillProps.size ?? getPillSize(size)}
          color={rightPillProps.color ?? getMappedPillColor(color, variant)}
          variant={rightPillProps.variant}
          rounded={rightPillProps.rounded}
          shadow={rightPillProps.shadow}
          stroke={rightPillProps.stroke}
          iconPosition={rightPillProps.iconPosition}
          ariaLabel={rightPillProps.ariaLabel}
        />
      )}

      {showRemoveIcon && onRemove && (
        <Icon
          onClick={handleCerrar}
          iconName="Close-URL"
          className={styles['badge__icon--x']}
          width="16"
          height="16"
          stroke={getIconColor(variant, color, customColor)}
          color={getIconColor(variant, color, customColor)}
        />
      )}
    </Stack>
  );
}
