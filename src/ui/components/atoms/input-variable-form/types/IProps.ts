export interface IProps {
  label: string;
  type: 'text' | 'email' | 'password';
  value: string;
  onChange: (newValue: string) => void;
}
