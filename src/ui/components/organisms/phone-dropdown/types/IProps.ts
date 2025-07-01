import type { InputPhoneProps } from '../../../molecules/input-phone/types/IProps';
import type { CountryListProps } from '../../../molecules/country-list/types/IProps';
import type { CountryFlagProps } from '../../../atoms/icon-flag/types/IProps';

export interface PhoneDropdownProps extends Omit<InputPhoneProps, 'onChange'> {
  onCountrySelect?: (country: CountryFlagProps) => void;
  onChange?: (phone: string) => void;
  countryListProps?: Partial<CountryListProps>;
}
