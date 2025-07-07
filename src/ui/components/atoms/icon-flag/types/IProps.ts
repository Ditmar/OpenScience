export interface CountryFlagProps {
  src: string;
  alt: string;
  code: string;
  name: string;
  dialCode: string;
  size?: 'small' | 'medium' | 'large';
  variant?: 'circular' | 'rectangular';
}
