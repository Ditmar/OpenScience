import type { Meta, StoryObj } from '@storybook/react';
import { CountryListDropdown } from './CountryList';
import type { ICountry } from './interfaces/Country.interface';
import type { IProps } from './types/IProps';

const countryList: ICountry[] = [
  { code: 'ar', name: 'Argentina', dialCode: '+54' },
  { code: 'at', name: 'Austria', dialCode: '+43' },
  { code: 'bd', name: 'Bangladesh', dialCode: '+880' },
  { code: 'be', name: 'Belgium', dialCode: '+32' },
  { code: 'bo', name: 'Bolivia', dialCode: '+591' },
  { code: 'br', name: 'Brazil', dialCode: '+55' },
  { code: 'ca', name: 'Canada', dialCode: '+1' },
  { code: 'cl', name: 'Chile', dialCode: '+56' },
  { code: 'cn', name: 'China', dialCode: '+86' },
  { code: 'co', name: 'Colombia', dialCode: '+57' },
  { code: 'cr', name: 'Costa Rica', dialCode: '+506' },
  { code: 'cu', name: 'Cuba', dialCode: '+53' },
  { code: 'de', name: 'Germany', dialCode: '+49' },
  { code: 'dk', name: 'Denmark', dialCode: '+45' },
  { code: 'eg', name: 'Egypt', dialCode: '+20' },
  { code: 'pe', name: 'Peru', dialCode: '+51' },
];

const commonProps: Partial<IProps> = {
  countryList,
};

const meta = {
  title: 'ui/components/atoms/country-list',
  component: CountryListDropdown,
  argTypes: {
    colorVariant: {
      control: 'radio',
      options: ['primary', 'secondary', 'tertiary', 'white', 'black'],
    },
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
    },
  },
  args: {
    ...commonProps,
  },
} as Meta<typeof CountryListDropdown>;
export default meta;

type Story = StoryObj<typeof CountryListDropdown>;

export const Default: Story = {
  args: {
    ...commonProps,
  },
};

export const Error: Story = {
  args: {
    ...commonProps,
    error: true,
  },
};

export const ColorVariant: Story = {
  args: {
    ...commonProps,
    colorVariant: 'tertiary',
  },
};
