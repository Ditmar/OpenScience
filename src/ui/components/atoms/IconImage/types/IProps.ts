export type IconVariant = 'filled' | 'outlined' | 'rounded' | 'twoTone' | 'sharp';

export interface IconImageProps {
  size?: 'small' | 'medium' | 'large';
  color?: 'inherit' | 'primary' | 'secondary' | 'action' | 'disabled' | 'error';
  variant?: IconVariant;
  className?: string;
  sx?: object;
}
