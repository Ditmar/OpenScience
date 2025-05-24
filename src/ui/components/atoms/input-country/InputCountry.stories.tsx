import type { Meta, StoryObj } from '@storybook/react';
import { InputCountry } from './InputCountry';
import globe from '../../../../assets/icons/globe.svg?raw';
import close_circle from '../../../../assets/icons/close_circle.svg?raw';
import info from '../../../../assets/icons/info.svg?raw';
import ar from '../../../../assets/flags/ar.svg?raw';

type Option = { label: string; value: string };
const countryOptions: Option[] = [
  { label: 'Argentina', value: 'AR' },
  { label: 'Bolivia', value: 'BO' },
  { label: 'Chile', value: 'CL' },
  { label: 'Perú', value: 'PE' },
];

const meta = {
  title: 'ui/components/atoms/input-country',
  component: InputCountry,
  args: {
    // options: [
    //   { label: 'Bolivia', value: 'bo' },
    //   { label: 'Argentina', value: 'ar' },
    //   { label: 'Chile', value: 'cl' },
    // ],
    // placeholder: 'Select country',
    // onChange: (val: string) => console.log(val),
    iconGlobe: globe,
    iconClose: close_circle,
    iconInfo: info,
    iconFlag: ar
  },
} as Meta<typeof InputCountry>;

export default meta;

type Story = StoryObj<typeof InputCountry>;

export const Default: Story = {
  args: {
    
  },
};

// export const WithValue: Story = {
//   args: {
//     value: 'bo',
//   },
// };

// export const WithLabelAndHelper: Story = {
//   args: {
//     label: 'País',
//     helperText: 'Selecciona tu país de residencia',
//   },
// };

// export const WithError: Story = {
//   args: {
//     label: 'País',
//     error: true,
//     helperText: 'Este campo es obligatorio',
//   },
// };

// export const WithIcons: Story = {
//   args: {
//     leftIcon: <Globe size={16} />,
//     rightIcon: <ChevronDown size={16} />,
//   },
// };

// export const Disabled: Story = {
//   args: {
//     disabled: true,
//     value: 'ar',
//   },
// };