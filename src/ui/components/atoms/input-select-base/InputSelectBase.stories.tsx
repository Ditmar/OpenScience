import type { Meta, StoryObj } from '@storybook/react';
import { InputSelectBase } from './InputSelectBase';

const meta = {
  title: 'ui/components/atoms/input-select-base',
  component: InputSelectBase,
  argTypes: {
    menuProps: { control: false },
    children: { control: false },
  }
} as Meta<typeof InputSelectBase>;

export default meta;

type Story = StoryObj<typeof InputSelectBase>;

export const Default: Story = {
};

export const WithError: Story = {
  args: {
    error: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
