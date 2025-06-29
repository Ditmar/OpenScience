import React from 'react';
import { Stack, Avatar, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import type { BadgeItemProps } from './types/IProps';
import Pill from '../../atoms/pills/pills';
import { BadgeContainer } from './badgeItem.styles';

const pillColorMap: Record<'neutral' | 'white' | 'gray' | 'violet' | 'blue' | 'custom', string> = {
  neutral: 'neutral-dark',
  white: 'neutral-dark',
  gray: 'neutral-dark',
  violet: 'neutral-dark',
  blue: 'neutral-dark',
  custom: 'neutral-dark',
};

const getPillSize = (pillSizeArg: string): 'sm' | 'md' | 'lg' => {
  switch (pillSizeArg) {
    case 'small':
      return 'sm';
    case 'medium':
      return 'md';
    default:
      return 'lg';
  }
};

const getMappedPillColor = (color: keyof typeof pillColorMap, variant: string): string => {
  if (variant === 'filled') {
    return color === 'neutral' ? 'neutral-light' : 'neutral-dark';
  }
  return pillColorMap[color];
};

const getTextColor = (
  color: keyof typeof pillColorMap,
  variant: string,
  customColor?: string,
): string => {
  if (variant === 'filled') {
    return color === 'neutral' ? '#fff' : '#000';
  }

  if (color === 'custom' && customColor) {
    return customColor;
  }

  const colorMap: Record<typeof color, string> = {
    neutral: '#0d6efd',
    white: '#ffffff',
    gray: '#6c757d',
    violet: '#6610f2',
    blue: '#0d6efd',
    custom: '#ffc107',
  };

  return colorMap[color];
};

const getAvatarSize = (size: string): number => {
  if (size === 'small') return 24;
  if (size === 'large') return 31;
  return 28;
};

function BadgeItem({
  avatarSrc,
  text = 'Badge Text',
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
  shape = 'square',
}: BadgeItemProps) {
  const textColor = getTextColor(color, variant, customColor);
  const avatarSize = getAvatarSize(size);

  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onRemove) {
      onRemove(e as React.MouseEvent<HTMLDivElement>);
    }
  };

  return (
    <BadgeContainer
      size={size}
      color={color}
      variant={variant}
      customColor={customColor}
      shape={shape}
      onClick={onClick}
      className={className}
      data-testid="avatar-badge-item"
    >
      <Stack direction="row" alignItems="center" spacing={1}>
        {onClick && <HighlightOffIcon fontSize="small" sx={{ color: textColor }} />}

        {showAvatar && avatarSrc && (
          <Avatar
            src={avatarSrc}
            alt={text}
            sx={{
              width: avatarSize,
              height: avatarSize,
              borderRadius: shape === 'rounded' ? 1 : 0,
            }}
          />
        )}

        {pillProps && (
          <Pill
            text={text}
            icon={pillProps.icon}
            size={getPillSize(size)}
            color={getMappedPillColor(color, variant)}
            variant={variant}
          />
        )}

        {countStart > 0 && (
          <Typography variant="body2" sx={{ color: textColor, fontWeight: 500 }}>
            {countStart}
          </Typography>
        )}

        <Typography
          variant="body2"
          sx={{
            color: textColor,
            fontWeight: bold ? 700 : 400,
          }}
        >
          {text}
        </Typography>

        {countEnd > 0 && (
          <Typography variant="body2" sx={{ color: textColor, fontWeight: 500 }}>
            {countEnd}
          </Typography>
        )}

        {onRemove && (
          <IconButton onClick={handleRemove} size="small" aria-label="Remove badge">
            <CloseIcon fontSize="small" sx={{ color: textColor }} />
          </IconButton>
        )}
      </Stack>
    </BadgeContainer>
  );
}

export default BadgeItem;
