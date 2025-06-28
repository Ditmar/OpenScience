export interface PhoneNumberInputProps {
  size?: 'small' | 'medium' | 'large';
  borderRadius?: 'straight' | 'rounded';
  state?: 'default' | 'hover' | 'focus' | 'error' | 'disabled';
  value?: string;
  onChange?: (value: string) => void;
}
