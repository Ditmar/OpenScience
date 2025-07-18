export interface IconProps {
  icon: string;
  background: 'blue' | 'transparent';
  className?: string;
  containerSize: number;
  iconWidth: number;
  iconHeight: number;
  alt: string;
}

export interface ValidationIconsProps {
  status: 'success' | 'error' | null;
}
