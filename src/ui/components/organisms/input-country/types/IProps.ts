import type { ElementType } from 'react';
import type { ICountry } from 'ui/components/atoms/country-list/interfaces/Country.interface';

export interface IProps {
  label?: string;
  leftUpperIcon?: ElementType;
  rightUpperIcon?: ElementType;
  leftBottomIcon?: ElementType;
  rightBottomIcon?: ElementType;
  countryList: ICountry[];
  error?: boolean;
  helperText?: string;
  disabled?: boolean;
  borderRadiusMenu?: 'normal' | 'radius';
  colorVariant?: 'primary' | 'secondary' | 'tertiary' | 'white' | 'black';
  borderRadius?: 'normal' | 'semi' | 'circle';
  size?: 'small' | 'medium' | 'large';
}
