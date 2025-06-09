import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Box from '@mui/material/Box';
import { CountryListDropdown } from './CountryListDropdown';
import type { CountryListDropdownProps, Country } from './types/IProps';

const countriesForStory: Country[] = [
  { code: 'AF', name: 'Afganistán', flag: 'https://flagcdn.com/w320/af.png', dialCode: '+93' },
  { code: 'AL', name: 'Albania', flag: 'https://flagcdn.com/w320/al.png', dialCode: '+355' },
  { code: 'DE', name: 'Alemania', flag: 'https://flagcdn.com/w320/de.png', dialCode: '+49' },
  { code: 'AD', name: 'Andorra', flag: 'https://flagcdn.com/w320/ad.png', dialCode: '+376' },
  { code: 'AO', name: 'Angola', flag: 'https://flagcdn.com/w320/ao.png', dialCode: '+244' },
  { code: 'DZ', name: 'Argelia', flag: 'https://flagcdn.com/w320/dz.png', dialCode: '+213' },
  { code: 'AR', name: 'Argentina', flag: 'https://flagcdn.com/w320/ar.png', dialCode: '+54' },
  { code: 'AM', name: 'Armenia', flag: 'https://flagcdn.com/w320/am.png', dialCode: '+374' },
  { code: 'AU', name: 'Australia', flag: 'https://flagcdn.com/w320/au.png', dialCode: '+61' },
  { code: 'AT', name: 'Austria', flag: 'https://flagcdn.com/w320/at.png', dialCode: '+43' },
  { code: 'AZ', name: 'Azerbaiyán', flag: 'https://flagcdn.com/w320/az.png', dialCode: '+994' },
  { code: 'BR', name: 'Brasil', flag: 'https://flagcdn.com/w320/br.png', dialCode: '+55' },
  { code: 'CA', name: 'Canadá', flag: 'https://flagcdn.com/w320/ca.png', dialCode: '+1' },
  { code: 'CN', name: 'China', flag: 'https://flagcdn.com/w320/cn.png', dialCode: '+86' },
  { code: 'ES', name: 'España', flag: 'https://flagcdn.com/w320/es.png', dialCode: '+34' },
  { code: 'US', name: 'Estados Unidos', flag: 'https://flagcdn.com/w320/us.png', dialCode: '+1' },
  { code: 'FR', name: 'Francia', flag: 'https://flagcdn.com/w320/fr.png', dialCode: '+33' },
  { code: 'IT', name: 'Italia', flag: 'https://flagcdn.com/w320/it.png', dialCode: '+39' },
  { code: 'MX', name: 'México', flag: 'https://flagcdn.com/w320/mx.png', dialCode: '+52' },
  { code: 'GB', name: 'Reino Unido', flag: 'https://flagcdn.com/w320/gb.png', dialCode: '+44' },
];

const meta: Meta<typeof CountryListDropdown> = {
  title: 'ui/components/organisms/CountryListDropdown',
  component: CountryListDropdown,
  argTypes: {
    selectedCountry: { control: 'select', options: ['', ...countriesForStory.map((c) => c.code)] },
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
    countries: countriesForStory,
    selectedCountry: 'AR',
  },
};
