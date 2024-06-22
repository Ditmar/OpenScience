export interface IProps {
  id: string;
  label: string;
  type: 'email' | 'password' | 'text';
  name: string;
  placeholder?: string;
  value: string;
  isValid: boolean;
  eyeIcon?: string;
  onChangeValue: (value: { value: string }) => void;
}
