import type { ICountry } from "ui/components/atoms/CountryList/interfaces/Country.interface";

export interface IProps {
    countryList: ICountry[];
    error?: boolean;
    disabled?: boolean;
    size: 'small' | 'medium' | 'large';
}