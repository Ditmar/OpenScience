export interface IProps {
  children?: string;
  variant?: 'primary' | 'secondary' | 'tertiary';
  icon?: string | null;
  onClick?: () => void;
}
