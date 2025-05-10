import React from 'react';
import { PhoneDropdown } from './PhoneDropdown';
import type { ICountry } from './types/IProps';

export default {
  title: 'ui/components/atoms/phone-dropdown',
  component: PhoneDropdown,
};

const countries: ICountry[] = [
  { code: 'AR', name: 'Argentina', flag: '🇦🇷', dialCode: '+54' },
  { code: 'AL', name: 'Albania', flag: '🇦🇱', dialCode: '+355' },
  { code: 'DZ', name: 'Algeria', flag: '🇩🇿', dialCode: '+213' },
  { code: 'AD', name: 'Andorra', flag: '🇦🇩', dialCode: '+376' },
];

export const Default = () => <PhoneDropdown countries={countries} />;

export const ErrorState = () => (
  <PhoneDropdown error helperText="Invalid phone number" />
);

export const Disabled = () => <PhoneDropdown disabled />;

export const WithHelperText = () => (
  <PhoneDropdown helperText="Include area code" />
);

export const Small = () => <PhoneDropdown size="small" />;

export const Large = () => <PhoneDropdown size="large" />;

export const Rounded = () => <PhoneDropdown border="rounded" />;

export const Straight = () => <PhoneDropdown border="straight" />;