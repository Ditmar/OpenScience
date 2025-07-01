export interface Option {
  country: string;
  code: string;
}

export interface IProps {
  label: string;
  error?: boolean;
  helperText?: string;
  disabled?: boolean;
  borderRadius?: 'normal' | 'semi' | 'circle';
  size?: 'small' | 'medium' | 'large';
}
