export type IconVariant = 'filled' | 'outlined' | 'rounded' | 'twoTone' | 'sharp';

export interface IconLinkProps {
  size?: 'small' | 'medium' | 'large';
  color?: 'inherit' | 'primary' | 'secondary' | 'action' | 'disabled' | 'error';
  variant?: IconVariant;
  className?: string;
  sx?: object;
}
