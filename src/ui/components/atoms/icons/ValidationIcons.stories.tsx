import type { Meta, StoryObj } from '@storybook/react';
import { ValidationIcons } from './ValidationIcons';

const meta: Meta<typeof ValidationIcons> = {
  title: 'ui/components/atoms/ValidationIcons',
  component: ValidationIcons,
  argTypes: {
    status: {
      control: {
        type: 'select',
        options: [null, 'success', 'error'],
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof ValidationIcons>;

export const Default: Story = {
  args: {
    status: null,
  },
};

export const Success: Story = {
  args: {
    status: 'success',
  },
};

export const Error: Story = {
  args: {
    status: 'error',
  },
};
