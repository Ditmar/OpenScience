
import {type URLInputRadius } from '../Input.styles';

export interface UrlInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  variant?: 'default' | 'focus' | 'error' | 'disabled';
  onCopy?: () => void;
  size?: 'small' | 'medium' | 'large';
  radius?: URLInputRadius;
  ref?: React.Ref<HTMLInputElement>;
}