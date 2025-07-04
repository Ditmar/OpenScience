import type { Option } from '../../../atoms/input-select/interfaces/IOption.interface';

export interface IProps {
  label?: string;
  leftUpperIcon?: string;
  rightUpperIcon?: string;
  leftBottomIcon?: string;
  rightBottomIcon?: string;
  options: Option[];
  error?: boolean;
  helperText?: string;
  disabled?: boolean;
  borderRadius?: 'normal' | 'semi' | 'circle';
  size?: 'small' | 'medium' | 'large';
}
