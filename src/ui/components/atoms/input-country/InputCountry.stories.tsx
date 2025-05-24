import { InputCountry } from './InputCountry';
import type { Meta, StoryObj } from '@storybook/react';
import type { IProps } from './types/IProps';
import globe from '../../../../assets/icons/globe.svg?raw';
import close_circle from '../../../../assets/icons/close_circle.svg?raw';
import info from '../../../../assets/icons/info.svg?raw';

type Option = { country: string; code: string };
const options: Option[] = [
  { country: 'Argentina', code: 'ar' },
  { country: 'Bolivia', code: 'bo' },
  { country: 'Chile', code: 'cl' },
  { country: 'Perú', code: 'pe' },
];

const commonProps: Partial<IProps> = {
  label: "Select Country",
  options: options,
  helperText: 'Hint Text',
  // iconGlobe: globe,
  // iconClose: close_circle,
  // iconInfo: info
};

const meta = {
  title: 'ui/components/atoms/input-country',
  component: InputCountry,
  args: {
    ...commonProps
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
    options: options,
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