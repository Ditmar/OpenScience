export interface Country {
  code: string;
  name: string;
  flag: string;
  dialCode: string;
}

export interface CountryListDropdownProps {
  countries: Country[];
  onSelectCountry: (countryCode: string) => void;
  selectedCountry?: string;
  headerText?: string;
  maxHeight?: string | number;
  width?: string | number;
}
