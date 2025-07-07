export interface IconProps {
  icon: string;
  background: 'blue' | 'transparent';
  className?: string;
  containerSize: number;
  iconWidth: number;
  iconHeight: number;
  alt: string;
}

export type ValidationIconsProps = {
  status: 'success' | 'error';
};