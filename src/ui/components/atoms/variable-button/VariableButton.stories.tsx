import type { StoryObj, Meta } from '@storybook/react';
import VariableButton from './VariableButton';

const meta = {
  title: 'ui/components/atoms/variable-button',
  component: VariableButton,
  argTypes: {
    onClick: {
      action: 'click',
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary'],
    },
  },
} as Meta<typeof VariableButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'INICIAR SESION',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'REGISTRARSE',
    variant: 'secondary',
  },
};

export const Tertiary: Story = {
  args: {
    children: 'REGISTRARSE',
    variant: 'tertiary',
  },
};
