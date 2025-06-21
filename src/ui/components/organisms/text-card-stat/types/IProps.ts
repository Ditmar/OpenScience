export interface TextCardStatProps {
  label: string;
  badgeColor?: string;
  badgeNumber?: number;
  badgeAvatarUrl?: string;
  badgeAvatarAlt?: string;
  title: string;
  description: string;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'info';
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
  elevation?: number;
  isDisabled?: boolean;
  className?: string;
}
