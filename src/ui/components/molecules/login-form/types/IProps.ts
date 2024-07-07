export interface IProps {
  isValid: boolean;
  children?: string;
  icon?: string | null;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'cuerte';
  onChangeValue: (value: { value: string }) => void;
}
