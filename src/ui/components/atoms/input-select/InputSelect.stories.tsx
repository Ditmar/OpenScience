import type { Meta, StoryObj } from '@storybook/react';
import { InputSelect } from './InputSelect';
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
  options
};

const meta = {
  title: 'ui/components/atoms/input-select',
  component: InputSelect,
  args: {
    ...commonProps,
  },
} as Meta<typeof InputSelect>;

export default meta;

type Story = StoryObj<typeof InputSelect>;

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

export const Disabled: Story = {
  args: {
    ...commonProps,
    disabled: true,
  },
};
