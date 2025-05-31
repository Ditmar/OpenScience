export interface IProps {
  title: string;
  subtitle?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  weight?: 'regular' | 'medium' | 'semibold';
  spacing?: 'compact' | 'default' | 'spacious';
  alignment?: 'left' | 'center' | 'right';
}
