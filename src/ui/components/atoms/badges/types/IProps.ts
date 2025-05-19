export interface BadgeProps {
  variant: 'filled' | 'outline' | 'soft';
  color: 'neutral' | 'gray' | 'violet' | 'blue' | 'custom';
  customColor?: string;
  icon?: React.ReactNode;
  image?: string;
  shape: 'default' | 'rounded';
  size: 'sm' | 'md';
  children?: React.ReactNode;
  leftCount?: number;
  rightCount?: number;
  onClose?: () => void;
}
