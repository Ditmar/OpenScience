import type { Meta, StoryObj } from '@storybook/react';
import { InputCountry } from './InputCountry';
import type { IProps } from './types/IProps';

interface Option {
  country: string;
  code: string;
}
const options: Option[] = [
  { country: 'Argentina', code: 'ar' },
  { country: 'Bolivia', code: 'bo' },
  { country: 'Chile', code: 'cl' },
  { country: 'Perú', code: 'pe' },
];

const commonProps: Partial<IProps> = {
  label: 'Select Country',
  options,
  helperText: 'Hint Text',
};

const meta = {
  title: 'ui/components/molecules/input-country',
  component: InputCountry,
  args: {
    ...commonProps,
  },
} as Meta<typeof InputCountry>;

export default meta;

type Story = StoryObj<typeof InputCountry>;

export const Empty: Story = {
  args: {
    ...commonProps,
  },
};

export const WithValue: Story = {
  args: {
    ...commonProps,
    options,
  },
};

export const WithError: Story = {
  args: {
    ...commonProps,
    error: true,
  },
};

export const WithIcons: Story = {
  args: {
    ...commonProps,
  },
};

export const Disabled: Story = {
  args: {
    ...commonProps,
    disabled: true,
  },
};
