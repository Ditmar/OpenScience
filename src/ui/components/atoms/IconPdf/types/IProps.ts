export type IconVariant = 'filled' | 'outlined' | 'rounded' | 'twoTone' | 'sharp';

export interface IconPdfProps {
  size?: 'small' | 'medium' | 'large';
  color?: 'inherit' | 'primary' | 'secondary' | 'action' | 'disabled' | 'error';
  variant?: IconVariant;
  className?: string;
  sx?: object;
}
