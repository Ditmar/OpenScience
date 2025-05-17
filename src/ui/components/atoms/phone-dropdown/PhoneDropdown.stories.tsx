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

export function Default() {
  return <PhoneDropdown countries={countries} />;
}

export function ErrorState() {
  return <PhoneDropdown error helperText="Invalid phone number" />;
}

export function Disabled() {
  return <PhoneDropdown disabled />;
}

export function WithHelperText() {
  return <PhoneDropdown helperText="Include area code" />;
}

export function Small() {
  return <PhoneDropdown size="small" />;
}

export function Large() {
  return <PhoneDropdown size="large" />;
}

export function Rounded() {
  return <PhoneDropdown border="rounded" />;
}

export function Straight() {
  return <PhoneDropdown border="straight" />;
}
