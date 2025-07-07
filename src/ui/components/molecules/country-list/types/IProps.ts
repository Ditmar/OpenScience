import type { CountryFlagProps } from '../../../atoms/icon-flag/types/IProps';

export interface CountryListProps {
  countries: CountryFlagProps[];
  onCountrySelect?: (country: CountryFlagProps) => void;
  size?: 'small' | 'medium' | 'large';
  flagVariant?: 'circular' | 'rectangular';
  containerVariant?: 'rounded' | 'straight';
  maxHeight?: string | number;
  showTitle?: boolean;
  title?: string;
  titleSize?: 'small' | 'medium' | 'large';
}
