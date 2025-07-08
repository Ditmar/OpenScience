import type { ICountry } from '../interfaces/Country.interface';

export interface IProps {
  countryList: ICountry[];
  error?: boolean;
  colorVariant?: 'primary' | 'secondary' | 'tertiary' | 'white' | 'black';
  size?: 'small' | 'medium' | 'large';
}
