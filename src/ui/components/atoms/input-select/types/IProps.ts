export interface Option {
  country: string;
  code: string;
}

export interface IProps {
  options: Option[];
  error?: boolean;
  disabled?: boolean;
  borderRadius?: 'normal' | 'semi' | 'circle';
  size?: 'small' | 'medium' | 'large';
}
