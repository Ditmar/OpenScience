import type { Option } from '../interfaces/IOption.interface';

export interface IProps {
  options: Option[];
  error?: boolean;
  disabled?: boolean;
  borderRadius?: 'normal' | 'semi' | 'circle';
  size?: 'small' | 'medium' | 'large';
}
