import type { SxProps, Theme } from '@mui/material';

export type MenuPosition = 'left' | 'right';
export type IconSize = 'small' | 'medium' | 'large';
export type IconColor = 'inherit' | 'primary' | 'secondary' | 'action' | 'disabled' | 'error';
export type IconVariant = 'filled' | 'outlined' | 'rounded' | 'twoTone' | 'sharp';

export interface VerticalHamburgerMenuProps {
  position?: MenuPosition;
  size?: IconSize;
  color?: IconColor;
  variant?: IconVariant;
  sx?: SxProps<Theme>;
}
