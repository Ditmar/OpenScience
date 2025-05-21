export interface Country {
  code: string;
  label: string;
}

export interface CountrySelectorProps {
  countries: Country[];
  selectedCountry: Country | null;
  onChange: (country: Country | null) => void;
  disabled?: boolean;
  error?: boolean;
  helperText?: string;
}
