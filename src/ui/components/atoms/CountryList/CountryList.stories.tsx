import type { Meta, StoryObj } from '@storybook/react';
import { CountryList } from './CountryList';

// ✅ Datos de prueba
const mockCountries = [
  { code: 'AF', name: 'Afghanistan', flag: 'https://flagcdn.com/w320/af.png', dialCode: '+93' },
  { code: 'AL', name: 'Albania', flag: 'https://flagcdn.com/w320/al.png', dialCode: '+355' },
  { code: 'DZ', name: 'Algeria', flag: 'https://flagcdn.com/w320/dz.png', dialCode: '+213' },
  { code: 'AD', name: 'Andorra', flag: 'https://flagcdn.com/w320/ad.png', dialCode: '+376' },
  { code: 'AO', name: 'Angola', flag: 'https://flagcdn.com/w320/ao.png', dialCode: '+244' },
  { code: 'AR', name: 'Argentina', flag: 'https://flagcdn.com/w320/ar.png', dialCode: '+54' },
  { code: 'AM', name: 'Armenia', flag: 'https://flagcdn.com/w320/am.png', dialCode: '+374' },
  { code: 'AU', name: 'Australia', flag: 'https://flagcdn.com/w320/au.png', dialCode: '+61' },
  { code: 'AT', name: 'Austria', flag: 'https://flagcdn.com/w320/at.png', dialCode: '+43' },
  { code: 'AZ', name: 'Azerbaijan', flag: 'https://flagcdn.com/w320/az.png', dialCode: '+994' },
  { code: 'BD', name: 'Bangladesh', flag: 'https://flagcdn.com/w320/bd.png', dialCode: '+880' },
  { code: 'BE', name: 'Belgium', flag: 'https://flagcdn.com/w320/be.png', dialCode: '+32' },
  { code: 'BO', name: 'Bolivia', flag: 'https://flagcdn.com/w320/bo.png', dialCode: '+591' },
  { code: 'BR', name: 'Brazil', flag: 'https://flagcdn.com/w320/br.png', dialCode: '+55' },
  { code: 'CA', name: 'Canada', flag: 'https://flagcdn.com/w320/ca.png', dialCode: '+1' },
  { code: 'CL', name: 'Chile', flag: 'https://flagcdn.com/w320/cl.png', dialCode: '+56' },
  { code: 'CN', name: 'China', flag: 'https://flagcdn.com/w320/cn.png', dialCode: '+86' },
  { code: 'CO', name: 'Colombia', flag: 'https://flagcdn.com/w320/co.png', dialCode: '+57' },
  { code: 'CR', name: 'Costa Rica', flag: 'https://flagcdn.com/w320/cr.png', dialCode: '+506' },
  { code: 'CU', name: 'Cuba', flag: 'https://flagcdn.com/w320/cu.png', dialCode: '+53' },
  { code: 'DE', name: 'Germany', flag: 'https://flagcdn.com/w320/de.png', dialCode: '+49' },
  { code: 'DK', name: 'Denmark', flag: 'https://flagcdn.com/w320/dk.png', dialCode: '+45' },
  { code: 'DO', name: 'Dominican Republic', flag: 'https://flagcdn.com/w320/do.png', dialCode: '+1' },
  { code: 'EC', name: 'Ecuador', flag: 'https://flagcdn.com/w320/ec.png', dialCode: '+593' },
  { code: 'EG', name: 'Egypt', flag: 'https://flagcdn.com/w320/eg.png', dialCode: '+20' },
  { code: 'ES', name: 'Spain', flag: 'https://flagcdn.com/w320/es.png', dialCode: '+34' },
  { code: 'FR', name: 'France', flag: 'https://flagcdn.com/w320/fr.png', dialCode: '+33' },
  { code: 'GB', name: 'United Kingdom', flag: 'https://flagcdn.com/w320/gb.png', dialCode: '+44' },
  { code: 'IN', name: 'India', flag: 'https://flagcdn.com/w320/in.png', dialCode: '+91' },
  { code: 'IT', name: 'Italy', flag: 'https://flagcdn.com/w320/it.png', dialCode: '+39' },
  { code: 'JP', name: 'Japan', flag: 'https://flagcdn.com/w320/jp.png', dialCode: '+81' },
  { code: 'MX', name: 'Mexico', flag: 'https://flagcdn.com/w320/mx.png', dialCode: '+52' },
  { code: 'PE', name: 'Peru', flag: 'https://flagcdn.com/w320/pe.png', dialCode: '+51' },
  { code: 'PT', name: 'Portugal', flag: 'https://flagcdn.com/w320/pt.png', dialCode: '+351' },
  { code: 'US', name: 'United States', flag: 'https://flagcdn.com/w320/us.png', dialCode: '+1' },
  { code: 'VE', name: 'Venezuela', flag: 'https://flagcdn.com/w320/ve.png', dialCode: '+58' },
];

const meta: Meta<typeof CountryList> = {
  title: 'Components/CountryList',
  component: CountryList,
  argTypes: {
    isOpen: { control: 'boolean' },
    selectedCountry: { control: 'text' },
    onSelectCountry: { action: 'selected' },
  },
};
export default meta;

// ✅ Lista desplegada con diferentes países seleccionados
export const Default: StoryObj<typeof CountryList> = {
  args: {
    countries: mockCountries,
    selectedCountry: '',
    isOpen: true,
    onSelectCountry: () => {},
    onClose: () => {},
  },
};

export const SpainSelected: StoryObj<typeof CountryList> = {
  args: {
    countries: mockCountries,
    selectedCountry: 'ES',
    isOpen: true,
    onSelectCountry: () => {},
    onClose: () => {},
  },
};

export const UnitedStatesSelected: StoryObj<typeof CountryList> = {
  args: {
    countries: mockCountries,
    selectedCountry: 'US',
    isOpen: true,
    onSelectCountry: () => {},
    onClose: () => {},
  },
};

// ✅ Diferentes anchos/altos configurables
export const LargeSize: StoryObj<typeof CountryList> = {
  args: {
    countries: mockCountries,
    selectedCountry: '',
    isOpen: true,
    onSelectCountry: () => {},
    onClose: () => {},
    style: { width: '400px', height: '350px' },
  },
};

// ✅ Integración con un input para búsqueda de países
export const WithInputIntegration: StoryObj<typeof CountryList> = {
  render: (args) => (
    <div>
      <input type="text" placeholder="Search Country..." style={{ marginBottom: '10px', padding: '5px', width: '100%' }} />
      <CountryList {...args} />
    </div>
  ),
  args: {
    countries: mockCountries,
    selectedCountry: '',
    isOpen: true,
    onSelectCountry: () => {},
    onClose: () => {},
  },
};
