import type { Meta, StoryObj } from '@storybook/react';
import CombinedInputFields from './LoginForm';

const meta: Meta<typeof CombinedInputFields> = {
  title: 'ui/components/molecules/login-form',
  component: CombinedInputFields,
  argTypes: {
    isValid: {
      control: 'boolean',
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    isValid: true,
    variant: 'tertiary',
    children: 'INICIAR',
  },
};
export const Secondary: Story = {
  args: {
    isValid: true,
    variant: 'primary',
    children: 'CONTINUAR',
  },
};
