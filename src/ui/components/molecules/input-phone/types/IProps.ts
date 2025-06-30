export interface InputPhoneProps {
  iconText?: string;
  hintText?: string;
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  borderRadius?: 'rounded' | 'straight';
  state?: 'default' | 'hover' | 'focus' | 'error' | 'disabled';
  initialValue?: string;
  onChange?: (value: string) => void;
  onClose?: () => void;
}
