export interface BadgeProps {
  avatarUrl?: string;
  avatarAlt?: string;
  text: string;
  number: number;
  color?: string;
  size?: 'small' | 'medium' | 'large';
  className?: string;
}
