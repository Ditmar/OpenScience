import type { Meta, StoryObj } from '@storybook/react';
import type { Option } from 'ui/components/atoms/input-select/interfaces/IOption.interface';
import { InputCountry } from './InputCountry';
import type { IProps } from './types/IProps';

const options: Option[] = [
  { country: 'Argentina', code: 'ar' },
  { country: 'Bolivia', code: 'bo' },
  { country: 'Chile', code: 'cl' },
  { country: 'Perú', code: 'pe' },
];

const commonProps: Partial<IProps> = {
  options,
  label: 'Select Country',
  helperText: 'Hint Text',
  leftUpperIcon: 'LanguageSharpIcon',
  rightUpperIcon: 'CancelOutlinedIcon',
  leftBottomIcon: 'InfoOutlineRoundedIcon',
  rightBottomIcon: 'InfoOutlineRoundedIcon',
};

const meta = {
  title: 'ui/components/organisms/input-country',
  component: InputCountry,
  args: {
    ...commonProps,
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
