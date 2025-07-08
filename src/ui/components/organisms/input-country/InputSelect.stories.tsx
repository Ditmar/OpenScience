import type { Meta, StoryObj } from '@storybook/react';

import LanguageSharpIcon from '@mui/icons-material/LanguageSharp';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import InfoOutlineRoundedIcon from '@mui/icons-material/InfoOutlineRounded';
import type { ICountry } from 'ui/components/atoms/country-list/interfaces/Country.interface';
import type { IProps } from './types/IProps';
import { InputCountry } from './InputCountry';

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
  label: 'Select Country',
  helperText: 'Hint Text',
  leftUpperIcon: LanguageSharpIcon,
  rightUpperIcon: CancelOutlinedIcon,
  leftBottomIcon: InfoOutlineRoundedIcon,
  rightBottomIcon: InfoOutlineRoundedIcon,
};

const meta = {
  title: 'ui/components/organisms/input-country',
  component: InputCountry,
  args: {
    ...commonProps,
  },
  argTypes: {
    leftUpperIcon: {
      control: false,
    },
    rightUpperIcon: {
      control: false,
    },
    leftBottomIcon: {
      control: false,
    },
    rightBottomIcon: {
      control: false,
    },
  },
} as Meta<typeof InputCountry>;

export default meta;

type Story = StoryObj<typeof InputCountry>;

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
export const Disabled: Story = {
  args: {
    ...commonProps,
    disabled: true,
  },
};
