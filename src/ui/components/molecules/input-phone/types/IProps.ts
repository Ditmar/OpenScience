import type { CountryFlagProps } from '../../../atoms/icon-flag/types/IProps';

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
  onCountryButtonClick?: () => void;
  selectedCountry?: CountryFlagProps;
  isOpen?: boolean;
}
