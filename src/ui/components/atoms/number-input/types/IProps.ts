import type { CountryFlagProps } from '../../icon-flag/types/IProps';

export interface Country {
  code: string;
  name: string;
  src: string;
  dialCode: string;
  alt: string;
}

export interface PhoneNumberInputProps {
  size?: 'small' | 'medium' | 'large';
  borderRadius?: 'rounded' | 'straight';
  state?: 'default' | 'hover' | 'focus' | 'error' | 'disabled';
  value?: string;
  onChange?: (value: string) => void;
  defaultCountry?: Country;
  onCountryButtonClick?: () => void;
  selectedCountry?: CountryFlagProps;
  isOpen?: boolean;
}
