import countries from 'i18n-iso-countries';
import enLocale from 'i18n-iso-countries/langs/en.json';
import type { Country } from './CountrySelector.type';

countries.registerLocale(enLocale);

export const getAllCountries = (): Country[] => {
  const countryNames = countries.getNames('en', { select: 'official' });

  return Object.entries(countryNames).map(([code, label]) => ({
    code: code.toLowerCase(),
    label,
  }));
};
