import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Box from '@mui/material/Box';
import { CountryListDropdown } from './CountryListDropdown';
import type { CountryListDropdownProps } from './types/IProps';
import { MockCountriesData } from './MockCountries';

const meta: Meta<typeof CountryListDropdown> = {
  title: 'ui/components/organisms/CountryListDropdown',
  component: CountryListDropdown,
  argTypes: {
    selectedCountry: {
      control: 'select',
      options: ['', ...MockCountriesData.map((c) => c.code)],
    },
    onSelectCountry: { action: 'selectedCountry' },
    maxHeight: { control: 'text' },
    width: { control: 'text' },
    headerText: { control: 'text' },
    countries: { control: false },
  },
  parameters: {
    layout: 'padded',
  },
  decorators: [
    (Story) => (
      <Box sx={{ width: 'auto', maxWidth: 400, padding: '20px' }}>
        <Story />
      </Box>
    ),
  ],
};

export default meta;

type Story = StoryObj<CountryListDropdownProps>;

function InteractiveStoryWrapper(props: CountryListDropdownProps): JSX.Element {
  const {
    selectedCountry: initialSelectedCountry,
    onSelectCountry,
    countries,
    headerText,
    width,
    maxHeight,
  } = props;
  const [selected, setSelected] = useState(initialSelectedCountry);

  const handleSelectCountry = (code: string): void => {
    setSelected(code);
    onSelectCountry(code);
  };

  return (
    <CountryListDropdown
      countries={countries}
      headerText={headerText}
      width={width}
      maxHeight={maxHeight}
      selectedCountry={selected}
      onSelectCountry={handleSelectCountry}
    />
  );
}

export const Default: Story = {
  render: InteractiveStoryWrapper,
  args: {
    headerText: 'Select Country',
    width: '320px',
    maxHeight: '350px',
    countries: MockCountriesData,
    selectedCountry: 'AR',
  },
};
