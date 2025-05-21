export interface ICountry {
  code: string;
  name: string;
  flag: string;
  dialCode: string;
}

export interface IProps {
  label?: string;
  value?: string;
  onChange?: (countryCode: string, phoneNumber: string) => void;
  countries?: ICountry[];
  placeholder?: string;
  error?: boolean;
  helperText?: string;
  disabled?: boolean;
  className?: string;
  defaultCountry?: string;
  size?: 'small' | 'medium' | 'large';
  border?: 'rounded' | 'straight';
}
