export interface IProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  label?: string;
  variant?: 'default' | 'focus' | 'error' | 'disabled';
  size?: 'small' | 'medium' | 'large';
  borderRadius?: 'none' | 'small' | 'full';
  showCloseIcon?: boolean;
  onCloseClick?: () => void;
  onCopyClick?: () => void;
  showHintText?: boolean;
  hintText?: string;
  className?: string;
}
