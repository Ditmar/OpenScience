import React from 'react';
import { Stack, Typography, Box, useTheme } from '@mui/material';
import type { Theme } from '@mui/material/styles';
import type { BadgeItemProps } from './types/IProps';
import Pill from '../../atoms/pills/pills';
import { BadgeContainer } from './badgeItem.styles';
import { Icon } from '../../../../ui/utils/vite-svgr/Icon';

type ColorKey = 'neutral' | 'gray' | 'violet' | 'blue' | 'custom';

const getPillSize = (size: string): 'sm' | 'md' | 'lg' => {
  switch (size) {
    case 'small':
      return 'sm';
    case 'medium':
      return 'md';
    default:
      return 'lg';
  }
};

const getTextColor = (
  color: ColorKey,
  variant: string,
  customColor: string | undefined,
  theme: Theme,
): string => {
  const colorMap: Record<ColorKey | 'default', string> = {
    neutral: theme.palette.common.white,
    gray: theme.palette.grey[500],
    violet: theme.palette.secondary.main,
    blue: theme.palette.primary.main,
    custom: customColor ?? theme.palette.warning.main, // ✅ operador nullish coalescing
    default: theme.palette.text.primary,
  };

  if (variant === 'filled') {
    return color === 'neutral' ? theme.palette.text.primary : theme.palette.common.white;
  }

  return colorMap[color];
};

const getAvatarSize = (size: string): number => {
  const sizes: Record<string, number> = {
    small: 25,
    medium: 28,
    large: 31,
  };
  return sizes[size] ?? 28;
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
  className = '',
  variant = 'filled',
  color = 'neutral',
  customColor,
  shape = 'square',
}: BadgeItemProps) {
  const theme = useTheme();
  const textColor = getTextColor(color, variant, customColor, theme);
  const avatarSize = getAvatarSize(size);

  const iconSizeMap: Record<string, number> = { small: 16, medium: 20, large: 24 };
  const boxSizeMap: Record<string, number> = { small: 24, medium: 28, large: 32 };
  const iconSize = iconSizeMap[size] ?? 24;
  const boxSize = boxSizeMap[size] ?? 32;

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
        <Box
          sx={{
            width: boxSize,
            height: boxSize,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'transparent',
          }}
        >
          <Icon
            iconName="close_circle"
            width={iconSize}
            height={iconSize}
            stroke={textColor}
            color={textColor}
            strokeWidth={0}
          />
        </Box>

        {showAvatar && avatarSrc && (
          <img
            src={avatarSrc}
            alt="avatar"
            width={avatarSize}
            height={avatarSize}
            loading="lazy"
            style={{
              borderRadius: shape === 'rounded' ? '8px' : '0px',
              objectFit: 'cover',
            }}
          />
        )}

        {countStart > 0 && (
          <Pill
            text={String(countStart)}
            size={getPillSize(size)}
            color="neutral-dark"
            variant="filled"
            rounded={shape === 'square' ? 'r_none' : 'r_md'}
          />
        )}

        <Typography
          variant="body2"
          sx={{
            color: textColor,
            fontWeight: bold ? 700 : 400,
            fontFamily: '"Poppins", sans-serif',
          }}
        >
          {text}
        </Typography>

        {countEnd > 0 && (
          <Pill
            text={String(countEnd)}
            size={getPillSize(size)}
            color="neutral-dark"
            variant="filled"
            rounded={shape === 'square' ? 'r_none' : 'r_md'}
          />
        )}

        {onRemove && (
          <Icon
            onClick={handleRemove}
            iconName="Close-URL"
            width="16"
            height="16"
            stroke={textColor}
            color={textColor}
            style={{ cursor: 'pointer' }}
          />
        )}
      </Stack>
    </BadgeContainer>
  );
}

export default BadgeItem;
