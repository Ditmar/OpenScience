export interface IProps {
  children?: string;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'cuerte';
  icon?: string | null;
  onClick?: () => void;
}
