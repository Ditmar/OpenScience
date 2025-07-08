import type { ICountry } from "ui/components/atoms/country-list/interfaces/Country.interface";

export interface IProps {
  countryList: ICountry[];
  error?: boolean;
  disabled?: boolean;
  borderRadius?: 'normal' | 'semi' | 'circle';
  borderRadiusMenu?: 'normal' | 'radius';
  colorVariant?: 'primary' | 'secondary' | 'tertiary' | 'white' | 'black';
  size?: 'small' | 'medium' | 'large';
}
