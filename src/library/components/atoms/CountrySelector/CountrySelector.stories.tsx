import type { Meta, StoryObj } from '@storybook/react';
import CountrySelector from './CountrySelector';
import { countries } from './countries';
import type { Country } from './CountrySelector.type';

const meta: Meta<typeof CountrySelector> = {
  title: 'Atoms/CountrySelector',
  component: CountrySelector,
};

export default meta;
type Story = StoryObj<typeof CountrySelector>;

export const Default: Story = {
  args: {
    countries,
    selectedCountry: null,
    onChange: (val: Country | null) => console.log(val),
  },
};

export const WithSelection: Story = {
  args: {
    countries,
    selectedCountry: countries[0],
    onChange: (val: Country | null) => console.log(val),
  },
};

export const Disabled: Story = {
  args: {
    countries,
    selectedCountry: null,
    onChange: () => {},
    disabled: true,
  },
};
