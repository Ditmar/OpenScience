import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import { Stack } from '@mui/material';
import { AvatarItem } from '../../atoms/AvatarItem/AvatarBagde';
import { Text } from '../../atoms/Text/Text';
import Pill from '../../../../library/component/atoms/pills/pills';
import { IconCircleQuarters } from './Icon';
import type { AvatarBadgeItemProps } from './types/IProps';
import './badges.scss';

const getFontSize = (badgeSize: string) =>
  badgeSize === 'small' ? '$ads-font-size-fifth' : '$ads-font-size-primary';

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

export function AvatarBadgeItem({
  avatarSrc,
  text = 'test',
  countStart = 0,
  countEnd = 0,
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
  };

  const getContainerStyles = () => {
    const baseStyles = {
      cursor: onClick ? 'pointer' : 'default',
      padding: size === 'small' ? '0.125rem 0.375rem' : '0.25rem 0.5rem',
      borderRadius: shape === 'rounded' ? '8px' : '4px',
      transition: 'all 0.2s ease',
      fontFamily: 'Poppins, sans-serif',
      fontSize: getFontSize(size),
      gap: '0.25rem',
      alignItems: 'center',
    };

    if (color === 'custom' && customColor) {
      return {
        ...baseStyles,
        backgroundColor: variant === 'filled' ? customColor : 'transparent',
        border: variant === 'outline' ? `1px solid ${customColor}` : '1px solid transparent',
        color: variant === 'outline' || variant === 'soft' ? customColor : '$ads-text-main',
      };
    }

    return baseStyles;
  };

  const pillSize = getPillSize(size);
  const badgeSizeClass = getBadgeSizeClass(size);
  const pillColor = color === 'neutral' ? 'neutral-dark' : 'neutral-light';

  return (
    <Stack
      aria-label={`Badge de ${text}`}
      direction="row"
      onClick={onClick}
      className={`badge badge--${variant} badge--${color} ${
        shape === 'rounded' ? 'badge--rounded' : ''
      } badge--${badgeSizeClass} ${className}`}
      sx={getContainerStyles()}
      data-testid="avatar-badge-item"
    >
      <IconCircleQuarters size={size} className="badge__icon" />

      {showAvatar && avatarSrc && (
        <AvatarItem src={avatarSrc} size={size} aria-label="Avatar" data-testid="avatar" />
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

      {countStart > 0 && <span className="badge__counter">{countStart}</span>}

      <Text text={text} size={size} bold={bold ? 'bold' : 'regular'} />

      {countEnd > 0 && <span className="badge__counter">{countEnd}</span>}

      {onRemove && (
        <IconButton
          aria-label="Eliminar"
          onClick={handleCerrar}
          size="small"
          className="badge__close-button"
          sx={{
            padding: '4px',
            color: 'white',
            marginLeft: '0.25rem',
            background: '#ffffff',
            border: 'none',
            '&:hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.04)',
            },
            '& svg': {
              fill: 'currentcolor',
            },
          }}
        >
          <CloseIcon fontSize={size} sx={{ color: '#ffffff' }} />
        </IconButton>
      )}
    </Stack>
  );
}
